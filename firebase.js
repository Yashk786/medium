// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWe6oF6AM21YVhi5Xyh2oRHaY8p57l2fQ",
  authDomain: "medium-clone-90a36.firebaseapp.com",
  projectId: "medium-clone-90a36",
  storageBucket: "medium-clone-90a36.appspot.com",
  messagingSenderId: "425714990279",
  appId: "1:425714990279:web:34617207fb167f1f4092e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { db, auth };
