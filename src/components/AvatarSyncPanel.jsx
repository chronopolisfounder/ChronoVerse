import React, { useState } from 'react'
import { RefreshCcw, CheckCircle, AlertCircle } from 'lucide-react'
import GlowCard from './GlowCard' // Or: import { Card } from './ui/Card';

// Example static avatar (replace with real avatar/image logic as needed)
const AVATAR_URL = 'https://api.dicebear.com/7.x/identicon/svg?seed=ChronoVerse'

export default function AvatarSyncPanel() {
  const [syncing, setSyncing] = useState(false)
  const [lastSync, setLastSync] = useState('2025-07-19 14:15')

  function handleSync() {
    setSyncing(true)
    setTimeout(() => {
      setSyncing(false)
      setLastSync(new Date().toLocaleString())
    }, 1500) // Simulated sync
  }

  return (
    <GlowCard className="max-w-xs w-full mx-auto flex flex-col items-center">
      <img
        src={AVATAR_URL}
        alt="User avatar"
        className="w-24 h-24 rounded-full border-4 border-cyan-400 shadow-lg mb-4 bg-gray-800"
        draggable={false}
      />
      <div className="mb-2 text-xl font-bold text-chrome-200">Avatar Sync</div>
      <div className="mb-4 flex items-center gap-2 text-chrome-400">
        {syncing ? (
          <>
            <RefreshCcw className="w-5 h-5 animate-spin text-cyan-300" />
            Syncing…
          </>
        ) : (
          <>
            <CheckCircle className="w-5 h-5 text-green-400" />
            Synced
          </>
        )}
      </div>
      <button
        onClick={handleSync}
        disabled={syncing}
        className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold bg-cyan-500 hover:bg-cyan-400 transition text-white shadow ${
          syncing ? 'opacity-70 cursor-not-allowed' : ''
        }`}
      >
        <RefreshCcw className={`w-5 h-5 ${syncing ? 'animate-spin' : ''}`} />
        Sync Now
      </button>
      <div className="text-xs text-chrome-500 mt-3">
        Last synced: {lastSync}
      </div>
    </GlowCard>
  )
}
