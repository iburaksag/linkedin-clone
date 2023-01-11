import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtrh1w3W7ro4NTemua0Vpg03e3Qzx-09c",
  authDomain: "linkedin-clone-7d242.firebaseapp.com",
  projectId: "linkedin-clone-7d242",
  storageBucket: "linkedin-clone-7d242.appspot.com",
  messagingSenderId: "986479711618",
  appId: "1:986479711618:web:3fae3f70d3837a7600ab9b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
