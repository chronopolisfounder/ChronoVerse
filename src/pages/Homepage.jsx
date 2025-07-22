import React from 'react'
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white flex flex-col items-center justify-center p-10">
      <div className="w-full max-w-2xl bg-white bg-opacity-5 rounded-2xl shadow-xl p-10 backdrop-blur-lg border border-purple-500/30 text-center">
        <h1 className="text-5xl font-extrabold text-chronoAccent mb-6 drop-shadow-lg tracking-tight">
          Welcome to <span className="text-purple-400">ChronoVerse</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          The immersive platform for health, research, and cyber-life tracking.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/dashboard"
            className="bg-chronoAccent hover:bg-chronoBlue text-black font-bold px-6 py-3 rounded-xl shadow transition"
          >
            🚀 Launch Systems
          </Link>
          <Link
            to="/profile"
            className="bg-chronoBlue hover:bg-chronoAccent text-white font-bold px-6 py-3 rounded-xl shadow transition"
          >
            👤 Profile
          </Link>
          <Link
            to="/researcher-portal"
            className="bg-purple-700 hover:bg-purple-600 text-white font-bold px-6 py-3 rounded-xl shadow transition"
          >
            🔬 Researcher Portal
          </Link>
        </div>
      </div>
    </div>
  )
}
