import firebase from "firebase/app";
import 'firebase/database';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyCW5toNVqLiiC_EMiSj6g19uh82hAoWCGQ",
    authDomain: "nasalikes-3a078.firebaseapp.com",
    projectId: "nasalikes-3a078",
    storageBucket: "nasalikes-3a078.appspot.com",
    messagingSenderId: "647791054381",
    appId: "1:647791054381:web:3ac44bcbb82b0e45a932a4",
    measurementId: "G-NNWQNT82SZ"
  };

const app = initializeApp(firebaseConfig);
  

export default firebase