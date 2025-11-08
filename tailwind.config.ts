import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        muted: 'hsl(var(--muted))',
        accent: 'hsl(var(--accent))',
        card: 'hsl(var(--card))',
        cardForeground: 'hsl(var(--card-foreground))',
        success: '#0E9F6E',
        warning: '#B45309',
        danger: '#B91C1C'
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)']
      },
      boxShadow: {
        subtle: '0 1px 0 0 hsl(var(--border)) inset'
      }
    },
    borderRadius: {
      none: '0px'
    }
  },
  corePlugins: {
    preflight: true
  }
}

export default config
