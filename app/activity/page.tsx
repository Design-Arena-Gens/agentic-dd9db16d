"use client"

import { activity } from '@/lib/data'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Table, T, Thead, Tbody, Tr, Th, Td } from '@/components/ui/table'
import { useMemo, useState } from 'react'

export default function ActivityPage() {
  const [q, setQ] = useState('')
  const [type, setType] = useState('All')
  const [status, setStatus] = useState('All')

  const items = useMemo(() => {
    return activity.filter(a =>
      (q ? (a.id.includes(q) || a.from.includes(q) || a.to.includes(q)) : true)
      && (type === 'All' ? true : a.type === type)
      && (status === 'All' ? true : a.status === status)
    )
  }, [q, type, status])

  return (
    <div className="space-y-4">
      <header>
        <div className="text-xs text-neutral-500">Activity</div>
        <h1 className="text-lg font-medium">History & Filters</h1>
      </header>

      <div className="toolbar gap-3">
        <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search ID or currency" className="w-[240px]" />
        <Select value={type} onChange={(e) => setType(e.target.value)} className="w-[160px]">
          <option>All</option>
          <option>Transfer</option>
          <option>Conversion</option>
          <option>Settlement</option>
        </Select>
        <Select value={status} onChange={(e) => setStatus(e.target.value)} className="w-[160px]">
          <option>All</option>
          <option>Pending</option>
          <option>Completed</option>
          <option>Failed</option>
          <option>Cancelled</option>
        </Select>
      </div>

      <Table>
        <T>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Date</Th>
              <Th>Type</Th>
              <Th>From ? To</Th>
              <Th className="text-right">Amount</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {items.map((a) => (
              <Tr key={a.id}>
                <Td>{a.id}</Td>
                <Td>{a.date}</Td>
                <Td>{a.type}</Td>
                <Td>{a.from} ? {a.to}</Td>
                <Td className="text-right">{a.amount}</Td>
                <Td>{a.status}</Td>
              </Tr>
            ))}
          </Tbody>
        </T>
      </Table>
    </div>
  )
}
