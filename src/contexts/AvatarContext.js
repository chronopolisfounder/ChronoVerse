// src/contexts/AvatarContext.js
import React, { createContext, useState } from 'react'

export const AvatarContext = createContext()

export function AvatarProvider({ children }) {
  const [avatar, setAvatar] = useState({
    name: 'Aeris',
    energy: 80,
    hydration: 'Optimal',
    movement: 'Ready',
    mood: 'Balanced',
    fatigue: 'Low',
    // Add other avatar attributes as needed
  })

  /**
   * Updates avatar state.
   * @param {object} newState
   */
  function updateAvatar(newState) {
    if (typeof newState === 'object' && newState !== null) {
      setAvatar((prev) => ({ ...prev, ...newState }))
    }
  }

  return (
    <AvatarContext.Provider value={{ avatar, setAvatar: updateAvatar }}>
      {children}
    </AvatarContext.Provider>
  )
}
