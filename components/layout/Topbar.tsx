"use client"

import { useState } from 'react'

export function Topbar() {
  const [query, setQuery] = useState('')
  return (
    <div className="flex items-center justify-between px-3 py-2">
      <div className="text-sm text-neutral-500">Clean, square-edge design system</div>
      <div className="flex items-center gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="panel h-8 px-2 w-[240px] outline-none"
        />
        <button className="panel h-8 px-3 text-sm">Help</button>
      </div>
    </div>
  )
}
