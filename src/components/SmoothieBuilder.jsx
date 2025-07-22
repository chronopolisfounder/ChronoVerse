// src/components/SmoothieBuilder.jsx
import React, { useState } from 'react'

const INGREDIENTS = [
  { name: 'Banana', health: 7 },
  { name: 'Spinach', health: 10 },
  { name: 'Blueberries', health: 9 },
  { name: 'Yogurt', health: 6 },
  { name: 'Protein Powder', health: 8 },
  { name: 'Almond Milk', health: 5 },
]

export default function SmoothieBuilder() {
  const [selected, setSelected] = useState([])
  const [healthScore, setHealthScore] = useState(0)

  function toggleIngredient(name) {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
    )
  }

  function calculateScore() {
    const score = selected
      .map(
        (ingredient) =>
          INGREDIENTS.find((i) => i.name === ingredient)?.health || 0
      )
      .reduce((sum, n) => sum + n, 0)
    setHealthScore(score)
  }

  return (
    <div className="p-6 rounded-2xl bg-black bg-opacity-70 border-2 border-tronNeon shadow-[0_0_24px_#00fff7] glassmorphism max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-tronNeon drop-shadow-[0_0_8px_#00fff7] mb-3">
        Smoothie Builder
      </h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {INGREDIENTS.map(({ name }) => (
          <button
            key={name}
            className={`px-3 py-1 rounded-full border-2 transition ${
              selected.includes(name)
                ? 'bg-chrono-neon text-black border-chrono-neon'
                : 'bg-black text-tronNeon border-tronNeon'
            }`}
            onClick={() => toggleIngredient(name)}
          >
            {name}
          </button>
        ))}
      </div>
      <button
        className="w-full mt-2 py-2 rounded bg-chrono-neon text-black font-bold shadow-[0_0_12px_#00fff7] hover:scale-105 transition"
        onClick={calculateScore}
        disabled={selected.length === 0}
      >
        Blend & Calculate Health Score
      </button>
      {healthScore > 0 && (
        <div className="mt-4 text-lg text-tronNeon drop-shadow-[0_0_8px_#00fff7]">
          Health Score: <span className="font-bold">{healthScore}</span>
        </div>
      )}
    </div>
  )
}
