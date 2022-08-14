import React from 'react'
import "./Authentication.scss"
import SignIn from "../../Components/SignIn/SignIn"
import SignUp from '../../Components/SignUp/SignUp'

const Authentication = () => {

  return (

    <div>
        <SignUp />
        <SignIn /> 
    </div>

  )
}

export default Authentication