// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZLwBin3bJwm13zdnEPXhPV2flQGKmuDA",
  authDomain: "otp-auth-39d1f.firebaseapp.com",
  projectId: "otp-auth-39d1f",
  storageBucket: "otp-auth-39d1f.appspot.com",
  messagingSenderId: "635764609666",
  appId: "1:635764609666:web:7c27d7e411f52c41121a9b",
  measurementId: "G-VX3D261T09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);