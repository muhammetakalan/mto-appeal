import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/ui/form'
import { Input } from '@/ui/input'

export default function NameField() {
  return (
    <FormField
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>İsim</FormLabel>
          <FormControl>
            <Input placeholder="örn: Necip Fazıl" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
