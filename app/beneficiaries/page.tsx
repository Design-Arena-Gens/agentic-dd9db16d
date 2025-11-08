"use client"

import { beneficiaries } from '@/lib/data'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function BeneficiariesPage() {
  const [name, setName] = useState('')
  const [network, setNetwork] = useState('SEPA')
  const [currency, setCurrency] = useState('EUR')

  return (
    <div className="space-y-4">
      <header>
        <div className="text-xs text-neutral-500">Beneficiaries</div>
        <h1 className="text-lg font-medium">Manage recipients</h1>
      </header>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="panel p-3 space-y-3">
          <div className="text-sm font-medium">Add beneficiary</div>
          <div className="field">
            <div className="label">Name</div>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Company or person" />
          </div>
          <div className="field">
            <div className="label">Currency</div>
            <Select value={currency} onChange={(e) => setCurrency(e.target.value)}>
              <option>EUR</option>
              <option>USD</option>
              <option>GBP</option>
              <option>USDC</option>
            </Select>
          </div>
          <div className="field">
            <div className="label">Network</div>
            <Select value={network} onChange={(e) => setNetwork(e.target.value)}>
              <option>SEPA</option>
              <option>SWIFT</option>
              <option>ACH</option>
              <option>Ethereum</option>
            </Select>
          </div>
          <div className="field">
            <div className="label">Account / Address</div>
            <Input placeholder="IBAN or account number or 0x..." />
          </div>
          <div className="toolbar justify-end">
            <Button variant="ghost">Cancel</Button>
            <Button variant="primary">Save</Button>
          </div>
        </div>
        <div className="panel p-3 md:col-span-2">
          <div className="text-sm font-medium mb-2">Saved beneficiaries</div>
          <div className="grid-merge grid grid-cols-1">
            {beneficiaries.map((b) => (
              <div key={b.id} className="p-3 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">{b.name}</div>
                  <div className="text-xs text-neutral-500">{b.type} ? {b.network} ? {b.currency}</div>
                </div>
                <div className="text-xs text-neutral-500">{b.account}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
