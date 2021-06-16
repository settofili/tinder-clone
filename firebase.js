import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmBF3niHUey7fBML5EQ893yE08IcTZBn0",
    authDomain: "tinder-clone-3b1c4.firebaseapp.com",
    projectId: "tinder-clone-3b1c4",
    storageBucket: "tinder-clone-3b1c4.appspot.com",
    messagingSenderId: "1090020671250",
    appId: "1:1090020671250:web:ee17117fb1d4b6bdf67dcb",
    measurementId: "G-D9XJ4MJPX4"
  };

  const firebaseApp = firebase.initializeApp (firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;