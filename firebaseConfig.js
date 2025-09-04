// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3_brMfNjKBzRr159gw2PMYuv8d_53h5M",
  authDomain: "jvl-goal-tracker.firebaseapp.com",
  projectId: "jvl-goal-tracker",
  storageBucket: "jvl-goal-tracker.firebasestorage.app",
  messagingSenderId: "514661866419",
  appId: "1:514661866419:web:7d57a3156b53bd42b449c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)