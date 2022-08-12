import React, { Fragment } from 'react'
import "./Navigation.scss"
import { Outlet, Link } from 'react-router-dom'
import {GiFireZone} from  "react-icons/gi"
import {FaSignInAlt} from  "react-icons/fa"
import Promo from  "../../Components/Promo/Promo"

const Navigation = () => {

  return (
    <Fragment>
      <div className='navigation-container'>
          <div className='head-links'>
            <Link className='logo' to="/">
              <GiFireZone />
            </Link>
            <Link className='top-link' to="/Authentication">
              <FaSignInAlt />
            </Link>
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