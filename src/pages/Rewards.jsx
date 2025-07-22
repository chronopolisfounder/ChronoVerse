import React, { useEffect, useState } from 'react'

// Fetch rewards data from a real endpoint or static file
const REWARDS_URL = '/mock/rewards.json'

export default function Rewards() {
  const [rewards, setRewards] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(REWARDS_URL)
      .then((res) => res.json())
      .then((data) => {
        setRewards(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[40vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-chronoBlue"></div>
        <span className="ml-4 text-xl text-chronoBlue">Loading rewards...</span>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-chronoBlue">
        ChronoVerse Rewards
      </h1>
      <ul className="space-y-5">
        {rewards.map((reward) => (
          <li
            key={reward.id}
            className="bg-zinc-900/80 border border-chronoBlue rounded-xl p-5 flex items-center shadow-lg"
          >
            <div className="flex-shrink-0 mr-4">
              {/* Example: Use an icon font or icon component if available */}
              <span className="inline-block bg-chronoBlue/10 text-2xl rounded-full w-12 h-12 flex items-center justify-center">
                <i className={`lucide lucide-${reward.icon || 'award'}`}></i>
              </span>
            </div>
            <div>
              <div className="font-semibold text-lg text-white">
                {reward.name}
              </div>
              <div className="text-chronoBlue text-sm">
                {reward.description}
              </div>
              <div className="mt-1 text-sm text-chronoCoin font-mono">
                <span className="mr-2">Reward:</span>
                <span className="font-bold">{reward.points} ChronoCoins</span>
                {reward.repeatable ? (
                  <span className="ml-2 px-2 py-0.5 bg-chronoBlue/20 rounded text-xs">
                    Repeatable
                  </span>
                ) : (
                  <span className="ml-2 px-2 py-0.5 bg-zinc-700/40 rounded text-xs">
                    One-time
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
