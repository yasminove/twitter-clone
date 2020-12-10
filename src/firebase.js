import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCVJA8pICeHFWt7HZU7jgimKu9O9p-25kI",
    authDomain: "twitter-clone-aa174.firebaseapp.com",
    projectId: "twitter-clone-aa174",
    storageBucket: "twitter-clone-aa174.appspot.com",
    messagingSenderId: "150117209301",
    appId: "1:150117209301:web:11b742db420c42f7f6be5c",
    measurementId: "G-N05SGC1SLW"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const  db = firebaseApp.firestore(); 

export default db;