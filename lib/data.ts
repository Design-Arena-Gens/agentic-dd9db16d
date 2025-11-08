export type Currency = 'USD' | 'EUR' | 'GBP' | 'BTC' | 'ETH' | 'USDC'
export type Chain = 'Bitcoin' | 'Ethereum' | 'Polygon'

export const balances = [
  { currency: 'USD', amount: 125000.23, chain: null },
  { currency: 'EUR', amount: 82000.0, chain: null },
  { currency: 'USDC', amount: 45123.12, chain: 'Ethereum' },
  { currency: 'BTC', amount: 3.1415, chain: 'Bitcoin' },
  { currency: 'ETH', amount: 128.45, chain: 'Ethereum' },
] as const

export const activity = Array.from({ length: 24 }).map((_, i) => ({
  id: `ACT-${1000 + i}`,
  date: new Date(Date.now() - i * 86_400_000).toISOString().slice(0, 10),
  type: i % 3 === 0 ? 'Transfer' : i % 3 === 1 ? 'Conversion' : 'Settlement',
  side: i % 2 === 0 ? 'Debit' : 'Credit',
  from: i % 2 === 0 ? 'USD' : 'BTC',
  to: i % 2 === 0 ? 'EUR' : 'USDC',
  amount: (Math.random() * 5000 + 50).toFixed(2),
  status: i % 4 === 0 ? 'Pending' : i % 4 === 1 ? 'Completed' : i % 4 === 2 ? 'Failed' : 'Cancelled',
}))

export const beneficiaries = [
  { id: 'BNF-001', name: 'Acme GmbH', type: 'Corporate', currency: 'EUR', network: 'SEPA', account: 'DE89 3704 0044 0532 0130 00' },
  { id: 'BNF-002', name: 'John Smith', type: 'Individual', currency: 'USD', network: 'ACH', account: '****1234' },
  { id: 'BNF-003', name: 'Crypto Liquidity Ltd', type: 'Corporate', currency: 'USDC', network: 'Ethereum', account: '0x8a...f39c' }
]
