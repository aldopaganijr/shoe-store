import React from 'react'
import "./SignIn.scss"
import {signInWithGooglePopup, createUserDocumentFromAuth} from "../../Utils/Firebase";

const SignIn = () => {

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (

    <div>
      <button on onClick={logGoogleUser}>Sign in with Google</button>
    </div>

  )
}

export default SignIn