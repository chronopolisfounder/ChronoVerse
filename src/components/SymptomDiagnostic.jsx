import React, { useState } from 'react'
import { Card } from './ui/Card'
import { Button } from './ui/Button'

export function SymptomDiagnostic() {
  const [symptoms, setSymptoms] = useState('')
  const [result, setResult] = useState(null)

  function handleAnalyze() {
    if (!symptoms.trim()) {
      setResult('Please enter symptoms to analyze.')
      return
    }
    setResult(`Analysis result for symptoms: "${symptoms}" (simulation)`)
  }

  return (
    <Card>
      <h2 className="text-xl font-semibold mb-3">Symptom Diagnostic Engine</h2>
      <textarea
        rows="4"
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
        placeholder="Enter your symptoms here..."
        className="w-full p-2 rounded bg-gray-700 border border-gray-600 mb-4"
      />
      <Button onClick={handleAnalyze}>Analyze Symptoms</Button>
      {result && <p className="mt-4 bg-gray-800 p-3 rounded">{result}</p>}
    </Card>
  )
}
