
import { initializeApp,  } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC2wMszTVPi6pZXp1JoTLQxbwXWdKrNedA",
  authDomain: "projectam-ba0d6.firebaseapp.com",
  databaseURL: "https://projectam-ba0d6-default-rtdb.firebaseio.com",
  projectId: "projectam-ba0d6",
  storageBucket: "projectam-ba0d6.appspot.com",
  messagingSenderId: "527193575157",
  appId: "1:527193575157:web:b0ba6e954227cf30f53fbc",
  measurementId: "G-B891GM3FYN"
  };

 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db = getFirestore(app);
