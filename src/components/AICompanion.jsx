import React, { useEffect, useState } from 'react'

export default function AICompanion({ position }) {
  const [message, setMessage] = useState('Initializing ChronoNav AI...')

  useEffect(() => {
    if (!position || position.length !== 2) return
    const [lat, lon] = position
    const text = `You are now located at latitude ${lat.toFixed(4)} and longitude ${lon.toFixed(4)}. Scanning terrain... All systems optimal.`
    setMessage(text)
    const synth = window.speechSynthesis
    synth.cancel() // Stop any previous utterances
    const utter = new window.SpeechSynthesisUtterance(text)
    synth.speak(utter)
  }, [position])

  return (
    <div className="bg-chronoDark bg-opacity-90 p-4 rounded-xl shadow-md">
      <p className="text-chronoBlue text-sm font-semibold mb-1">
        ChronoNav Co-Pilot:
      </p>
      <p className="text-white text-lg font-mono" aria-live="polite">
        {message}
      </p>
    </div>
  )
}
