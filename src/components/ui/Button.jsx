import React from 'react'

// 1. Base Flexible Button
export function Button({ children, onClick, className = '', ...props }) {
  return (
    <button
      onClick={onClick}
      className={
        'bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-2 px-4 rounded-xl transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 ' +
        className
      }
      {...props}
    >
      {children}
    </button>
  )
}

// 2. Tron/ChronoVerse Glow Button
export function GlowButton({ children, className = '', ...props }) {
  return (
    <button
      className={
        'relative px-5 py-2 rounded-2xl font-bold bg-gradient-to-r from-cyan-600 via-indigo-700 to-cyan-800 text-chrome-100 shadow-lg border border-cyan-300/40 ' +
        'hover:from-cyan-500 hover:to-indigo-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-300 ' +
        'before:absolute before:inset-0 before:rounded-2xl before:bg-cyan-400/10 before:blur-[2px] before:opacity-70 before:pointer-events-none ' +
        className
      }
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  )
}

// 3. Icon Button (for icon-only use)
export function IconButton({
  children,
  className = '',
  'aria-label': ariaLabel,
  ...props
}) {
  return (
    <button
      className={
        'p-2 rounded-full bg-zinc-800 hover:bg-cyan-700 text-cyan-300 shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 ' +
        className
      }
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  )
}

// 4. Loading Button (shows spinner if loading)
function Spinner() {
  return (
    <svg
      className="animate-spin h-5 w-5 text-cyan-300 mr-2"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-30"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
      />
      <path
        className="opacity-90"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 11-8 8h4z"
      />
    </svg>
  )
}

export function LoadingButton({
  loading,
  children,
  disabled,
  className = '',
  ...props
}) {
  return (
    <button
      className={
        'bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-2 px-4 rounded-xl transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 flex items-center justify-center ' +
        (className || '')
      }
      disabled={loading || disabled}
      {...props}
    >
      {loading && <Spinner />}
      {children}
    </button>
  )
}
