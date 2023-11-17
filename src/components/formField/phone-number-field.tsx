import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/ui/form'
import { Input } from '@/ui/input'

export default function PhoneNumberField() {
  return (
    <FormField
      name="phoneNumber"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Telefon Numarası</FormLabel>
          <FormControl>
            <Input type="tel" placeholder="örn: 0000000000" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
