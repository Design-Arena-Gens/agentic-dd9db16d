import { balances, activity } from '@/lib/data'
import { formatAmount } from '@/lib/utils'
import Link from 'next/link'

export default function DashboardPage() {
  const recent = activity.slice(0, 6)
  return (
    <div className="space-y-4">
      <header className="flex items-end justify-between">
        <div>
          <div className="text-xs text-neutral-500">Dashboard</div>
          <h1 className="text-lg font-medium">Overview</h1>
        </div>
        <div className="grid-merge grid grid-cols-3">
          <Link href="/transfers" className="px-3 py-2 text-sm hoverable">New transfer</Link>
          <Link href="/beneficiaries" className="px-3 py-2 text-sm hoverable">Add beneficiary</Link>
          <Link href="/activity" className="px-3 py-2 text-sm hoverable">View activity</Link>
        </div>
      </header>

      <section className="grid-merge grid md:grid-cols-3">
        {balances.map((b) => (
          <div key={`${b.currency}-${b.chain ?? 'fiat'}`} className="p-3">
            <div className="text-xs text-neutral-500">{b.chain ?? 'Fiat'}</div>
            <div className="text-sm font-medium">{b.currency}</div>
            <div className="text-xl">{formatAmount(b.amount, b.currency)}</div>
          </div>
        ))}
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        <div className="panel p-3 md:col-span-2">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium">Recent activity</div>
            <Link href="/activity" className="text-xs">See all</Link>
          </div>
          <div className="divide-y">
            {recent.map((a) => (
              <div key={a.id} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 text-xs text-neutral-500">{a.date}</div>
                  <div className="text-sm">{a.type}</div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-xs text-neutral-500">{a.from} ? {a.to}</div>
                  <div className="text-sm">{formatAmount(a.amount)}</div>
                  <div className="text-xs text-neutral-500">{a.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="panel p-3">
          <div className="text-sm font-medium mb-2">Shortcuts</div>
          <div className="grid-merge grid grid-cols-1">
            <Link href="/wallet" className="px-3 py-2 text-sm hoverable">Wallet overview</Link>
            <Link href="/compliance" className="px-3 py-2 text-sm hoverable">KYC & compliance</Link>
            <Link href="/settlements" className="px-3 py-2 text-sm hoverable">Settlements</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
