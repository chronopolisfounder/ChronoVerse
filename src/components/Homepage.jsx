import React from "react";
import { useAvatarState } from "../state/avatar";
import { useDreamFusion } from "../state/dreamFusion";
import { useTimeline } from "../state/timeline";
import { generateDiagnosticLoop } from "../lib/diagnosticLoop";

export default function Homepage() {
  const avatar = useAvatarState();
  const dream = useDreamFusion();
  const timeline = useTimeline();

  React.useEffect(() => {
    generateDiagnosticLoop(avatar, dream, timeline);
  }, [avatar, dream, timeline]);

  return (
    <div className="p-6 text-blue-400 bg-black min-h-screen flex flex-col items-center justify-center glow-blue">
      <h1 className="text-4xl font-bold mb-4">ChronoVerse Homepage</h1>
      <p>Welcome, {avatar.name || "Traveler"}.</p>
      <p>Current Dream Symbol: {dream.currentSymbol || "None"}</p>
      <p>Timeline Position: {timeline.position || 0}</p>
    </div>
  );
}
