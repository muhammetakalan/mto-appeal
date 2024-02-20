'use server'

import * as z from 'zod'

import connectDB from './lib/connectDB'
import Record from './models/Record'
import FormSchema from '@/lib/form-schema'

export async function addRecord(data: z.infer<typeof FormSchema>) {
  try {
    await connectDB()

    const requiredFields: Array<keyof typeof data> = [
      'name',
      'surname',
      'email',
      'gender',
      'birthdate',
      'tckn',
      'phoneNumber',
      'interests',
      'covenant'
    ]
    const hasRequiredData = requiredFields.every(field => data[field])

    if (!hasRequiredData) {
      return {
        message: 'Tüm alanlar zorunlu',
        success: false
      }
    }

    const existingForm = await Record.findOne({ email: data.email })

    if (existingForm) {
      return {
        message: 'Zaten Başvurdunuz',
        success: false
      }
    } else {
      await new Record(data).save()

      return { success: true }
    }
  } catch (error) {
    console.error('An error occurred while sending the form to MongoDB:', error)
    throw error
  }
}
