'use server'

import { Resend } from 'resend'
import * as z from 'zod'

import FormSchema from '@/lib/form-schema'
import prisma from '@/lib/prisma'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendMail(data: z.infer<typeof FormSchema>) {
  const existingForm = await prisma.form.findFirst({
    where: {
      OR: [{ email: data.email }]
    }
  })

  if (existingForm) {
    return false
  } else {
    await prisma.form.create({ data })
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

    return true
  }
}
