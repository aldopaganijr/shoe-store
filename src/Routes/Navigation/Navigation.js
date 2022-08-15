import React, { Fragment, useContext } from 'react'
import {UserContext} from "../../Contexts/Users"
import "./Navigation.scss"
import { Outlet, Link } from 'react-router-dom'
import {GiFireZone} from  "react-icons/gi"
import {GoSignIn} from  "react-icons/go"
import {GoSignOut} from  "react-icons/go"
import Promo from  "../../Components/Promo/Promo"
import {signOutUser} from "../../Utils/Firebase"

const Navigation = () => {
  
  const {currentUser, setCurrentUser} = useContext(UserContext)

  // function for signing out user related to firebase.js
  const signOutHandler = async () => {
    const res = await signOutUser();
    setCurrentUser(null)
  }

  return (
    <Fragment>
      <div className='navigation-container'>
          <div className='head-links'>
            <Link className='logo' to="/">
              <GiFireZone />
            </Link>

            {currentUser ? (
              <span className='top-link' onClick={signOutHandler}><GoSignOut /></span>
            ):(
              <Link className='top-link' to="/Authentication">
                <GoSignIn />
              </Link>
            )}
          </div>
          <div className='main-links'>
            <Link className='links' to="/NewArrivals">
              New Arrivals
            </Link>
            <Link className='links' to="/Mens">
              Men
            </Link>
            <Link className='links' to="/Women">
              Women
            </Link>
            <Link className='links' to="/Kids">
              Kids
            </Link>
            <Link className='links' to="/Sale">
              Sale
            </Link>
          </div>
      </div>
      <Promo />
      <Outlet />
    </Fragment>
  )
}

export default Navigation