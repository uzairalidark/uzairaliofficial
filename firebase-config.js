/* ============================================================
   FIREBASE CONFIG — paste your real values from:
   Firebase Console → Project Settings → Your apps → Web app
   These values are SAFE to expose publicly (they identify your
   project only — actual security comes from Firestore Rules +
   Authentication, set up in the Firebase Console).
   ============================================================ */
const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "PASTE_YOUR_PROJECT.firebaseapp.com",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_PROJECT.appspot.com",
  messagingSenderId: "PASTE_YOUR_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID"
};

/* Only this email is allowed to publish posts.
   Set this to the email you used when creating your
   Firebase Authentication user. */
const ADMIN_EMAIL = "PASTE_YOUR_ADMIN_EMAIL@example.com";
