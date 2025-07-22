// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkQhPve2ybGzxbWoSBrkhG2RKsNGxw7G4",
  authDomain: "chronoverse-47506.firebaseapp.com",
  projectId: "chronoverse-47506",
  storageBucket: "chronoverse-47506.appspot.com", // <<== fixed here
  messagingSenderId: "679146384219",
  appId: "1:679146384219:web:7ab50d62baf3d8f1e8087e",
  measurementId: "G-YRF6F2HGN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore DB
export const db = getFirestore(app);

// Storage
export const storage = getStorage(app);
