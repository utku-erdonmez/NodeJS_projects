// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {firebaseKey} from './env.js'
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const key=firebaseKey
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app); 

export const auth=getAuth()
export const provider=new GoogleAuthProvider();
export default app;