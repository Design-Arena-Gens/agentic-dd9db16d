"use client"

import * as React from 'react'

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(function Input(
  { className = '', ...props },
  ref
) {
  return <input ref={ref} className={`panel h-9 px-2 w-full outline-none ${className}`} {...props} />
})
