import React, { useEffect, useState } from 'react';

export default function AICompanion({ position }) {
  const [message, setMessage] = useState('Initializing ChronoNav AI...');

  useEffect(() => {
    if (!position) return;
    const [lat, lon] = position;
    const text = `You are now located at latitude ${lat.toFixed(4)} and longitude ${lon.toFixed(4)}. Scanning terrain... All systems optimal.`;
    setMessage(text);
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(text);
    synth.speak(utter);
  }, [position]);

  return (
    <div className="bg-chronoDark bg-opacity-90 p-4">
      <p className="text-chronoBlue text-sm">ChronoNav Co-Pilot:</p>
      <p className="text-white text-lg font-mono">{message}</p>
    </div>
  );
}