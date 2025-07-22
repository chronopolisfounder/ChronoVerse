// src/pages/Protocol.jsx
import React from 'react'
import SymptomTracker from '../components/SymptomTracker.jsx'

export default function Protocol() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Health Protocol</h1>
      <SymptomTracker />
    </div>
  )
}
