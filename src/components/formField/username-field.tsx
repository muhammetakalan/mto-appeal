import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/ui/form'
import { Input } from '@/ui/input'

export default function SurnameField() {
  return (
    <FormField
      name="surname"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Soyad</FormLabel>
          <FormControl>
            <Input placeholder="Soyad" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
