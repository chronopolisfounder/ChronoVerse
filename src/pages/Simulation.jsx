// src/pages/Simulation.jsx
import React, { useState } from 'react'
import SmoothieBuilder from '../components/SmoothieBuilder.jsx'
import SunARScanner from '../components/SunARScanner.jsx'

export default function Simulation() {
  const [tab, setTab] = useState('smoothie')

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Simulation</h1>
      <div className="mb-4 flex space-x-2">
        <button
          className={`px-4 py-2 rounded ${
            tab === 'smoothie'
              ? 'bg-chrono-neon'
              : 'bg-chrono-black border border-chrono-neon'
          }`}
          onClick={() => setTab('smoothie')}
        >
          Smoothie
        </button>
        <button
          className={`px-4 py-2 rounded ${
            tab === 'sun'
              ? 'bg-chrono-neon'
              : 'bg-chrono-black border border-chrono-neon'
          }`}
          onClick={() => setTab('sun')}
        >
          Sun Scanner
        </button>
      </div>

      {tab === 'smoothie' && <SmoothieBuilder />}
      {tab === 'sun' && (
        <SunARScanner latitude={37.7749} longitude={-122.4194} />
      )}
    </div>
  )
}
