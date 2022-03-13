import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDIh7zLXkkO69mylH58zDlHanqr0kciwnE",
  authDomain: "heroes-login-1ccc9.firebaseapp.com",
  projectId: "heroes-login-1ccc9",
  storageBucket: "heroes-login-1ccc9.appspot.com",
  messagingSenderId: "696535018178",
  appId: "1:696535018178:web:91853df0c0feb00b80a95b",
  measurementId: "G-9M5YX6M415"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();

export {
  analytics,
  db,
  googleAuthProvider
}