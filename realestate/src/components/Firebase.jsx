// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore (Database)
import { getAuth } from "firebase/auth"; // Authentication
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWezpo9p2eNkUKO5S0kcmnowxJcBnqqVw",
  authDomain: "realestate-a1715.firebaseapp.com",
  projectId: "realestate-a1715",
  storageBucket: "realestate-a1715.appspot.com", // Corrected URL for storage
  messagingSenderId: "607505659117",
  appId: "1:607505659117:web:d64bc7ff37ac72362108e4",
  measurementId: "G-CM0SR1FGTY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Optional
const db = getFirestore(app); // Firestore Database
const auth = getAuth(app); // Firebase Authentication

export { app, db, auth }; // Export for use in other files
