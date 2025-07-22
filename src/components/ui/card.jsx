import React from 'react'

// This Card component is glassy, chromatic, and theme-consistent.
export function Card({ children, className = '', ...props }) {
  return (
    <div
      className={
        'bg-glass border border-chrome-300/30 rounded-2xl shadow-lg p-6 ' +
        'transition-transform hover:scale-[1.01] hover:shadow-2xl ' +
        'relative overflow-hidden ' +
        className
      }
      {...props}
    >
      {children}
    </div>
  )
}
