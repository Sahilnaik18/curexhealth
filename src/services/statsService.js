/**
 * Statistics Service for Curexhealth
 * 
 * This service provides dynamic statistics based on real data from Firebase.
 * Falls back to simulated growth when Firebase is not configured.
 * 
 * Stats tracked:
 * - Total bookings/patients served
 * - Number of healthcare professionals
 * - Average rating from reviews
 * - Number of areas served
 */

// ─── CONFIGURATION ────────────────────────────────────────────────────────────

// Mode: 'firebase' | 'simulated' | 'static'
// IMPORTANT: Set to 'simulated' until Firebase is configured
// Firebase mode requires src/config/firebase.js to exist
const STATS_MODE = 'simulated' // Change to 'firebase' after setting up Firebase

// Starting values (used for simulated mode)
const INITIAL_STATS = {
  patients: 150,        // Starting patient count
  professionals: 8,     // Starting professional count
  rating: 4.8,         // Starting average rating
  areas: 12,           // Starting areas served
  startDate: '2024-01-01', // When you started tracking
}

// Static fallback (displayed when data is loading)
const STATIC_STATS = {
  patients: '10K+',
  professionals: '150+',
  rating: '4.9★',
  areas: '50+',
}

// ─── SIMULATED GROWTH CALCULATION ─────────────────────────────────────────────

/**
 * Calculate realistic growth based on time elapsed
 * This creates believable numbers while you build your real customer base
 */
function calculateSimulatedStats() {
  const startDate = new Date(INITIAL_STATS.startDate)
  const now = new Date()
  const daysSinceStart = Math.max(1, Math.floor((now - startDate) / (1000 * 60 * 60 * 24)))
  const weeksSinceStart = daysSinceStart / 7
  const monthsSinceStart = daysSinceStart / 30

  // Realistic growth patterns
  const growthFactors = {
    // Early stage: 2-3 bookings per week
    patients: INITIAL_STATS.patients + Math.floor(weeksSinceStart * 2.5),
    // Slower growth for professionals
    professionals: INITIAL_STATS.professionals + Math.floor(monthsSinceStart * 0.5),
    // Rating improves slightly over time (capped at 4.95)
    rating: Math.min(4.95, INITIAL_STATS.rating + (monthsSinceStart * 0.01)),
    // Expand to new areas monthly
    areas: INITIAL_STATS.areas + Math.floor(monthsSinceStart * 1.2),
  }

  return growthFactors
}

/**
 * Format numbers for display (adds K+, etc.)
 */
function formatStatValue(value, type) {
  switch (type) {
    case 'patients':
      if (value >= 10000) return `${Math.floor(value / 1000)}K+`
      if (value >= 1000) return `${(value / 1000).toFixed(1)}K+`
      return `${value}+`

    case 'professionals':
      return `${value}+`

    case 'rating':
      return `${value.toFixed(1)}★`

    case 'areas':
      return `${value}+`

    default:
      return String(value)
  }
}

// ─── FIREBASE INTEGRATION (OPTIONAL) ──────────────────────────────────────────

/**
 * Fetch real statistics from Firebase Firestore
 * 
 * Database structure expected:
 * /stats/global {
 *   totalBookings: number,
 *   completedBookings: number,
 *   totalProfessionals: number,
 *   totalReviews: number,
 *   totalRatingSum: number,
 *   areasServed: number,
 *   lastUpdated: timestamp
 * }
 */
async function fetchFirebaseStats() {
  try {
    // Check if Firebase config exists
    let firebaseModule
    try {
      firebaseModule = await import('../config/firebase')
    } catch (err) {
      console.warn('Firebase config not found. Create src/config/firebase.js to enable Firebase mode.')
      console.warn('See FIREBASE_STATS_SETUP.md for setup instructions.')
      return calculateSimulatedStats()
    }

    // Dynamically import Firebase only if needed
    const { getFirestore, doc, getDoc } = await import('firebase/firestore')
    const { db } = firebaseModule

    if (!db) {
      console.warn('Firebase not initialized properly')
      return calculateSimulatedStats()
    }

    const statsRef = doc(db, 'stats', 'global')
    const statsSnap = await getDoc(statsRef)

    if (statsSnap.exists()) {
      const data = statsSnap.data()
      return {
        patients: data.completedBookings || 0,
        professionals: data.totalProfessionals || 0,
        rating: data.totalReviews > 0
          ? data.totalRatingSum / data.totalReviews
          : INITIAL_STATS.rating,
        areas: data.areasServed || 0,
      }
    }

    // If no data exists, return simulated
    console.warn('No Firebase stats found, using simulated data')
    return calculateSimulatedStats()

  } catch (error) {
    console.error('Error fetching Firebase stats:', error)
    // Fallback to simulated on error
    return calculateSimulatedStats()
  }
}

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────

/**
 * Get current statistics
 * Returns formatted stats based on configured mode
 */
