import { balances } from '@/lib/data'
import { formatAmount } from '@/lib/utils'

export default function WalletPage() {
  return (
    <div className="space-y-4">
      <header>
        <div className="text-xs text-neutral-500">Wallet</div>
        <h1 className="text-lg font-medium">Multi-currency balances</h1>
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

      <section className="panel p-3">
        <div className="text-sm font-medium mb-2">Chains</div>
        <div className="grid-merge grid grid-cols-3">
          <div className="p-3">
            <div className="text-sm font-medium">Bitcoin</div>
            <div className="text-xs text-neutral-500">Layer 1 ? UTXO</div>
          </div>
          <div className="p-3">
            <div className="text-sm font-medium">Ethereum</div>
            <div className="text-xs text-neutral-500">EVM ? Account-based</div>
          </div>
          <div className="p-3">
            <div className="text-sm font-medium">Polygon</div>
            <div className="text-xs text-neutral-500">EVM ? L2 / sidechain</div>
          </div>
        </div>
      </section>
    </div>
  )
}
