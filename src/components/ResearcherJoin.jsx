import React, { useState } from 'react'
import { Card } from './ui/Card'
import { Button } from './ui/Button'

export function ResearcherJoin() {
  const [formData, setFormData] = useState({ name: '', email: '', field: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card>
        <h2 className="text-xl font-semibold mb-3">Thank you for joining!</h2>
        <p>We will review your application and get back to you.</p>
      </Card>
    )
  }

  return (
    <Card>
      <h2 className="text-xl font-semibold mb-3">Join as a Researcher</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          required
        />
        <input
          type="text"
          name="field"
          placeholder="Research Field"
          value={formData.field}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          required
        />
        <Button type="submit">Submit Application</Button>
      </form>
    </Card>
  )
}
