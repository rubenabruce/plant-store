import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

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

firebase.initializeApp(config);

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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log('collectionRef', collectionRef)
  console.log('objects to add', objectsToAdd)

  const batch = firestore.batch();

  // objectsToAdd.forEach(obj => {
  const newDocRef = collectionRef.doc(objectsToAdd.title);
  batch.set(newDocRef, objectsToAdd);
  console.log('newDocRef', newDocRef);
  // });
  
  return await batch.commit();
};

export const addItemToCollection = (item) => {

  firestore.collection("collections").doc("Plants").update({
    items: firebase.firestore.FieldValue.arrayUnion(item)
  })
  .then(docRef => {
    console.log('Document written with ID: ', docRef)
  })
  .catch(error => {
    console.error('Error adding document: ', error)
  })
  
}

export const addImagesToStorage = (images) => {
  const storageRef = storage.ref();
  console.log(images.imageFiles)
  // images.forEach is not a function apparently      
  Array.from(images.imageFiles).forEach(image => {
    let uploadTask = storageRef.child(image.name).put(image);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done.');
      },
      (error) => {
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            console.log(error);
            break;
          case 'storage/canceled':
            // User canceled the upload
            console.log(error);
            break;
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            console.log(error);
            break;
          default:
            console.log(error);
            break;
        }
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadUrl) {
          console.log('File available at ', downloadUrl)
        });
      })  
  });
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const downloadFiles = async (imageRef) => {
  const storageRef = storage.ref();
  // console.log('storageRef = ', storageRef)
  // console.log('storageRef child = ', storageRef.child(imageRef));
  return await storageRef.child(imageRef).getDownloadURL()
    .then((url) => {
      console.log('url', url);
      // imageUrlRef.current = imageUrl;
      return url;
    })
    .catch((error) => {
      switch (error.code) {
        case 'storage/object-not-found':
          // File doesn't exist
          console.log('Error Code:', error.code);
          break;
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          console.log('Error Code:', error.code);
          break;
        case 'storage/canceled':
          // User canceled the upload
          console.log('Error Code:', error.code);
          break;
        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          console.log('Error Code:', error.code);
          break;
        default:
          break;
      }
    })
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage  = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;