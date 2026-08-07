# Firebase Dynamic Stats Setup Guide

## Overview

This guide explains how to set up Firebase to track real-time statistics for your Curexhealth application.

**Current Mode**: Simulated (growing numbers based on time elapsed)  
**After Setup**: Real data from Firebase Firestore

---

## 📊 What Stats Are Tracked

1. **Happy Patients** - Total completed bookings
2. **Professionals** - Number of healthcare professionals on your team
3. **Average Rating** - Calculated from customer reviews
4. **Areas Served** - Number of locations you cover

---

## 🚀 Quick Start (3 Modes Available)

### Mode 1: Simulated (Current - No Setup Needed) ✅

**Best for**: Just launched, building initial customer base

- ✅ Already configured and working
- ✅ Shows realistic growth based on time elapsed
- ✅ No backend needed
- ✅ Numbers grow automatically

**Configuration**: `src/services/statsService.js`
```javascript
const STATS_MODE = 'simulated'
const INITIAL_STATS = {
  patients: 150,        // Your starting patient count
  professionals: 8,     // Your current team size
  rating: 4.8,         // Your initial rating
  areas: 12,           // Areas you currently serve
  startDate: '2024-01-01', // When you started
}
```

**How it works**:
- Patients: +2.5 per week
- Professionals: +0.5 per month
- Rating: +0.01 per month (caps at 4.95)
- Areas: +1.2 per month

### Mode 2: Static (Simplest)

**Best for**: Want fixed numbers, no growth calculation

```javascript
const STATS_MODE = 'static'
```

Shows fixed values defined in `STATIC_STATS`.

### Mode 3: Firebase (Real Data) 🔥

**Best for**: Have real customers, want accurate tracking

Requires Firebase setup (see below).

---

## 🔥 Firebase Setup (For Real-Time Stats)

### Step 1: Create Firebase Project

1. **Go to Firebase Console**
   - Visit: https://console.firebase.google.com
   - Click "Add project"
   - Name: `curexhealth` (or your choice)
   - Disable Google Analytics (optional for now)
   - Click "Create project"

2. **Register Web App**
   - In project overview, click web icon (</>)
   - App nickname: `curexhealth-web`
   - **Don't** check Firebase Hosting (for now)
   - Click "Register app"
   - **Copy the config object** (you'll need this!)

### Step 2: Enable Firestore Database

1. **Create Firestore Database**
   - In Firebase Console → Build → Firestore Database
   - Click "Create database"
   - Start in **production mode**
   - Choose location: `asia-south1` (Mumbai) or nearest
   - Click "Enable"

2. **Set Up Security Rules**
   - Go to "Rules" tab
   - Replace with:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       // Public read access to stats
       match /stats/global {
         allow read: if true;
         allow write: if request.auth != null; // Only authenticated users
       }
       
       // Bookings (secure these based on your needs)
       match /bookings/{bookingId} {
         allow read: if request.auth != null;
         allow create: if true; // Allow public booking creation
         allow update: if request.auth != null;
       }
       
       // Reviews
       match /reviews/{reviewId} {
         allow read: if true;
         allow create: if true; // Allow public review creation
         allow update, delete: if request.auth != null;
       }
     }
   }
   ```
   - Click "Publish"

3. **Initialize Stats Document**
   - Go to "Data" tab
   - Click "Start collection"
   - Collection ID: `stats`
   - Document ID: `global`
   - Add fields:
     ```
     totalBookings: 0 (number)
     completedBookings: 150 (number) - your current count
     totalProfessionals: 8 (number) - your team size
     totalReviews: 0 (number)
     totalRatingSum: 0 (number)
     areasServed: 12 (number)
     lastUpdated: [current timestamp]
     ```
   - Click "Save"

### Step 3: Configure Your Application

1. **Install Firebase SDK**
   ```bash
   npm install firebase
   ```

2. **Create Firebase Config File**
   - Create: `src/config/firebase.js`
   - Copy from: `src/config/firebase.example.js` (see below)

3. **Add Your Firebase Config**
   
   Replace with your actual config from Firebase Console:

   ```javascript
   // src/config/firebase.js
   import { initializeApp } from 'firebase/app'
   import { getFirestore } from 'firebase/firestore'
   import { getAuth } from 'firebase/auth'

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT_ID.appspot.com",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   }

   // Initialize Firebase
   const app = initializeApp(firebaseConfig)
   export const db = getFirestore(app)
   export const auth = getAuth(app)
   ```

4. **Enable Firebase Mode**
   
   Update `src/services/statsService.js`:
   ```javascript
   const STATS_MODE = 'firebase' // Changed from 'simulated'
   ```

5. **Add Firebase to .gitignore**
   
   Add this line to `.gitignore`:
   ```
   src/config/firebase.js
   ```

### Step 4: Test It

1. **Restart dev server**
   ```bash
   npm run dev
   ```

2. **Check browser console** for any errors

3. **Verify stats load** from Firebase

4. **Test incrementing**
   - Open browser console
   - Run: 
   ```javascript
   import { incrementBookingCount } from './src/services/statsService.js'
   await incrementBookingCount()
   ```

---

## 📈 How to Update Stats

### Automatically (Recommended)

Integrate with your booking system:

```javascript
// In your booking completion code
import { incrementBookingCount, addRating } from '../services/statsService'

