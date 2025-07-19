// src/pages/SystemsPage.jsx
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function SystemsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white p-8">
      <h1 className="text-5xl font-bold text-center mb-12 text-white drop-shadow-glow">
        ChronoVerse Systems
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          { name: "Research Portal", path: "/researcher" },
          { name: "Avatar Protocol Engine", path: "/avatar" },
          { name: "Symptom Diagnostic", path: "/diagnostic" },
          { name: "ChronoCoin Rewards", path: "/rewards" },
          { name: "Memory Engine", path: "/memory" },
          { name: "Dream System", path: "/dream" },
        ].map((mod) => (
          <Link to={mod.path} key={mod.name}>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl shadow-xl hover:shadow-blue-500/50 transition-all duration-300 border border-blue-400/30 hover:border-cyan-300">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-cyan-300 mb-2 drop-shadow">
                  {mod.name}
                </h2>
                <p className="text-gray-400 text-sm">
                  Access the {mod.name} module.
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
