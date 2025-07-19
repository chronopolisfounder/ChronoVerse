import React from "react";

export default function SystemsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-cyan-400 mb-8">⚙️ ChronoVerse Systems</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-2">Symptom Diagnostic Engine</h2>
          <p className="text-gray-300">Analyze your symptoms and get insights.</p>
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-2">Avatar Protocol Panel</h2>
          <p className="text-gray-300">Control your health-synced avatar.</p>
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-2">ChronoCoin Rewards</h2>
          <p className="text-gray-300">Earn ChronoCoin for real-world actions.</p>
        </div>
      </div>
    </div>
  );
}
