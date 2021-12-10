import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyC6R7dl8LPEgLWgjLh6Kqh4vUU9Aa5O97o",
  authDomain: "netflix-build-15f4f.firebaseapp.com",
  projectId: "netflix-build-15f4f",
  storageBucket: "netflix-build-15f4f.appspot.com",
  messagingSenderId: "841507581172",
  appId: "1:841507581172:web:36a03076348c732d2ec2a1"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export {auth};
  export default db;