import type { Metadata } from 'next'
import './globals.css'
import { Inter, Roboto_Mono } from 'next/font/google'
import { AppShell } from '@/components/layout/AppShell'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const mono = Roboto_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'PSP Platform',
  description: 'Minimalist PSP design system and screens'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
