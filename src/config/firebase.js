/**
 * Firebase Configuration Placeholder
 * 
 * This is a placeholder file to prevent build errors.
 * Replace this with your actual Firebase configuration when ready.
 * 
 * See: src/config/firebase.example.js for the template
 * Guide: FIREBASE_STATS_SETUP.md for complete setup instructions
 */

// Export null values - stats service will fall back to simulated mode
export const db = null
export const auth = null
export default null

// Uncomment and fill in when you're ready to use Firebase:
/*
import { initializeApp } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export default app
*/
