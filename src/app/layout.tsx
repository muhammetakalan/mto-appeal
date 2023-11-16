import '@/styles/globals.css'
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
        <main>{children}</main>
      </body>
    </html>
  )
}
