import React from 'react'
import { useChronoContext } from '../context/ChronoContext'

export default function MissionIntro() {
  const { AvatarState } = useChronoContext()

  return (
    <section className="relative py-20 px-6 text-center bg-gradient-to-b from-black to-gray-900">
      <div className="glassmorphism max-w-4xl mx-auto p-8 rounded-3xl border border-tronNeon shadow-neon backdrop-blur-sm">
        <h1 className="text-4xl sm:text-5xl font-bold text-tronNeon drop-shadow-neon animate-flicker mb-4">
          Your Journey Begins in the ChronoVerse
        </h1>
        <p className="text-tronNeon text-lg leading-relaxed">
          Welcome, Agent. You stand at the threshold of a living, evolving
          simulation where your choices fuel your avatar, earn ChronoCoin, and
          shape a future of radical health optimization.
        </p>
      </div>

      <div className="mt-12 flex justify-center items-center space-x-6">
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-400">Mood</span>
          <div className="text-tronNeon text-xl">
            {AvatarState.mood || 'Balanced'}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-400">Energy</span>
          <div className="text-tronNeon text-xl">
            {AvatarState.energy || '75%'}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-400">Fatigue</span>
          <div className="text-tronNeon text-xl">
            {AvatarState.fatigue || 'Low'}
          </div>
        </div>
      </div>
    </section>
  )
}
