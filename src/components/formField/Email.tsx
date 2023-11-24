import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/ui/form'
import { Input } from '@/ui/input'

export default function EmailField() {
  return (
    <FormField
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>E-posta</FormLabel>
          <FormControl>
            <Input
              type="email"
              placeholder="örn: example@gmail.com"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
