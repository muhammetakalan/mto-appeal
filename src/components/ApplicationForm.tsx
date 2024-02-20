'use client'

import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import i18next from 'i18next'

import * as z from 'zod'
import { zodI18nMap } from 'zod-i18n-map'

import BirthDateField from '@/components/formField/BirthDate'
import CovenantField from '@/components/formField/Covenant'
import EmailField from '@/components/formField/Email'
import GenderField from '@/components/formField/Gender'
import InterestsField from '@/components/formField/Interests'
import NameField from '@/components/formField/Name'
import PhoneNumberField from '@/components/formField/PhoneNumber'
import SurnameField from '@/components/formField/Surname'
import TCKNField from '@/components/formField/Tckn'
import { toast } from '@/components/ui/use-toast'

import { addRecord } from '@/action'
import FormSchema from '@/lib/form-schema'
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
  const [pending, setPending] = useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setPending(true)

    const { success, message } = await addRecord(data)

    if (success) {
      toast({
        title: 'Başvurunuz Alındı',
        description: `MTO'ya şimdiden hoş geldin. ${data.name} ${data.surname} 🤗️`
      })
    } else {
      toast({
        title: 'Başvuru Başarısız',
        description: message
      })
    }

    setPending(false)
  }

  return (
    <div className="p-8">
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
          <Button
            className="select-none"
            type="submit"
            disabled={pending ? true : false}
          >
            {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {pending ? 'Başvuru Yapılıyor' : 'Başvur'}
          </Button>
        </form>
      </Form>
    </div>
  )
}
