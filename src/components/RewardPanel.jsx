import React, { useState } from 'react'
import { Card } from './ui/Card'

export function RewardPanel() {
  const [balance, setBalance] = useState(1200)
  const [lastEarned, setLastEarned] = useState('Research submission: +200 CC')

  return (
    <Card>
      <h2 className="text-xl font-semibold mb-3">ChronoCoin Reward System</h2>
      <p>
        Balance: <strong>{balance} CC</strong>
      </p>
      <p>Last Earned: {lastEarned}</p>
      <p>Earn ChronoCoin by submitting research and completing diagnostics.</p>
    </Card>
  )
}
