export function formatAmount(amount: number | string, currency?: string) {
  const n = typeof amount === 'string' ? parseFloat(amount) : amount
  const f = new Intl.NumberFormat('en-US', { maximumFractionDigits: 8 })
  return `${f.format(n)}${currency ? ' ' + currency : ''}`
}