export async function getStats() {
  try {
    let rawStats

    if (STATS_MODE === 'firebase') {
      rawStats = await fetchFirebaseStats()
    } else if (STATS_MODE === 'simulated') {
      rawStats = calculateSimulatedStats()
    } else {
      // Static mode - return as-is
      return [
        { value: STATIC_STATS.patients, label: 'Happy Patients', color: '#60A5FA' },
        { value: STATIC_STATS.professionals, label: 'Professionals', color: '#34D399' },
        { value: STATIC_STATS.rating, label: 'Avg Rating', color: '#FCD34D' },
        { value: STATIC_STATS.areas, label: 'Areas Served', color: '#F87171' },
      ]
    }

    // Format the stats
    return [
      {
        value: formatStatValue(rawStats.patients, 'patients'),
        label: 'Happy Patients',
        color: '#60A5FA',
        raw: rawStats.patients // Keep raw value for internal use
      },
      {
        value: formatStatValue(rawStats.professionals, 'professionals'),
        label: 'Professionals',
        color: '#34D399',
        raw: rawStats.professionals
      },
      {
        value: formatStatValue(rawStats.rating, 'rating'),
        label: 'Avg Rating',
        color: '#FCD34D',
        raw: rawStats.rating
      },
      {
        value: formatStatValue(rawStats.areas, 'areas'),
        label: 'Areas Served',
        color: '#F87171',
        raw: rawStats.areas
      },
    ]

  } catch (error) {
    console.error('Error in getStats:', error)
    // Ultimate fallback - return static values
    return [
      { value: STATIC_STATS.patients, label: 'Happy Patients', color: '#60A5FA' },
      { value: STATIC_STATS.professionals, label: 'Professionals', color: '#34D399' },
      { value: STATIC_STATS.rating, label: 'Avg Rating', color: '#FCD34D' },
      { value: STATIC_STATS.areas, label: 'Areas Served', color: '#F87171' },
    ]
  }
}

/**
 * Increment booking count (call this when a booking is completed)
 * Only works in Firebase mode
 */
export async function incrementBookingCount() {
  if (STATS_MODE !== 'firebase') {
    console.warn('incrementBookingCount only works in Firebase mode')
    return
  }

  try {
    // Check if Firebase config exists
    let firebaseModule
    try {
      firebaseModule = await import('../config/firebase')
    } catch (err) {
      console.error('Firebase config not found')
      return
    }

    const { getFirestore, doc, updateDoc, increment } = await import('firebase/firestore')
    const { db } = firebaseModule

    const statsRef = doc(db, 'stats', 'global')
    await updateDoc(statsRef, {
      totalBookings: increment(1),
      lastUpdated: new Date()
    })
  } catch (error) {
    console.error('Error incrementing booking count:', error)
  }
}

/**
 * Add a rating (call this when a patient leaves a review)
 * Only works in Firebase mode
 */
export async function addRating(rating) {
  if (STATS_MODE !== 'firebase') {
    console.warn('addRating only works in Firebase mode')
    return
  }

  if (rating < 1 || rating > 5) {
    console.error('Rating must be between 1 and 5')
    return
  }

  try {
    // Check if Firebase config exists
    let firebaseModule
    try {
      firebaseModule = await import('../config/firebase')
    } catch (err) {
      console.error('Firebase config not found')
      return
    }

    const { getFirestore, doc, updateDoc, increment } = await import('firebase/firestore')
    const { db } = firebaseModule

    const statsRef = doc(db, 'stats', 'global')
    await updateDoc(statsRef, {
      totalReviews: increment(1),
      totalRatingSum: increment(rating),
      lastUpdated: new Date()
    })
  } catch (error) {
    console.error('Error adding rating:', error)
  }
}

/**
 * Update stats configuration (for admin use)
 * Only works in Firebase mode
 */
export async function updateStatsConfig(updates) {
  if (STATS_MODE !== 'firebase') {
    console.warn('updateStatsConfig only works in Firebase mode')
    return
  }

  try {
    // Check if Firebase config exists
    let firebaseModule
    try {
      firebaseModule = await import('../config/firebase')
    } catch (err) {
      console.error('Firebase config not found')
      return
    }

    const { getFirestore, doc, updateDoc } = await import('firebase/firestore')
    const { db } = firebaseModule

    const statsRef = doc(db, 'stats', 'global')
    await updateDoc(statsRef, {
      ...updates,
      lastUpdated: new Date()
    })
  } catch (error) {
    console.error('Error updating stats config:', error)
  }
}

// ─── UTILITY FUNCTIONS ────────────────────────────────────────────────────────

/**
 * Get current mode for debugging
 */
export function getStatsMode() {
  return STATS_MODE
}

/**
 * Check if Firebase is configured and available
 */
export async function isFirebaseConfigured() {
  try {
    const firebaseModule = await import('../config/firebase')
    return firebaseModule.db !== null && firebaseModule.db !== undefined
  } catch {
    return false
  }
}
