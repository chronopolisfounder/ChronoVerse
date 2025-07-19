export const generateDiagnosticLoop = (avatar, dream, timeline) => {
  return [
    `Avatar Energy: ${avatar.energyLevel}`,
    `Hydration Level: ${avatar.hydration}`,
    `Movement Readiness: ${avatar.movement}`,
    `Dream Lucidity: ${dream.lucidity}`,
    `Dream Clarity: ${dream.dreamClarity}`,
    `Current Phase: ${timeline.phase}`,
    `Convergence Level: ${timeline.convergenceLevel}`,
  ]
}
