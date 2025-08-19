// Firebase SDK imports
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDZWch8bUUF164Red-MoQCOqgPu-PHHSGU",
  authDomain: "jee-quiz-71912.firebaseapp.com",
  projectId: "jee-quiz-71912",
  storageBucket: "jee-quiz-71912.firebasestorage.app",
  messagingSenderId: "212496360778",
  appId: "1:212496360778:web:1e148d744568160bd98db3",
  measurementId: "G-GDCG60YF22"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
