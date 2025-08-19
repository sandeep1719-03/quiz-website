import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDZWch8bUUF164Red-MoQCOqgPu-PHHSGU",
  authDomain: "jee-quiz-71912.firebaseapp.com",
  projectId: "jee-quiz-71912",
  storageBucket: "jee-quiz-71912.firebasestorage.app",
  messagingSenderId: "212496360778",
  appId: "1:212496360778:web:1e148d744568160bd98db3",
  measurementId: "G-GDCG60YF22"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
