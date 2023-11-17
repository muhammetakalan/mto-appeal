import { Textarea } from '@/components/ui/textarea'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/ui/form'

export default function InterestsField() {
  return (
    <FormField
      name="interests"
      render={({ field }) => (
        <FormItem>
          <FormLabel>İlgi ve Alakalarınız Nedir?</FormLabel>
          <FormControl>
            <Textarea placeholder="örn: Kitap okumak, Astronomi" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
