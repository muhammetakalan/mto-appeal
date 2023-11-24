'use client'

import { Moon, Sun } from 'lucide-react'

import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="fixed right-8 top-4 z-10">
      {theme === 'light' ? (
        <Button
          className="bg-secondary shadow"
          variant="outline"
          size="icon"
          onClick={() => setTheme('dark')}
        >
          <Sun className="h-4 w-4" />
        </Button>
      ) : (
        <Button
          className="bg-secondary shadow"
          variant="outline"
          size="icon"
          onClick={() => setTheme('light')}
        >
          <Moon className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}
