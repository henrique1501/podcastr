import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'
import { Providers } from './providers'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: 'Podcastr',
  description: 'Developers podcast app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
