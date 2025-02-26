    // Import the functions you need from the SDKs you need
    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr6_KlFbeQ0b9HeR4MYUSC4A5nixj47Wg",
  authDomain: "applican-c0822.firebaseapp.com",
  projectId: "applican-c0822",
  storageBucket: "applican-c0822.appspot.com",
  messagingSenderId: "164999455809",
  appId: "1:164999455809:web:81c56c814848e2c736d2c0",
  measurementId: "G-TSPHPQHWNX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


// ✅ Initialize Analytics (only in the browser)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}


export { db,analytics };