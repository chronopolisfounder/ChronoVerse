// src/pages/Systems.jsx
import React from 'react'

export default function SystemsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-center drop-shadow-[0_0_15px_#00fff7] text-chrono-neon animate-pulse">
        ⚙️ ChronoVerse Systems
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl shadow-2xl border border-chrono-neon transition-all hover:shadow-[0_0_40px_#00fff7] hover:scale-105 group">
          <h2 className="text-2xl font-bold mb-2 text-chrono-neon group-hover:animate-pulse drop-shadow-[0_0_8px_#00fff7]">
            Symptom Diagnostic Engine
          </h2>
          <p className="text-gray-300">
            Analyze your symptoms and get insights.
          </p>
        </div>
        <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl shadow-2xl border border-chrono-neon transition-all hover:shadow-[0_0_40px_#00fff7] hover:scale-105 group">
          <h2 className="text-2xl font-bold mb-2 text-chrono-neon group-hover:animate-pulse drop-shadow-[0_0_8px_#00fff7]">
            Avatar Protocol Panel
          </h2>
          <p className="text-gray-300">Control your health-synced avatar.</p>
        </div>
        <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl shadow-2xl border border-chrono-neon transition-all hover:shadow-[0_0_40px_#00fff7] hover:scale-105 group">
          <h2 className="text-2xl font-bold mb-2 text-chrono-neon group-hover:animate-pulse drop-shadow-[0_0_8px_#00fff7]">
            ChronoCoin Rewards
          </h2>
          <p className="text-gray-300">
            Earn ChronoCoin for real-world actions.
          </p>
        </div>
      </div>
    </div>
  )
}
