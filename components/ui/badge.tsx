export function Badge({ children, tone = 'default' }: { children: React.ReactNode; tone?: 'default' | 'success' | 'warning' | 'danger' }) {
  const map: Record<string, string> = {
    default: 'bg-neutral-100 text-neutral-700',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
  }
  return <span className={`text-xs px-1.5 py-0.5 ${map[tone]} whitespace-nowrap`}>{children}</span>
}
