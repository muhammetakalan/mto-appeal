'use client'

import { useForm } from 'react-hook-form'

import i18next from 'i18next'

import * as z from 'zod'
import { zodI18nMap } from 'zod-i18n-map'

import NameField from '@/components/formField/name-field'

import BirthDateField from './formField/birth-date-field'
import CovenantField from './formField/covenant-field'
import EmailField from './formField/email-field'
import GenderField from './formField/gender-filed'
import InterestsField from './formField/interests-field'
import PhoneNumberField from './formField/phone-number-field'
import SurnameField from './formField/surname-field'
import TCKNField from './formField/tckn-field'
import { toast } from './ui/use-toast'
import { sendMail } from '@/action'
import FormSchema from '@/lib/form-schema'
import { Alert, AlertDescription } from '@/ui/alert'
import { Button } from '@/ui/button'
import { Form } from '@/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import translation from 'zod-i18n-map/locales/tr/zod.json'

i18next.init({
  lng: 'tr',
  resources: { tr: { zod: translation } }
})
z.setErrorMap(zodI18nMap)

export default function ApplicationForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  })

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    sendMail(data)

    toast({
      title: 'Başvurunuz Alındı',
      description: `MTO'ya şimdiden hoş geldin. ${data.name} ${data.surname} 🤗️`
    })
  }

  return (
    <div className="space-y-4 p-8">
      <Alert variant="destructive">
        <AlertDescription>
          Kimlik bilgilerini doğru paylaşmadığınız takdirde hesap bilgileriniz
          size ulaşmayacaktır.
        </AlertDescription>
      </Alert>

      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <NameField />
          <SurnameField />
          <GenderField />
          <BirthDateField />
          <TCKNField />
          <EmailField />
          <PhoneNumberField />
          <InterestsField />
          <CovenantField />
          <Button type="submit">Başvur</Button>
        </form>
      </Form>
    </div>
  )
}
