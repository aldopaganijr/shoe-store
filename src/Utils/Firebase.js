// import Firebase |  import Auth & DB needs
import {initializeApp} from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc, collection} from "firebase/firestore"

// Data from firebase account to link to webpage
const firebaseConfig = {
    apiKey: "AIzaSyAKc4VEDZeaw4rgCdgUpgbMF99wzYVIkOw",
    authDomain: "shoe-store-5827c.firebaseapp.com",
    projectId: "shoe-store-5827c",
    storageBucket: "shoe-store-5827c.appspot.com",
    messagingSenderId: "569480654763",
    appId: "1:569480654763:web:640add3d181ef1975fecee"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  })

  // Creating Authorization with GoogleSignIn
  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

  // Creating database
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef)

    // Checking if user collection exists
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    // Creating user collection, if it does not exist. Only runs if it does not exist 
    if(!userSnapshot.exists()){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

    // Setting the user information with setDoc with the following object structure below. Catching the error incase it fails
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        });

      }catch(error){
        console.log('error creating the user',error.message)
      }
    }

    // if user doc does exist, return userDocRef.
    return userDocRef;
  }