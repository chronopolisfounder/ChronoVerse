// src/pages/Systems.jsx
import React from 'react'
import GlowCard from '../components/GlowCard.jsx'

export default function Systems() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-chronoBlue mb-4">Systems</h1>
      <GlowCard title="Simulation Systems">
        <ul className="list-disc ml-6 text-lg">
          <li>Real-Time Health Monitoring</li>
          <li>Avatar Synchronization</li>
          <li>Simulation Pods</li>
          <li>Tron-inspired Grid Navigation</li>
        </ul>
      </GlowCard>
    </div>
  )
}
