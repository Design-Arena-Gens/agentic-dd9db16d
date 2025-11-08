"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <div className="min-h-screen grid grid-cols-[240px_1fr] grid-rows-[48px_1fr]">
      <div className="row-span-2 panel">
        <Sidebar pathname={pathname} />
      </div>
      <div className="panel">
        <Topbar />
      </div>
      <main className="p-4">
        <div className="container max-w-[1280px] mx-auto space-y-4">{children}</div>
      </main>
    </div>
  )
}
