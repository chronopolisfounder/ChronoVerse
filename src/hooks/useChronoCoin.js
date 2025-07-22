// src/hooks/useChronoCoin.js
import { useContext } from 'react'
import { RewardContext } from '../contexts/RewardContext.js'

/**
 * Custom hook for accessing and updating ChronoCoin balance.
 * @returns {object} { coins, earnCoins, spendCoins }
 */
export function useChronoCoin() {
  const { coins, setCoins } = useContext(RewardContext)

  /**
   * Adds coins to the balance.
   * @param {number} amount
   */
  function earnCoins(amount) {
    if (typeof amount === 'number' && amount > 0) {
      setCoins((prev) => prev + amount)
    }
  }

  /**
   * Subtracts coins from the balance.
   * @param {number} amount
   */
  function spendCoins(amount) {
    if (typeof amount === 'number' && amount > 0 && coins >= amount) {
      setCoins((prev) => prev - amount)
    }
  }

  return { coins, earnCoins, spendCoins }
}
