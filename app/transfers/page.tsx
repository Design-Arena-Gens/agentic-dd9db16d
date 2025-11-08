"use client"

import { Tabs } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function TransfersPage() {
  const [tab, setTab] = useState<'fiat' | 'crypto' | 'convert'>('fiat')
  return (
    <div className="space-y-4">
      <header>
        <div className="text-xs text-neutral-500">Transfers</div>
        <h1 className="text-lg font-medium">Send & Convert</h1>
      </header>

      <Tabs
        tabs={[
          { id: 'fiat', label: 'Fiat ? Fiat' },
          { id: 'crypto', label: 'Crypto ? Crypto' },
          { id: 'convert', label: 'Fiat ? Crypto' },
        ]}
        value={tab}
        onChange={(v) => setTab(v as any)}
      />

      {tab === 'fiat' && <FiatToFiat />}
      {tab === 'crypto' && <CryptoToCrypto />}
      {tab === 'convert' && <Conversion />}
    </div>
  )
}

function FiatToFiat() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="panel p-3 md:col-span-2 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="field">
            <div className="label">From currency</div>
            <Select defaultValue="USD">
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
            </Select>
          </div>
          <div className="field">
            <div className="label">To currency</div>
            <Select defaultValue="EUR">
              <option>EUR</option>
              <option>USD</option>
              <option>GBP</option>
            </Select>
          </div>
          <div className="field col-span-2">
            <div className="label">Amount</div>
            <Input placeholder="0.00" />
          </div>
          <div className="field col-span-2">
            <div className="label">Beneficiary</div>
            <Select defaultValue="Acme GmbH">
              <option>Acme GmbH ? SEPA</option>
              <option>John Smith ? ACH</option>
            </Select>
          </div>
        </div>
        <div className="toolbar justify-end">
          <Button variant="ghost">Save as draft</Button>
          <Button variant="primary">Review</Button>
        </div>
      </div>
      <div className="panel p-3 space-y-2">
        <div className="text-sm font-medium">Quote</div>
        <div className="text-xs text-neutral-500">Rate: 1 USD = 0.92 EUR</div>
        <div className="text-xs text-neutral-500">Fee: 0.3%</div>
        <div className="text-xs text-neutral-500">ETA: T+1</div>
      </div>
    </div>
  )
}

function CryptoToCrypto() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="panel p-3 md:col-span-2 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="field">
            <div className="label">From asset</div>
            <Select defaultValue="BTC">
              <option>BTC</option>
              <option>ETH</option>
              <option>USDC</option>
            </Select>
          </div>
          <div className="field">
            <div className="label">On chain</div>
            <Select defaultValue="Bitcoin">
              <option>Bitcoin</option>
              <option>Ethereum</option>
              <option>Polygon</option>
            </Select>
          </div>
          <div className="field">
            <div className="label">To asset</div>
            <Select defaultValue="USDC">
              <option>USDC</option>
              <option>ETH</option>
              <option>BTC</option>
            </Select>
          </div>
          <div className="field">
            <div className="label">On chain</div>
            <Select defaultValue="Ethereum">
              <option>Ethereum</option>
              <option>Polygon</option>
            </Select>
          </div>
          <div className="field col-span-2">
            <div className="label">Amount</div>
            <Input placeholder="0.00" />
          </div>
          <div className="field col-span-2">
            <div className="label">Recipient address</div>
            <Input placeholder="0x..." />
          </div>
        </div>
        <div className="toolbar justify-end">
          <Button variant="ghost">Save as draft</Button>
          <Button variant="primary">Review</Button>
        </div>
      </div>
      <div className="panel p-3 space-y-2">
        <div className="text-sm font-medium">Network details</div>
        <div className="text-xs text-neutral-500">Estimated fee: 0.00012 BTC</div>
        <div className="text-xs text-neutral-500">Confirmations: ~1</div>
      </div>
    </div>
  )
}

function Conversion() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="panel p-3 md:col-span-2 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="field">
            <div className="label">From</div>
            <Select defaultValue="USD">
              <option>USD</option>
              <option>EUR</option>
              <option>BTC</option>
              <option>ETH</option>
              <option>USDC</option>
            </Select>
          </div>
          <div className="field">
            <div className="label">To</div>
            <Select defaultValue="USDC">
              <option>USDC</option>
              <option>USD</option>
              <option>BTC</option>
              <option>ETH</option>
            </Select>
          </div>
          <div className="field col-span-2">
            <div className="label">Amount</div>
            <Input placeholder="0.00" />
          </div>
        </div>
        <div className="toolbar justify-end">
          <Button variant="ghost">Get quote</Button>
          <Button variant="primary">Convert</Button>
        </div>
      </div>
      <div className="panel p-3 space-y-2">
        <div className="text-sm font-medium">Conversion quote</div>
        <div className="text-xs text-neutral-500">Mid-market + 20 bps</div>
        <div className="text-xs text-neutral-500">Slippage protection active</div>
      </div>
    </div>
  )
}
