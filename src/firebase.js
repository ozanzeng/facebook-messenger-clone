import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyD4Auii995U2fL61OxkqVeZorHHsR7hsvA",
  authDomain: "facebook-messenger-clone-6cc24.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-6cc24.firebaseio.com",
  projectId: "facebook-messenger-clone-6cc24",
  storageBucket: "facebook-messenger-clone-6cc24.appspot.com",
  messagingSenderId: "351090250836",
  appId: "1:351090250836:web:d8a1f38020adee8a0c49c1",
  measurementId: "G-FZY580V87G"
});

const db = firebaseApp.firestore();

export default db;