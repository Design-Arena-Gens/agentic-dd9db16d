"use client"

import * as React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'ghost' | 'primary'
}

export function Button({ className = '', variant = 'default', ...props }: ButtonProps) {
  const base = 'panel h-9 px-3 text-sm inline-flex items-center justify-center select-none'
  const styles =
    variant === 'primary'
      ? 'bg-black text-white hover:opacity-90'
      : variant === 'ghost'
      ? 'bg-transparent hoverable'
      : ''
  return <button className={`${base} ${styles} ${className}`} {...props} />
}
