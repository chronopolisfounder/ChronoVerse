import React from 'react'

export function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded transition-colors"
    >
      {children}
    </button>
  )
}