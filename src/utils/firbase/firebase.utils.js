import { initializeApp } from "firebase/app";

import {
  getAuth,
  // signInWithRedirect,
  // signInWithPopup,
  // GoogleAuthProvider,
  createUserWithEmailAndPassword
  // signInWithEmailAndPassword,
  // signOut,
  // onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQ-Upb9k9nGAmKhjjK-wydAzzfshzwLsM",
  authDomain: "open-education-4ddd0.firebaseapp.com",
  projectId: "open-education-4ddd0",
  storageBucket: "open-education-4ddd0.appspot.com",
  messagingSenderId: "35945064281",
  appId: "1:35945064281:web:a4e28c357b2215f2988e48",
  measurementId: "G-CSVNMQ77J4"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth();


export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};


