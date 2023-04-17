import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
	apiKey: "AIzaSyCQ-Upb9k9nGAmKhjjK-wydAzzfshzwLsM",
	authDomain: "open-education-4ddd0.firebaseapp.com",
	projectId: "open-education-4ddd0",
	storageBucket: "open-education-4ddd0.appspot.com",
	messagingSenderId: "35945064281",
	appId: "1:35945064281:web:a4e28c357b2215f2988e48",
	measurementId: "G-CSVNMQ77J4"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};