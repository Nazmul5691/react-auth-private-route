// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeMnftT0HXopOVOL0lrGmrdOYUex7BLQ4",
  authDomain: "react-auth-private-route-a0515.firebaseapp.com",
  projectId: "react-auth-private-route-a0515",
  storageBucket: "react-auth-private-route-a0515.firebasestorage.app",
  messagingSenderId: "735996394545",
  appId: "1:735996394545:web:928fc4d789eb4279362910"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);