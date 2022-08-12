import {initializeApp} from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider)