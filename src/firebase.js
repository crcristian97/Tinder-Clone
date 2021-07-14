// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA790AG8B2_ouyLB9P2QYGRbUGsvwjBajQ",
    authDomain: "tinder-firebase-clone-8cbb9.firebaseapp.com",
    projectId: "tinder-firebase-clone-8cbb9",
    storageBucket: "tinder-firebase-clone-8cbb9.appspot.com",
    messagingSenderId: "1052114287504",
    appId: "1:1052114287504:web:5b7df8ce8d39cb073fd115",
    measurementId: "G-VXHLRBW175"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;