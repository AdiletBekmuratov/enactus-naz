import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBABwiUIPtTIqSMAGnqL8b2wdSF_X9dEfY",
  authDomain: "nutri-pro.firebaseapp.com",
  databaseURL:
    "https://nutri-pro-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nutri-pro",
  storageBucket: "nutri-pro.appspot.com",
  messagingSenderId: "676581960594",
  appId: "1:676581960594:web:1e6254e6c8fe86fad1ef4b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
