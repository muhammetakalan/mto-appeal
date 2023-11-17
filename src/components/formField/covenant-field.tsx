import { Checkbox } from '@/ui/checkbox'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel
} from '@/ui/form'

export default function CovenantField() {
  return (
    <FormField
      name="covenant"
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
          <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>Ahitleşme</FormLabel>
            <FormDescription>
              3 yıl boyunca öncü kuşak okuma listesini okuyacağıma, derslere
              düzenli olarak katılacağıma ve insanlığın yükünü omuzlarımda
              taşıdığım bilinci ile gecemi gündüzüme katıp fikir ve oluş çilesi
              çekeceğime söz veriyorum.
            </FormDescription>
          </div>
        </FormItem>
      )}
    />
  )
}
