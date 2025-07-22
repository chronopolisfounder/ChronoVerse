// src/contexts/RewardContext.js
import React, { createContext, useState } from 'react'

export const RewardContext = createContext()

export function RewardProvider({ children }) {
  const [coins, setCoins] = useState(0)

  /**
   * Earn ChronoCoins.
   * @param {number} amount
   */
  function earnCoins(amount) {
    if (typeof amount === 'number' && amount > 0) {
      setCoins((prev) => prev + amount)
    }
  }

  /**
   * Spend ChronoCoins.
   * @param {number} amount
   */
  function spendCoins(amount) {
    if (typeof amount === 'number' && amount > 0 && coins >= amount) {
      setCoins((prev) => prev - amount)
    }
  }

  /**
   * Reset coin balance to zero.
   */
  function resetCoins() {
    setCoins(0)
  }

  return (
    <RewardContext.Provider
      value={{ coins, setCoins, earnCoins, spendCoins, resetCoins }}
    >
      {children}
    </RewardContext.Provider>
  )
}
