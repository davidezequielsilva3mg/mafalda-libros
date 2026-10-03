import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCx4Ip78dF256cFuOqs4JpHyCdd4cCwzZ8",
  authDomain: "mafaldalibrosvc.firebaseapp.com",
  projectId: "mafaldalibrosvc",
  storageBucket: "mafaldalibrosvc.firebasestorage.app",
  messagingSenderId: "327638875278",
  appId: "1:327638875278:web:a25a6dd8d6cc9843fd1ddf",
  measurementId: "G-LB3ZWGCYP5"
};

const app = initializeApp(firebaseConfig);
export const db   = getFirestore(app);
export const auth = getAuth(app);
