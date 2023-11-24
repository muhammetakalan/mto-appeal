import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/ui/form'
import { Input } from '@/ui/input'

export default function TCKNField() {
  return (
    <FormField
      name="tckn"
      render={({ field }) => (
        <FormItem>
          <FormLabel>T.C. Kimlik Numarası</FormLabel>
          <FormControl>
            <Input type="number" placeholder="örn: 00000000000" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
