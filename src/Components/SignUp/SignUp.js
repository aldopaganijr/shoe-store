
import "./SignUp.scss"
import status from "../../Assets/Misc/STATUS_logo_black.3c28c69a.svg"
import { useState } from 'react'
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../Utils/Firebase"

// creating a form fields object to simplify state usage.
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUp = () => {

// Use state to manipulate formfields
const [formFields, setFormFields] = useState(defaultFormFields);

// destructure value of defaultformfields
const {displayName, email, password, confirmPassword} = formFields;

// function to reset form fields to original object.
const resetFormFields = () => {
  setFormFields(defaultFormFields);
}

// function
const handleSubmit = async (event) => {
  event.preventDefault();

  // This is the check to verify that passwords match!
  if(password !== confirmPassword){
    return;
  }
  
  // process to register user once passwords match
  try{
    const {user} = await createAuthUserWithEmailAndPassword(email, password)

    // This will create the displayName portion of our user info!
    await createUserDocumentFromAuth(user, {displayName})

    resetFormFields();

    // Are catch will take care of any errors incase of sign up failure.
  } catch(error) {
    if(error.code === 'auth/email-already-in-use'){
      alert('can not create user, email already in use')
    } else{
      console.log(error)
    }
  }
  
}

// handle change function to setstate to current user info on each deconstructed input.
const handleChange = (event) => {
  const {name, value} = event.target;

  setFormFields({...formFields, [name]: value})
}

  return (

    <div className='signupformcontainer'>
        <img className='svg' src={status} alt="status" />
        <h2 className='join-now'>JOIN NOW</h2>
        <h4>Earn 10 points for every $1 you spend.</h4>
        <h5>Get Points. Gain Access. Boost your STATUS.</h5>
        <h5 className='statusbio'>Create an account to earn STATUS</h5>
        <h5>points and check out faster.</h5>
        <h3 className='signupheader'>Not a member yet? Sign up below</h3>
        <form className='signupform' onSubmit={handleSubmit}>
            <label>Display Name</label>
            <input className='form-inputs' type="text" required onChange={handleChange} name="displayName" value={displayName}  />
            <label>Email</label>
            <input className='form-inputs' type="email" required onChange={handleChange} name="email" value={email} />
            <label>Password</label>
            <input className='form-inputs' type="password" required onChange={handleChange} name="password" value={password} />
            <label>Confirm Password</label>
            <input className='form-inputs' type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
            <button className='signupbutton' type='submit'>Submit</button>
        </form>
    </div>

  )
}

export default SignUp