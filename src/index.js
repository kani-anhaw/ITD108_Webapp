

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, connectFirestoreEmulator, query, getDocs } from "firebase/firestore";


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
// const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();
connectFirestoreEmulator(db, 'localhost', 8080);
console.log(app)

// const saveBtn = document.querySelector(".save")
// saveBtn.addEventListener("click", async () =>{
// try {
//   const collectionRef = collection(db, "user")
//   const newUser = await addDoc(collectionRef,{
//     name: "Felomae",
//     surname: "Anhaw",
//     email: "felomae.anhaw@gmail.com"
//   })
//   console.log(`Create new user: ${newUser.id}`)
// } catch (error) {
//   console.log(error)
// }
// })

// const getDataBtn = document.querySelector(".get-data")
// getDataBtn.addEventListener("click", async () =>{
//   const q = query(collection(db,"user"))
//   const user = await getDocs(q)
//   user.forEach((user) => {
//     console.log(user.data())
//   })
// })