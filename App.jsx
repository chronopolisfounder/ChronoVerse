import React from "react";
import { ChronoRegistry } from "./ChronoRegistry";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const glowingGradient =
  "bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-purple-600/10 backdrop-blur border border-cyan-400/10 shadow-[0_0_15px_rgba(0,255,255,0.2)]";

const systemNames = {
  brain: "🧠 Brain System",
  heart: "💓 Heart System",
  gut: "🦠 Gut System",
  body: "🤖 Body System",
  aura: "🔮 Aura System",
  dream: "💤 Dream System",
  city: "🎙️ Chronopolis Core",
  sim: "🎮 ChronoSIM",
  app: "📱 Chrono App",
  backend: "🧬 Backend Core",
};

export default function App() {
  return (
    <div className="min-h-screen bg-black text-cyan-200 font-sans p-6">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center mb-8 text-cyan-300 drop-shadow-xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        ChronoVerse Systems
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(ChronoRegistry).map(([key, subsystem]) => (
          <motion.div
            key={key}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`rounded-2xl p-4 ${glowingGradient}`}
          >
            <Card className="bg-black/30 border border-cyan-700/30">
              <CardContent className="space-y-2">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Sparkles className="text-cyan-400 w-5 h-5" />
                  {systemNames[key]}
                </h2>
                <ul className="list-disc list-inside text-sm">
                  {Object.entries(subsystem).map(([k, v]) => (
                    <li key={k} className="capitalize">
                      {k}
                      {typeof v === "object"
                        ? `: (${Object.keys(v).join(", ")})`
                        : ""}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}