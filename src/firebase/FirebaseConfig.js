// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}  from "firebase/auth"
import  {getFirestore} from "firebase/firestore"
import {getDatabase} from "firebase/database"
import {getStorage} from "firebase/storage"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpl7Q_ie7NCdyfSy_xQKnk_Pb0a9X5fHE",
  authDomain: "alpha-gen-uprising.firebaseapp.com",
  projectId: "alpha-gen-uprising",
  storageBucket: "alpha-gen-uprising.appspot.com",
  messagingSenderId: "770042026072",
  appId: "1:770042026072:web:e5854b12d776781f97922d"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_FIRESTORE = getFirestore(FIREBASE_APP);
export const FIREBASE_REALTIME_DB = getDatabase(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);
