'use server'

import { Resend } from 'resend'
import * as z from 'zod'

import FormSchema from '@/lib/form-schema'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendMail(data: z.infer<typeof FormSchema>) {
  try {
    await resend.emails.send({
      from: 'MTO <no-reply@mto.akalan.dev>',
      to: [data.email],
      subject: 'Başvurunuz Alındı',
      html: `
      Selamünaleyküm ${data.name} ${data.surname} 👋️, <br/> <br/>

      MTO'ya şimdiden hoş geldin! 🤗️ Bu e-postayı alabiliyorsan, her şey yolunda demektir. <br/> <br/>

      Gelişmelerden seni en kısa sürede haberdar edeceğiz. <br/> <br/>

      Selametle <br/> <br/>

      <pre>${JSON.stringify(data, null, 4)}</pre>
      `
    })
  } catch (error) {
    console.error(error)
  }
}
