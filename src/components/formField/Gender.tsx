import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/ui/form'

export default function GenderField() {
  return (
    <FormField
      name="gender"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Cinsiyet</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange}>
              <SelectTrigger>
                <SelectValue placeholder="Seçiniz" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Erkek</SelectItem>
                <SelectItem value="female">Kadın</SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
          <FormDescription>
            Bu bilgiyi kişiyi tanımak için değil genel istatistik için alıyoruz.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
