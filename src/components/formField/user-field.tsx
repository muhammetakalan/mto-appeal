import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/ui/form'
import { Input } from '@/ui/input'

export default function UserField() {
  return (
    <FormField
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>İsim</FormLabel>
          <FormControl>
            <Input placeholder="İsim" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
