import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "house-marketplace-app-d3fd8.firebaseapp.com",
  projectId: "house-marketplace-app-d3fd8",
  storageBucket: "house-marketplace-app-d3fd8.appspot.com",
  messagingSenderId: "478214508472",
  appId: "1:478214508472:web:a67b1c42d19b8fdf06c94d",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
