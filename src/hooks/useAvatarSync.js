// src/hooks/useAvatarSync.js
import { useContext } from 'react'
import { AvatarContext } from '../contexts/AvatarContext.js'

/**
 * Hook to access and sync the current user's avatar state.
 * @returns {object} { avatar, syncAvatar }
 */
export function useAvatarSync() {
  const { avatar, setAvatar } = useContext(AvatarContext)

  /**
   * Syncs (updates) the avatar state.
   * @param {object} newAvatar
   */
  function syncAvatar(newAvatar) {
    if (typeof newAvatar === 'object' && newAvatar !== null) {
      setAvatar((prev) => ({ ...prev, ...newAvatar }))
    }
  }

  return { avatar, syncAvatar }
}
