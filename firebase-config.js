/* ================================================================
   FIREBASE CONFIGURATION — Arrahman Study Hub
   
   SETUP STEPS:
   1. Go to: https://console.firebase.google.com/
   2. Click "Create a project" → Name: arrahman-study-hub
   3. Project Settings (gear icon) → General → Your apps
   4. Click </> (Web) → Register app → Copy config below
   5. Replace all "YOUR_..." values with actual values
   6. Enable these in Firebase Console:
      - Authentication → Email/Password (enable)
      - Firestore Database → Create database (production mode)
      - Storage → Get started
================================================================ */

const FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

/* Admin credentials — change these! */
const ADMIN_EMAIL    = "admin@arrahmanstudyhub.tech"; /* ← your email */
const ADMIN_PASSWORD = "Admin@2026Secure!";            /* ← strong password */
