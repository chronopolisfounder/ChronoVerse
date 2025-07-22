// src/contexts/SymptomContext.js
import React, { createContext, useState } from 'react'

export const SymptomContext = createContext()

export function SymptomProvider({ children }) {
  const [symptoms, setSymptoms] = useState([])

  /**
   * Adds a symptom entry to the log.
   * @param {string} symptom
   */
  function addSymptom(symptom) {
    if (typeof symptom === 'string' && symptom.trim()) {
      setSymptoms((prev) => [...prev, symptom.trim()])
    }
  }

  /**
   * Clears all logged symptoms.
   */
  function clearSymptoms() {
    setSymptoms([])
  }

  return (
    <SymptomContext.Provider value={{ symptoms, addSymptom, clearSymptoms }}>
      {children}
    </SymptomContext.Provider>
  )
}
