import React from 'react'
import "./Promo.scss"
import { Link } from 'react-router-dom'


const Promo = () => {

  return (
    <div className='promo-container'>
        <h3 className='signup-text'>Free Shipping + Returns, Free Membership, Exclusive Products</h3>
        <Link className='promo-link' to="/Authentication">
            Join Now
        </Link>
    </div>
  )
}

export default Promo