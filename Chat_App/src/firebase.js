// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhTrhm-0IhsjdVN4DJCyh4Czrm4vkYrWM",
  authDomain: "messanger-4dc47.firebaseapp.com",
  projectId: "messanger-4dc47",
  storageBucket: "messanger-4dc47.firebasestorage.app",
  messagingSenderId: "499327381355",
  appId: "1:499327381355:web:48b4dc8f5631926a44262e",
  measurementId: "G-N6XVZPSRB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);