// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmJVQOv_msbujjU1uUOgZxDQxpUqSaUnQ",
  authDomain: "notion-clone-e8e63.firebaseapp.com",
  projectId: "notion-clone-e8e63",
  storageBucket: "notion-clone-e8e63.firebasestorage.app",
  messagingSenderId: "503384287255",
  appId: "1:503384287255:web:96d3995cb3a85fa1ae1452",
  measurementId: "G-LGT0RVCZLT"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);


export { db };