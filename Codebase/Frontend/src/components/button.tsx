import React from 'react'
import { cn } from '../lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className, 
  variant = 'primary', 
  ...props 
}) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded",
        variant === 'primary' ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

