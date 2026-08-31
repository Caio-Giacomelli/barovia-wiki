// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsbyAHIVb9ccZY9ZwT2Zc93wEHI92A1vU",
  authDomain: "barovia-wiki.firebaseapp.com",
  projectId: "barovia-wiki",
  storageBucket: "barovia-wiki.firebasestorage.app",
  messagingSenderId: "319336145382",
  appId: "1:319336145382:web:f9c21513535135e9ee3627",
  measurementId: "G-9DS94W54MN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);