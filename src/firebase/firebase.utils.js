import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC3M6q1AQ97oyDkabn-evagSF-G7v98Anc",
  authDomain: "midgar-shop-db.firebaseapp.com",
  databaseURL: "https://midgar-shop-db.firebaseio.com",
  projectId: "midgar-shop-db",
  storageBucket: "midgar-shop-db.appspot.com",
  messagingSenderId: "574827557776",
  appId: "1:574827557776:web:2d6d38822962667f5e7915",
  measurementId: "G-MY072GVZ51"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
