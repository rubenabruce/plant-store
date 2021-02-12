import React, { useState, useEffect, useContext, createContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";

import { auth, createUserProfileDocument, signInWithGoogle } from '../firebase/firebase.utils';

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [currentUser, setCurrentUser] = useState(null);
  
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        setCurrentUser(response.user);
        return response.user;
      })
      .catch(err => {
        console.error(err);
      });
  };
  
  const signinwithgoogle = () => {
    return signInWithGoogle()
    .then(response => {
      setCurrentUser(response.user);
      return response.user;
    })
    .catch(err => {
      console.error(err);
    });
  }

  const signup = (email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        setCurrentUser(response.user);
        return response.user;
      })
      .catch(err => {
        console.error(err);
      });
  };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setCurrentUser(false);
      });
  };

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribeFromAuth();
  }, []);
  
  // Return the user object and auth methods
  return {
    currentUser,
    signin,
    signup,
    signout,
    signinwithgoogle
  };
}
