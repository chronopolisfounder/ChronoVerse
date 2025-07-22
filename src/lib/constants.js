// ChronoVerse Platform Constants

// API Endpoints
export const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'https://api.chronoverse.com'

// Theme Colors
export const COLORS = {
  primary: '#1fffe7',
  accent: '#47d1ff',
  background: '#011319',
  coin: '#ffd700',
  danger: '#ff3964',
  success: '#26ffa1',
  warning: '#fff068',
}

// ChronoCoin default reward values
export const CHRONOCOIN_REWARDS = {
  DAILY_LOGIN: 25,
  PROFILE_COMPLETE: 50,
  FIRST_RESEARCH: 100,
  REFERRAL: 75,
  MILESTONE: 200,
}

// Avatar Presets Directory
export const AVATAR_ASSETS_PATH = '/public/avatars/'

// Research Pod Settings
export const POD_CONFIG = {
  maxMembers: 12,
  defaultModerator: 'ARClericMentor',
  syncIntervalSeconds: 30,
}

// App Info
export const APP_NAME = 'ChronoVerse'
export const APP_VERSION = '1.0.0'
