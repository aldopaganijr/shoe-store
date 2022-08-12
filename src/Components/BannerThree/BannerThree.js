import React from 'react'
import "./BannerThree.scss"
import Mens from "../../Assets/Banners/mens.jpeg"

const BannerThree = () => {

  return (

    <div className='BannerThree-container'>
        <img className='bannerthreeimg' src={Mens} alt="banner" />
    </div>

  )
}

export default BannerThree