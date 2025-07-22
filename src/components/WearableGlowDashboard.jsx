// src/components/WearableGlowDashboard.jsx
import React, { useEffect, useState } from 'react'

/**
 * Shows real-time synced status from user's wearables.
 * Example: Oura, Apple Watch, Whoop, etc.
 */
export default function WearableGlowDashboard() {
  const [devices, setDevices] = useState([])
  const [lastSync, setLastSync] = useState(null)

  useEffect(() => {
    // Simulate fetching wearable devices
    setTimeout(() => {
      setDevices(['Oura Ring', 'Whoop', 'Apple Watch'])
      setLastSync(new Date().toLocaleString())
    }, 600)
  }, [])

  return (
    <div className="p-6 rounded-2xl bg-black bg-opacity-70 border-2 border-tronNeon shadow-[0_0_24px_#00fff7] glassmorphism max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-tronNeon drop-shadow-[0_0_8px_#00fff7] mb-2">
        Wearable Glow Dashboard
      </h2>
      <p className="text-gray-400 mb-4">
        Real-time sync with your supported wearables.
      </p>
      <ul className="mb-4">
        {devices.map((device) => (
          <li
            key={device}
            className="text-lg text-tronNeon drop-shadow-[0_0_4px_#00fff7]"
          >
            {device}
          </li>
        ))}
      </ul>
      <div className="text-sm text-gray-400">
        Last Sync:{' '}
        <span className="text-tronNeon">{lastSync || 'Syncing...'}</span>
      </div>
    </div>
  )
}
