import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyClDlIEgOUVVAHINpQT22zOSSMbmu_5Dy8",
    authDomain: "clone-9ee43.firebaseapp.com",
    projectId: "clone-9ee43",
    storageBucket: "clone-9ee43.appspot.com",
    messagingSenderId: "412637174802",
    appId: "1:412637174802:web:8b903432fb1feb33688ccb",
    measurementId: "G-C9HFECYJE6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };