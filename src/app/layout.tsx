import { Analytics } from '@vercel/analytics/react'

import Providers from '@/components/Providers'

import '@/styles/globals.css'
import { Toaster } from '@/ui/toaster'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

export const metadata = {
  title: 'MTO Başvuru',
  description: 'Medeniyet Tasavvuru Okulu başvuru sayfası.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <Providers>
          <main className="p-4">{children}</main>
          <Toaster />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
