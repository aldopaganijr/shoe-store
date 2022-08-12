import React, { Fragment } from 'react'
import "./Navigation.scss"
import { Outlet, Link } from 'react-router-dom'

const Navigation = () => {

  return (
    <Fragment>
      <div className='navigation-conatiner'>
          <div className='head-links'>
            <Link className='top-link' to="/">
              Home
            </Link>
            <Link className='top-link' to="/Authentication">
              Sign In
            </Link>
          </div>
          <div className='main-links'>
            <Link className='links' to="/NewArrivals">
              New Arrivals
            </Link>
            <Link className='links' to="/Mens">
              Mens
            </Link>
            <Link className='links' to="/Women">
              Womens
            </Link>
            <Link className='links' to="/Kids">
              Kids
            </Link>
            <Link className='links' to="/Sale">
              Sale
            </Link>
          </div>

      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation