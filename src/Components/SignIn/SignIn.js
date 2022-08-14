import React from 'react'
import "./SignIn.scss"
import {signInWithGooglePopup, createUserDocumentFromAuth} from "../../Utils/Firebase";


const SignIn = () => {

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  }
  

  return (

    <div className='signincontainer'>
      <h3 className='signinheader'>Already a member? Sign in below</h3>
      <form className='signinform'>
        <label>Email</label>
        <input className='signininputs' />
        <label>Password</label>
        <input className='signininputs' />
        <button className='signinbutton'>Sign In</button>
        <button className='signingoogle' onClick={logGoogleUser}>Sign in with Google</button>
      </form>
    </div>

  )
}

export default SignIn