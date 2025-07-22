// src/hooks/useSymptomLogger.js
import { useState } from 'react'

/**
 * Custom hook for logging and managing user symptom entries.
 * @returns {object} { symptoms, addSymptom, clearSymptoms }
 */
export function useSymptomLogger() {
  const [symptoms, setSymptoms] = useState([])

  /**
   * Adds a new symptom to the log.
   * @param {string} symptom
   */
  function addSymptom(symptom) {
    if (typeof symptom === 'string' && symptom.trim()) {
      setSymptoms((prev) => [...prev, symptom.trim()])
    }
  }

  /**
   * Clears the current symptom log.
   */
  function clearSymptoms() {
    setSymptoms([])
  }

  return {
    symptoms,
    addSymptom,
    clearSymptoms,
  }
}
