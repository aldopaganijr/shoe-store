import React from 'react'
import "./BannerOne.scss"
import NikeOne from "../../Assets/1.jpeg"
import NikeTwo from "../../Assets/2.jpeg"
import NikeThree from "../../Assets/3.jpeg"

const BannerOne = () => {

  return (

    <div className='BannerOne-Container'>
        <img className='banner-one-images' src={NikeOne} alt="shoes" />
        <img className='banner-one-images' src={NikeThree} alt="shoes" />
        <img className='banner-one-images' src={NikeTwo} alt="shoes" />
    </div>

  )
}

export default BannerOne