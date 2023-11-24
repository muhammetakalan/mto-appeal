import { CalendarIcon } from 'lucide-react'
import { useState } from 'react'

import { format } from 'date-fns'

import { cn } from '@/lib/utils'
import { Button } from '@/ui/button'
import { Calendar } from '@/ui/calendar'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '@/ui/popover'
import { tr } from 'date-fns/locale'

export default function BirthDateField() {
  const [date, setDate] = useState<Date>()

  return (
    <FormField
      name="birthdate"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Doğum Tarihi</FormLabel>
          <FormControl>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn(
                    'flex w-full justify-start text-left font-normal',
                    !date && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? (
                    format(date, 'PPP', { locale: tr })
                  ) : (
                    <span>Tarih Seç</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  captionLayout="dropdown-buttons"
                  fromYear={new Date().getFullYear() - 100}
                  toYear={new Date().getFullYear()}
                  mode="single"
                  selected={date}
                  onSelect={newDate => {
                    setDate(newDate)
                    field.onChange(newDate)
                  }}
                  locale={tr}
                />
              </PopoverContent>
            </Popover>
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
