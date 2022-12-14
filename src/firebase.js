import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCSoAXXGk5oIl3eD1f7UntnnbiSE6YyosA",
    authDomain: "tinder-clone-486d2.firebaseapp.com",
    databaseURL: "https://tinder-clone-486d2.firebaseio.com",
    projectId: "tinder-clone-486d2",
    storageBucket: "tinder-clone-486d2.appspot.com",
    messagingSenderId: "771206807629",
    appId: "1:771206807629:web:320c4cc015d611b6b79c04",
    measurementId: "G-106PXP6GFT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;