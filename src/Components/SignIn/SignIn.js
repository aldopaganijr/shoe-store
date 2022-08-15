import React, {useState} from 'react'
import "./SignIn.scss"
import {signInWithGooglePopup, signInAuthUserWithEmailAndPassword} from "../../Utils/Firebase";

// default form fields object for sign in page
const defaultFormFields = {
  email: '',
  password: '',
}

const SignIn = () => {

  // use state for setting form fields to start at defualt values and changed.
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // function to clear form fields after sign in.
  const clearFormField = () => {
    setFormFields(defaultFormFields)
  }

  // function to sign in with google popup from firebase.js
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  }

  // after form is submitted this function will dictate whats next.
  const handleSubmit = async (event) => {
    event.preventDefault();

    // This try block will execute the sign in using the function from firebase.js
    try {
      const {user} = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      clearFormField();

    // this error block will run two different error responses then run the generic console.log
   } catch (error){
      switch(error.code){
        case "auth/wrong-password":
          alert('Incorrect password, please try again!');
          break;
        case "auth/user-not-found":
          alert('No user associated with this email');
         break;
      default:
      console.log(error)

   }
  }
}
  // This handle change function will actually set form inputs to state.
  const handleChange = (event) => {
    const {name, value} = event.target

    setFormFields({...formFields, [name]: value})
  }

  
  

  return (

    <div className='signincontainer'>
      <h3 className='signinheader'>Already a member? Sign in below</h3>
      <form onSubmit={handleSubmit} className='signinform'>
        <label>Email</label>
        <input className='signininputs' onChange={handleChange} name="email" value={email}/>
        <label>Password</label>
        <input className='signininputs' onChange={handleChange} name="password" value={password} />
        <button className='signinbutton'>Sign In</button>
        <button className='signingoogle' type='button' onClick={signInWithGoogle}>Sign in with Google</button>
      </form>
    </div>

  )
}

export default SignIn