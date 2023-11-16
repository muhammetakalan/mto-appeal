import * as z from 'zod'

const FormSchema = z.object({
  name: z.string().min(2).max(24),
  surname: z.string().min(2).max(24),
  email: z.string().email()
})

export default FormSchema
