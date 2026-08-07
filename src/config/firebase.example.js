/**
 * Firebase Configuration Example
 * 
 * Copy this file to firebase.js and fill in your actual Firebase credentials
 * Get these values from Firebase Console: 
 * https://console.firebase.google.com → Project Settings → General → Your apps → Web app config
 * 
 * IMPORTANT: 
 * - Do NOT commit firebase.js to git (it's in .gitignore)
 * - Keep your API keys secure
 * - Firebase API keys are safe to use in client-side code (they're not secret keys)
 * - Security is enforced through Firestore Security Rules
 */

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize services
export const db = getFirestore(app)
export const auth = getAuth(app)

// Export app if needed elsewhere
export default app
