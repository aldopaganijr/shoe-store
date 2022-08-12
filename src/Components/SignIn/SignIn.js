import React from 'react'
import "./SignIn.scss"
import {signInWithGooglePopup} from "../../Utils/Firebase";

const SignIn = () => {

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  }

  return (

    <div>
      <button on onClick={logGoogleUser}>Sign in with Google</button>
    </div>

  )
}

export default SignIn