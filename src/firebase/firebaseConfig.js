// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDkQhPve2ybGzxbWoSBrkhG2RKsNGxw7G4',
  authDomain: 'chronoverse-47506.firebaseapp.com',
  projectId: 'chronoverse-47506',
  storageBucket: 'chronoverse-47506.appspot.com',
  messagingSenderId: '679146384219',
  appId: '1:679146384219:web:55a8a5a8503979c5e8087e',
  measurementId: 'G-2WSQJYQ7DJ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export default app
