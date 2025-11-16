// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh2QRMApksuU-Bk3Q7w2I0z9phwSxvk-Y",
  authDomain: "prepzo-3.firebaseapp.com",
  projectId: "prepzo-3",
  storageBucket: "prepzo-3.firebasestorage.app",
  messagingSenderId: "40802163048",
  appId: "1:40802163048:web:e2d632e4231c08c88b5edd",
  measurementId: "G-CGF8NNFGWG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
