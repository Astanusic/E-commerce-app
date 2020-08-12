import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBfSGbiy8jV_sj12DJMYlSxjb77tREvY9o",
  authDomain: "ecommerce-7b91a.firebaseapp.com",
  databaseURL: "https://ecommerce-7b91a.firebaseio.com",
  projectId: "ecommerce-7b91a",
  storageBucket: "ecommerce-7b91a.appspot.com",
  messagingSenderId: "124630410264",
  appId: "1:124630410264:web:afe4ac67dfdeb4bf31cf6d",
  measurementId: "G-QL7B49PBGB",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
