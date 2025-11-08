"use client"

import * as React from 'react'

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { className = '', children, ...props },
  ref
) {
  return (
    <select ref={ref} className={`panel h-9 px-2 w-full bg-white ${className}`} {...props}>
      {children}
    </select>
  )
})
