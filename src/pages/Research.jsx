// src/pages/Research.jsx
import React from 'react'
import GlowCard from '../components/GlowCard.jsx'

export default function Research() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-chronoAccent mb-4">
        Researcher Portal
      </h1>
      <GlowCard title="Active Research Modules">
        <p>
          Submit, track, and review research modules for ChronoVerse. Real-time
          submissions and collaboration coming soon!
        </p>
      </GlowCard>
    </div>
  )
}
