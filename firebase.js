// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-storage.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZWch8bUUF164Red-MoQCOqgPu-PHHSGU",
  authDomain: "jee-quiz-71912.firebaseapp.com",
  projectId: "jee-quiz-71912",
  storageBucket: "jee-quiz-71912.appspot.com",
  messagingSenderId: "212496360778",
  appId: "1:212496360778:web:1e148d744568160bd98db3",
  measurementId: "G-GDCG60YF22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firestore and Storage
export const db = getFirestore(app);
export const storage = getStorage(app);
