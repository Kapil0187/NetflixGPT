// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkPiacHmi1XSjZZtARVDRXd_sK1aMXmi8",
  authDomain: "netflixgpt-36928.firebaseapp.com",
  projectId: "netflixgpt-36928",
  storageBucket: "netflixgpt-36928.appspot.com",
  messagingSenderId: "710494715942",
  appId: "1:710494715942:web:db27970711febc391726e7",
  measurementId: "G-MNE9W62PWK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();