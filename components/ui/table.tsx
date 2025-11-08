import * as React from 'react'

export function Table({ children }: { children: React.ReactNode }) {
  return <div className="panel overflow-auto">{children}</div>
}

export function T({ children }: { children: React.ReactNode }) {
  return <table className="w-full text-sm">
    {children}
  </table>
}

export function Thead({ children }: { children: React.ReactNode }) {
  return <thead className="bg-neutral-50">
    {children}
  </thead>
}

export function Tbody({ children }: { children: React.ReactNode }) {
  return <tbody className="divide-y">
    {children}
  </tbody>
}

export function Tr({ children }: { children: React.ReactNode }) {
  return <tr className="hover:bg-neutral-50">
    {children}
  </tr>
}

export function Th({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return <th className={`text-left font-medium px-3 py-2 border-b ${className}`}>{children}</th>
}

export function Td({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return <td className={`px-3 py-2 ${className}`}>{children}</td>
}
