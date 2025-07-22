// src/context/ChronoContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react'

// Create the context
const ChronoContext = createContext()

// Custom hook for easy access
export const useChrono = () => useContext(ChronoContext)

// Provider component
export const ChronoContextProvider = ({ children }) => {
  const [chronoCoinBalance, setChronoCoinBalance] = useState(88) // initial balance

  const [avatarState, setAvatarState] = useState({
    mood: 'Focused',
    energy: 72,
    fatigue: 18,
  })

  // Simulated real-time fatigue/energy shift (demo)
  useEffect(() => {
    const interval = setInterval(() => {
      setAvatarState((prev) => ({
        ...prev,
        energy: Math.max(0, prev.energy - 1),
        fatigue: Math.min(100, prev.fatigue + 1),
      }))
    }, 10000) // every 10 seconds

    return () => clearInterval(interval)
  }, [])

  // Update coin balance
  const updateCoinBalance = (delta) => {
    setChronoCoinBalance((prev) => Math.max(0, prev + delta))
  }

  // Update avatar state
  const updateAvatarState = (updates) => {
    setAvatarState((prev) => ({
      ...prev,
      ...updates,
    }))
  }

  return (
    <ChronoContext.Provider
      value={{
        chronoCoinBalance,
        avatarState,
        updateCoinBalance,
        updateAvatarState,
      }}
    >
      {children}
    </ChronoContext.Provider>
  )
}
