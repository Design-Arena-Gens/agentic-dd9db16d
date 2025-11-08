import { activity } from '@/lib/data'

export default function SettlementsPage() {
  const settlements = activity.filter(a => a.type === 'Settlement')
  return (
    <div className="space-y-4">
      <header>
        <div className="text-xs text-neutral-500">Settlements</div>
        <h1 className="text-lg font-medium">Batch & reconciliation</h1>
      </header>

      <div className="panel p-3 space-y-2">
        <div className="text-sm font-medium">Upcoming batches</div>
        <div className="grid-merge grid grid-cols-3">
          <div className="p-3">
            <div className="text-sm">USD ? ACH</div>
            <div className="text-xs text-neutral-500">T+1 ? 16:00 UTC</div>
          </div>
          <div className="p-3">
            <div className="text-sm">EUR ? SEPA</div>
            <div className="text-xs text-neutral-500">T+1 ? 14:00 UTC</div>
          </div>
          <div className="p-3">
            <div className="text-sm">USDC ? Ethereum</div>
            <div className="text-xs text-neutral-500">Near-instant ? on demand</div>
          </div>
        </div>
      </div>

      <div className="panel p-3">
        <div className="text-sm font-medium mb-2">Recent settlements</div>
        <div className="grid-merge grid grid-cols-1">
          {settlements.map((s) => (
            <div key={s.id} className="p-3 flex items-center justify-between">
              <div className="text-sm">{s.date}</div>
              <div className="text-xs text-neutral-500">{s.from} ? {s.to}</div>
              <div className="text-sm">{s.amount}</div>
              <div className="text-xs text-neutral-500">{s.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