// When booking is completed
await incrementBookingCount()

// When customer leaves a review
await addRating(5) // rating value 1-5
```

### Manually (Via Firebase Console)

1. Go to Firestore Database → stats → global
2. Click "Edit" on any field
3. Update the value
4. Website updates automatically!

### Via Admin Panel (Future)

When you build an admin dashboard, you can:
- View real-time stats
- Update professional count
- Manage areas served
- View booking analytics

---

## 🗂️ Database Structure

### Collections

```
/stats
  /global
    - totalBookings: number
    - completedBookings: number
    - totalProfessionals: number
    - totalReviews: number
    - totalRatingSum: number
    - areasServed: number
    - lastUpdated: timestamp

/bookings (future)
  /{bookingId}
    - patientName: string
    - service: string
    - status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
    - createdAt: timestamp
    - completedAt: timestamp
    ... (other booking fields)

/reviews (future)
  /{reviewId}
    - bookingId: string
    - rating: number (1-5)
    - comment: string
    - patientName: string
    - createdAt: timestamp
```

---

## 🔄 Updating Stats

### When a Booking is Created

```javascript
// In your booking submission code
import { getFirestore, doc, updateDoc, increment } from 'firebase/firestore'
import { db } from '../config/firebase'

const statsRef = doc(db, 'stats', 'global')
await updateDoc(statsRef, {
  totalBookings: increment(1),
  lastUpdated: new Date()
})
```

### When a Booking is Completed

```javascript
await updateDoc(statsRef, {
  completedBookings: increment(1),
  lastUpdated: new Date()
})
```

### When a Review is Submitted

```javascript
const rating = 5 // from review form

await updateDoc(statsRef, {
  totalReviews: increment(1),
  totalRatingSum: increment(rating),
  lastUpdated: new Date()
})
```

### When Adding a New Professional

```javascript
await updateDoc(statsRef, {
  totalProfessionals: increment(1),
  lastUpdated: new Date()
})
```

### When Expanding to New Area

```javascript
await updateDoc(statsRef, {
  areasServed: increment(1),
  lastUpdated: new Date()
})
```

---

## 🔒 Security Considerations

### Current Setup (Public Read)
- ✅ Anyone can read stats (this is fine - they're public numbers)
- ❌ Only authenticated users can write
- ⚠️ No authentication set up yet

### For Production

1. **Set up Firebase Authentication**
2. **Create admin users**
3. **Restrict writes to admins only**

Updated security rules:
```javascript
match /stats/global {
  allow read: if true;
  allow write: if request.auth != null && 
               get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true;
}
```

---

## 💰 Firebase Pricing

**Free Tier (Spark Plan)**:
- ✅ 50,000 reads/day
- ✅ 20,000 writes/day
- ✅ 20,000 deletes/day
- ✅ 1 GiB storage
- ✅ 10 GiB/month network

**This is MORE than enough for:**
- Displaying stats on website (1 read per visitor)
- Updating stats with each booking
- Small to medium healthcare practice
- Up to thousands of visitors per day

**You'll only need paid plan if:**
- You get 50,000+ visitors per day
- You're a large enterprise

---

## 🐛 Troubleshooting

### Stats Not Loading

1. **Check Firebase config**
   - Verify `src/config/firebase.js` exists
   - Check all values are correct

2. **Check Firestore rules**
   - Make sure read is allowed: `allow read: if true;`

3. **Check browser console**
   - Look for Firebase errors
   - Check network tab for failed requests

4. **Verify stats document exists**
   - Firebase Console → Firestore → stats → global
   - Make sure all fields exist

### Stats Not Updating

1. **Check write permissions**
   - Firestore rules must allow writes
   - If using auth, make sure user is authenticated

2. **Check browser console** for errors

3. **Manually update in console** to test

### Import Errors

```bash
# Reinstall Firebase
npm uninstall firebase
npm install firebase
```

---

## 📞 Need Help?

**Firebase Documentation**:
- Firestore: https://firebase.google.com/docs/firestore
- Security Rules: https://firebase.google.com/docs/rules

**Common Issues**:
- Check browser console for detailed errors
- Verify Firestore security rules
- Ensure Firebase config is correct
- Make sure collection and document exist

---

## 🎯 Next Steps After Setup

1. ✅ Test stats loading
2. ✅ Integrate with booking system
3. ⏳ Build admin dashboard
4. ⏳ Add reviews/ratings system
5. ⏳ Set up Firebase Authentication
6. ⏳ Add analytics tracking

---

**Current Status**: Using simulated stats (no setup required)  
**Firebase Config**: Not yet configured  
**Ready for**: Testing with simulated data

**When you're ready to switch to real data, follow the steps above!**
