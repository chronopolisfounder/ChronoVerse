// src/lib/validators.js

/**
 * Returns true if value is a non-empty string.
 * @param {any} v
 * @returns {boolean}
 */
export function isNonEmptyString(v) {
  return typeof v === 'string' && v.trim().length > 0
}

/**
 * Returns true if value is a positive integer.
 * @param {any} n
 * @returns {boolean}
 */
export function isPositiveInteger(n) {
  return Number.isInteger(n) && n > 0
}

/**
 * Returns true if value is a valid email address.
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/**
 * Returns true if array is non-empty.
 * @param {any[]} arr
 * @returns {boolean}
 */
export function isNonEmptyArray(arr) {
  return Array.isArray(arr) && arr.length > 0
}
