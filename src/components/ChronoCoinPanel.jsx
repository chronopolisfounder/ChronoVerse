import React, { useState } from 'react'
import { Coins, ArrowDownCircle, Gift } from 'lucide-react'
import GlowCard from './GlowCard' // Or: import { Card } from './ui/Card';

const MOCK_TRANSACTIONS = [
  {
    id: 1,
    type: 'Earned',
    amount: 100,
    date: '2025-07-19',
    desc: 'Research Participation',
  },
  {
    id: 2,
    type: 'Redeemed',
    amount: -50,
    date: '2025-07-18',
    desc: 'Badge Unlocked',
  },
  {
    id: 3,
    type: 'Earned',
    amount: 150,
    date: '2025-07-17',
    desc: 'Health Survey',
  },
]

export default function ChronoCoinPanel() {
  const [balance, setBalance] = useState(1200)
  const [transactions, setTransactions] = useState(MOCK_TRANSACTIONS)

  function handleClaim() {
    // Example logic to claim a reward or add coins
    setBalance((b) => b + 100)
    setTransactions((txs) => [
      {
        id: Date.now(),
        type: 'Earned',
        amount: 100,
        date: new Date().toISOString().slice(0, 10),
        desc: 'Daily Reward',
      },
      ...txs,
    ])
  }

  return (
    <GlowCard className="max-w-md w-full mx-auto mb-8">
      <div className="flex items-center gap-3 mb-6">
        <Coins className="w-8 h-8 text-yellow-300 drop-shadow" />
        <div>
          <div className="text-2xl font-extrabold text-chrome-100">
            ChronoCoin Balance
          </div>
          <div className="text-4xl font-mono text-yellow-400">
            {balance.toLocaleString()}
          </div>
        </div>
      </div>
      <button
        onClick={handleClaim}
        className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 transition text-white font-bold px-4 py-2 rounded-xl shadow mb-6"
      >
        <Gift className="w-5 h-5" />
        Claim Daily Reward
      </button>
      <div>
        <div className="text-lg font-semibold mb-2 text-chrome-200">
          Recent Activity
        </div>
        <ul>
          {transactions.map((tx) => (
            <li
              key={tx.id}
              className="flex items-center justify-between border-b border-chrome-800 py-2 last:border-b-0"
            >
              <span className="flex items-center gap-2">
                {tx.type === 'Earned' ? (
                  <ArrowDownCircle className="w-4 h-4 text-green-400" />
                ) : (
                  <ArrowDownCircle className="w-4 h-4 rotate-180 text-pink-400" />
                )}
                {tx.desc}
              </span>
              <span
                className={`font-mono ${tx.amount > 0 ? 'text-green-300' : 'text-pink-400'}`}
              >
                {tx.amount > 0 ? '+' : ''}
                {tx.amount}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </GlowCard>
  )
}
