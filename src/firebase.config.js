// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClxBpeuBxgkarQxO4d2WFj3n1I5TGQzB0",
  authDomain: "house-marketplace-29eaa.firebaseapp.com",
  projectId: "house-marketplace-29eaa",
  storageBucket: "house-marketplace-29eaa.appspot.com",
  messagingSenderId: "256824929097",
  appId: "1:256824929097:web:f2ad776a96001a753e4898",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
