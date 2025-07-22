export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-6">🌌 Welcome to the ChronoVerse</h1>
      <p className="text-xl mb-6 text-gray-300">
        Explore, evolve, and extend your timeline.
      </p>
      <div className="flex gap-4">
        <a
          href="/systems"
          className="px-6 py-3 bg-cyan-600 rounded-xl shadow hover:bg-cyan-500"
        >
          Launch Systems
        </a>
        <a
          href="/research"
          className="px-6 py-3 bg-purple-600 rounded-xl shadow hover:bg-purple-500"
        >
          Researcher Portal
        </a>
      </div>
    </div>
  )
}
