// ChronoVerse API utility functions

import { API_BASE_URL } from '@/lib/constants'

/**
 * Unified fetch wrapper for all ChronoVerse API calls.
 * Handles base URL, headers, and error handling.
 *
 * @param {string} endpoint - The API endpoint path (e.g., "/rewards")
 * @param {object} [options] - Fetch options (method, body, headers, etc.)
 * @returns {Promise<any>} The parsed JSON response
 */
export async function chronoFetch(endpoint, options = {}) {
  const url = endpoint.startsWith('http')
    ? endpoint
    : `${API_BASE_URL.replace(/\/$/, '')}/${endpoint.replace(/^\//, '')}`

  const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...options.headers,
  }

  const fetchOptions = {
    ...options,
    headers: defaultHeaders,
  }

  try {
    const response = await fetch(url, fetchOptions)

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(
        `API Error: ${response.status} ${response.statusText} - ${errorText}`
      )
    }

    // Attempt to parse JSON; fallback to text if fails
    try {
      return await response.json()
    } catch {
      return await response.text()
    }
  } catch (error) {
    // You may want to send this error to a logging service
    console.error('ChronoVerse API error:', error)
    throw error
  }
}

/**
 * Example: Get all rewards from the API
 */
export function getRewards() {
  return chronoFetch('/rewards')
}

/**
 * Example: Submit a new research module
 */
export function submitResearch(data) {
  return chronoFetch('/research', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
