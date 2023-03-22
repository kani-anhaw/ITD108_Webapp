// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
console.log(app)