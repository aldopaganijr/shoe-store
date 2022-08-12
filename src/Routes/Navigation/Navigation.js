import React, { Fragment } from 'react'
import "./Navigation.scss"
import { Outlet, Link } from 'react-router-dom'

const Navigation = () => {

  return (
    <Fragment>
      <div className='navigation-conatiner'>
          <Link className='links' to="/">
            Home
          </Link>
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
      <Outlet />
    </Fragment>
  )
}

export default Navigation