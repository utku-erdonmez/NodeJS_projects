import { initializeApp } from "firebase/app";
import {firebaseKey} from './env.js'
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const key=firebaseKey
const firebaseConfig = {
  apiKey:key,
  authDomain: "test-47e8e.firebaseapp.com",
  projectId: "test-47e8e",
  storageBucket: "test-47e8e.appspot.com",
  messagingSenderId: "578665579195",
  appId: "1:578665579195:web:ef05f449a9166ca6d79f9e",
  measurementId: "G-YS81SGJXMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth()
export const provider=new GoogleAuthProvider();
export default app;