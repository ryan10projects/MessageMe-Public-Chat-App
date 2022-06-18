import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxJIOgZ8kmw3QKwrN5SLiyjeCwKR57rjc",
    authDomain: "chat-app-3a1ab.firebaseapp.com",
    projectId: "chat-app-3a1ab",
    storageBucket: "chat-app-3a1ab.appspot.com",
    messagingSenderId: "219485355770",
    appId: "1:219485355770:web:44ce8a28e48b7f7f6c9343",
    measurementId: "G-SXZ652MGKZ"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const firestore = getFirestore(app);  

export { auth, firestore, firebase, db };

    
