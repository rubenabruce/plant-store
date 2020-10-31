import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCCylGC4ZG4B0XkxWPZ0VFE7tpPA2OHajA",
  authDomain: "ninas-plants.firebaseapp.com",
  databaseURL: "https://ninas-plants.firebaseio.com",
  projectId: "ninas-plants",
  storageBucket: "ninas-plants.appspot.com",
  messagingSenderId: "872086073295",
  appId: "1:872086073295:web:36650e400edeb5513e2cba",
  measurementId: "G-8VPC9F3HBZ"
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
        ...additionalData
      })
    } catch (error) {
      console.log(`error creating user: ${error.message}`);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;