import * as z from 'zod'

const FormSchema = z.object({
  name: z.string().min(2).max(24),
  surname: z.string().min(2).max(24),
  email: z.string().email(),
  gender: z.string().refine(value => value === 'male' || value === 'female'),
  birthdate: z.date(),
  tckn: z.string().refine(val => val.length === 11),
  phoneNumber: z.string().refine(val => val.length === 10),
  interests: z.string().min(4).max(64),
  covenant: z.literal(true)
})

export default FormSchema
