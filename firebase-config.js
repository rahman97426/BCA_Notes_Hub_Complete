/**
 * firebase-config.js
 * ─────────────────────────────────────────────────────────────────
 * Arrahman Study Hub — Firebase Web App Configuration
 * Project: arrahman-study-hub
 * ─────────────────────────────────────────────────────────────────
 *
 * HOW TO FILL THIS FILE (one-time setup):
 *
 * 1. Open: https://console.firebase.google.com/
 * 2. Select project: arrahman-study-hub
 * 3. Click the gear icon ⚙️ → "Project settings"
 * 4. Scroll down to "Your apps" → click your Web app (</>)
 *    If no web app exists yet:
 *    Click "Add app" → choose Web → name it "BCA Hub Web"
 * 5. Copy the firebaseConfig values into this file below.
 *
 * Values to find in Firebase Console:
 *   apiKey:            "AIzaSyB5uZ-kRtOa75TqD0psKdYSCMSlVs_TigU",
 *   messagingSenderId: "496381846677",
 *   appId:             "1:496381846677:web:99add0ff5f6dd789b7a79c",
 *   measurementId     → optional, looks like "G-XXXXXXXXXX"
 *
 * The other three values are derived from your Project ID and
 * are already filled in below. Do NOT change them.
 *
 * ⚠️  SECURITY NOTE:
 * Firebase web API keys are designed to be public-facing.
 * They identify your project to Firebase but do NOT grant access
 * to your data — that is controlled by Firebase Security Rules.
 * Make sure your Firestore and Storage Security Rules are set
 * correctly in the Firebase Console before going live.
 * ─────────────────────────────────────────────────────────────────
 */

const FIREBASE_CONFIG = {

  // ── FILL THESE THREE in from Firebase Console ──────────────────
  apiKey:            "AIzaSyB5uZ-kRtOa75TqD0psKdYSCMSlVs_TigU",
  messagingSenderId: "496381846677",
  appId:             "1:496381846677:web:99add0ff5f6dd789b7a79c",

  // ── These are already correct for project: arrahman-study-hub ──
  authDomain:        "arrahman-study-hub.firebaseapp.com",
  projectId:         "arrahman-study-hub",
  storageBucket:     "arrahman-study-hub.appspot.com",

  // ── Optional: paste measurementId if you use Firebase Analytics ─
  // measurementId: "G-XXXXXXXXXX",
};
