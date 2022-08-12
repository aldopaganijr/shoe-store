import React from 'react'
import "./BannerFour.scss"
import Womens from "../../Assets/womens.jpeg"
const BannerFour = () => {

  return (

    <div className='BannerFour-container'>
        <img className='womensBanner' src={Womens} alt="banner" />
    </div>

  )
}

export default BannerFour