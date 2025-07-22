import React from 'react'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white flex flex-col items-center p-10">
      <div className="w-full max-w-xl bg-white bg-opacity-5 rounded-2xl shadow-xl p-8 backdrop-blur-lg border border-purple-500/30">
        <h1 className="text-4xl font-bold mb-6 text-purple-400 flex items-center gap-2">
          <span role="img" aria-label="dashboard">
            📊
          </span>{' '}
          Dashboard
        </h1>
        <div className="space-y-6">
          <div className="bg-gray-800 bg-opacity-70 p-6 rounded-xl">
            <div className="text-lg font-bold text-chronoAccent">
              Systems Online
            </div>
            <div className="text-2xl text-green-400 font-mono mt-2">
              ✅ All systems operational
            </div>
          </div>
          <div className="bg-gray-800 bg-opacity-70 p-6 rounded-xl">
            <div className="text-lg font-bold text-chronoAccent">
              Recent Activity
            </div>
            <div className="text-white mt-2">
              Nothing yet. Your activity will appear here.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
