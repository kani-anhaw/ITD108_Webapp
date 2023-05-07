

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, addDoc, connectFirestoreEmulator, query, getDocs } from "firebase/firestore";
import { getStorage, connectStorageEmulator, ref, uploadBytes, uploadString, getDownloadUrl} from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyAmcVWoiOB3esn01BajQgz2B5zCb-KvSvA",
  authDomain: "itd108-67333.firebaseapp.com",
  projectId: "itd108-67333",
  storageBucket: "itd108-67333.appspot.com",
  // storageBucket: "learning-cloud-storage",
  messagingSenderId: "862622261090",
  appId: "1:862622261090:web:627488e7c4fdbc5b40963b",
  measurementId: "G-6ENJ0LFSZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore();
connectFirestoreEmulator(db, 'localhost', 8080);
const storage = getStorage();
connectStorageEmulator(storage, "localhost", 9199)
console.log(app)