// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnn143JJrNNOO6eVnSe30XoiTentNVf6Y",
  authDomain: "react-portfolio-priyanka.firebaseapp.com",
  projectId: "react-portfolio-priyanka",
  storageBucket: "react-portfolio-priyanka.appspot.com",
  messagingSenderId: "528334121526",
  appId: "1:528334121526:web:f7346322206fdc445b4697"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();