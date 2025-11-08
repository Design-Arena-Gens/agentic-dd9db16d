"use client"

import Link from 'next/link'

const nav = [
  { href: '/', label: 'Dashboard' },
  { href: '/transfers', label: 'Transfers' },
  { href: '/activity', label: 'Activity' },
  { href: '/beneficiaries', label: 'Beneficiaries' },
  { href: '/wallet', label: 'Wallet' },
  { href: '/compliance', label: 'Compliance' },
  { href: '/settlements', label: 'Settlements' },
]

export function Sidebar({ pathname }: { pathname: string | null }) {
  return (
    <aside className="h-full flex flex-col">
      <div className="p-3 border-b bg-white">
        <div className="text-xs text-neutral-500">PSP Platform</div>
        <div className="text-sm font-medium">Operations Console</div>
      </div>
      <nav className="flex-1 p-2 space-y-1">
        {nav.map((item) => {
          const active = pathname === item.href
          return (
            <Link key={item.href} href={item.href} className={`block hoverable px-3 py-2 ${active ? 'bg-neutral-100' : ''}`}>
              <span className="text-sm">{item.label}</span>
            </Link>
          )
        })}
      </nav>
      <div className="p-3 border-t text-xs text-neutral-500">v1.0 ? Low-ink UI</div>
    </aside>
  )
}
