

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAmcVWoiOB3esn01BajQgz2B5zCb-KvSvA",
  authDomain: "itd108-67333.firebaseapp.com",
  projectId: "itd108-67333",
  storageBucket: "itd108-67333.appspot.com",
  messagingSenderId: "862622261090",
  appId: "1:862622261090:web:627488e7c4fdbc5b40963b",
  measurementId: "G-6ENJ0LFSZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
console.log(app)