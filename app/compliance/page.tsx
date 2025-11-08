"use client"

import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function CompliancePage() {
  const [step, setStep] = useState(1)
  return (
    <div className="space-y-4">
      <header>
        <div className="text-xs text-neutral-500">Compliance</div>
        <h1 className="text-lg font-medium">KYC / KYB</h1>
      </header>

      <div className="grid-merge grid grid-cols-3">
        <button onClick={() => setStep(1)} className={`px-3 py-2 text-sm ${step === 1 ? 'bg-neutral-100' : 'hoverable'}`}>Business</button>
        <button onClick={() => setStep(2)} className={`px-3 py-2 text-sm ${step === 2 ? 'bg-neutral-100' : 'hoverable'}`}>Directors</button>
        <button onClick={() => setStep(3)} className={`px-3 py-2 text-sm ${step === 3 ? 'bg-neutral-100' : 'hoverable'}`}>Banking</button>
      </div>

      {step === 1 && <Business />}
      {step === 2 && <Directors />}
      {step === 3 && <Banking />}
    </div>
  )
}

function Business() {
  return (
    <div className="panel p-3 grid md:grid-cols-2 gap-3">
      <div className="field">
        <div className="label">Legal name</div>
        <Input placeholder="Company LLC" />
      </div>
      <div className="field">
        <div className="label">Registration country</div>
        <Select defaultValue="US">
          <option value="US">United States</option>
          <option value="DE">Germany</option>
          <option value="GB">United Kingdom</option>
        </Select>
      </div>
      <div className="field col-span-2">
        <div className="label">Registered address</div>
        <Input placeholder="Street, city, postal code" />
      </div>
      <div className="field col-span-2">
        <div className="label">Website</div>
        <Input placeholder="https://" />
      </div>
    </div>
  )
}

function Directors() {
  return (
    <div className="panel p-3 grid md:grid-cols-3 gap-3">
      <div className="field">
        <div className="label">Full name</div>
        <Input placeholder="Jane Doe" />
      </div>
      <div className="field">
        <div className="label">DOB</div>
        <Input placeholder="YYYY-MM-DD" />
      </div>
      <div className="field">
        <div className="label">Nationality</div>
        <Input placeholder="Country" />
      </div>
    </div>
  )
}

function Banking() {
  return (
    <div className="panel p-3 grid md:grid-cols-2 gap-3">
      <div className="field">
        <div className="label">Primary currency</div>
        <Select defaultValue="USD">
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
        </Select>
      </div>
      <div className="field">
        <div className="label">Settlement method</div>
        <Select defaultValue="SWIFT">
          <option>SWIFT</option>
          <option>SEPA</option>
          <option>ACH</option>
          <option>Crypto</option>
        </Select>
      </div>
      <div className="field col-span-2">
        <div className="label">Bank account / Address</div>
        <Input placeholder="IBAN or 0x..." />
      </div>
      <div className="toolbar justify-end col-span-2">
        <Button variant="ghost">Save draft</Button>
        <Button variant="primary">Submit</Button>
      </div>
    </div>
  )
}
