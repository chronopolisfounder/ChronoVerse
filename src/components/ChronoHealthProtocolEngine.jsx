import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { useAvatarState } from '@/state/avatar'
import { useDreamFusion } from '@/state/dreamFusion'
import { useTimelineEvents } from '@/state/timeline'
import { generateDiagnosticLoop } from '@/lib/diagnosticLoop'
import { motion } from 'framer-motion'

export default function ChronoHealthProtocolEngine() {
  const avatar = useAvatarState()
  const dreams = useDreamFusion()
  const timeline = useTimelineEvents()
  const [diagnosticLoop, setDiagnosticLoop] = useState(null)

  useEffect(() => {
    if (avatar && dreams && timeline) {
      const loop = generateDiagnosticLoop({ avatar, dreams, timeline })
      setDiagnosticLoop(loop)
    }
  }, [avatar, dreams, timeline])

  // Filter out keys you don't want displayed
  const filteredStats = diagnosticLoop
    ? Object.entries(diagnosticLoop).filter(([key]) => key !== 'Current Phase')
    : []

  // Dummy action handlers
  const onHydrate = () => alert('Hydrating... +10 hydration!')
  const onMove = () => alert('Moving... +10 movement readiness!')
  const onRest = () => alert('Resting... +15 dream lucidity!')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="p-6 max-w-3xl mx-auto"
    >
      <Card className="bg-blue-950 text-blue-300 border-blue-600 shadow-xl rounded-2xl p-6">
        <CardContent>
          <h2 className="text-3xl font-extrabold mb-6">
            Chrono Health Protocol Engine
          </h2>

          {diagnosticLoop ? (
            <>
              <div className="space-y-4 mb-6">
                {filteredStats.map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center">
                    <span className="font-semibold">{key}</span>
                    <div className="flex-1 mx-4 bg-blue-800 rounded-full h-4 overflow-hidden">
                      <div
                        className="bg-blue-400 h-4 rounded-full"
                        style={{ width: `${Math.min(value, 100)}%` }}
                      />
                    </div>
                    <span className="w-10 text-right font-mono">{value}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={onHydrate}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition"
                >
                  Hydrate
                </button>
                <button
                  onClick={onMove}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition"
                >
                  Move
                </button>
                <button
                  onClick={onRest}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition"
                >
                  Rest
                </button>
              </div>
            </>
          ) : (
            <p className="text-blue-400 animate-pulse text-center">
              Initializing Chrono Diagnostic Loop...
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
