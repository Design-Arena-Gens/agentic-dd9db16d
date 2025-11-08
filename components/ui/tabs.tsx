"use client"

import * as React from 'react'

type Tab = { id: string; label: string }

export function Tabs({ tabs, value, onChange }: { tabs: Tab[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="panel">
      <div className="flex">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => onChange(t.id)}
            className={`px-3 h-9 ${value === t.id ? 'bg-neutral-100' : 'hoverable'}`}
          >
            <span className="text-sm">{t.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
