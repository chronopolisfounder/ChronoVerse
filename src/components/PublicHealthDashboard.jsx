import React from 'react'
export default function PublicHealthDashboard() {
  return (
    <div className="m-4 p-6 bg-white bg-opacity-10 rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Public Health Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-gradient-to-br from-cyan-800 to-indigo-700 rounded-lg shadow">
          <span className="block text-lg font-semibold">Real-Time Cases</span>
          <span className="text-4xl font-bold">3,214</span>
        </div>
        <div className="p-4 bg-gradient-to-br from-blue-800 to-purple-700 rounded-lg shadow">
          <span className="block text-lg font-semibold">Active Pods</span>
          <span className="text-4xl font-bold">28</span>
        </div>
      </div>
    </div>
  )
}
