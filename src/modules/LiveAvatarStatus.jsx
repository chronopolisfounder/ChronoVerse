import React, { useEffect, useState } from 'react'
import { useChronoContext } from '../context/ChronoContext'

export default function LiveAvatarStatus() {
  const { ChronoCoinBalance, AvatarState } = useChronoContext()
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
    const timeout = setTimeout(() => setAnimate(false), 1000)
    return () => clearTimeout(timeout)
  }, [ChronoCoinBalance])

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-black bg-opacity-80 backdrop-blur-sm p-4 rounded-xl border border-tronNeon shadow-neon">
      <div className="flex items-center space-x-4">
        <div>
          <div className="text-xs text-gray-400">ChronoCoin</div>
          <div
            className={`text-tronNeon text-xl font-mono ${
              animate ? 'animate-pulseGlow' : ''
            }`}
          >
            ◉ {ChronoCoinBalance}
          </div>
        </div>
        <div className="text-xs text-right">
          <div>
            Energy: <span className="text-tronPink">{AvatarState.energy}</span>
          </div>
          <div>
            Mood: <span className="text-tronPink">{AvatarState.mood}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
