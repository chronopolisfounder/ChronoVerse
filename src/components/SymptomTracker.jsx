import React, { useState, useContext } from 'react'
import { SymptomContext } from '../contexts/SymptomContext.js'

export default function SymptomTracker() {
  const [input, setInput] = useState('')
  const { symptoms, addSymptom, clearSymptoms } = useContext(SymptomContext)

  function handleAdd() {
    if (input.trim()) {
      addSymptom(input)
      setInput('')
    }
  }

  return (
    <div className="p-4 bg-chrono-metal rounded-2xl shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-2 text-tronNeon drop-shadow-[0_0_8px_#00fff7]">
        Symptom Tracker
      </h2>
      <div className="flex mb-2">
        <input
          className="border p-2 rounded-l w-full text-black"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter symptom"
        />
        <button
          onClick={handleAdd}
          className="bg-chrono-neon text-black px-4 rounded-r"
        >
          Log
        </button>
      </div>
      <ul className="mt-2 space-y-1">
        {symptoms.map((s, i) => (
          <li key={i} className="text-white">
            {s}
          </li>
        ))}
      </ul>
      <button
        className="mt-3 text-sm text-gray-400 hover:underline"
        onClick={clearSymptoms}
      >
        Clear Log
      </button>
    </div>
  )
}
