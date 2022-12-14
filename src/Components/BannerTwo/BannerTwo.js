import React from 'react'
import "./BannerTwo.scss"
import NikeFour from "../../Assets/Banners/4.jpeg"
import NikeFive from "../../Assets/Banners/5.jpeg"
import NikeSix from "../../Assets/Banners/6.jpeg"
import NikeBanner from "../../Assets/Banners/nike banner.jpeg"



const BannerTwo = () => {

  return (

    <div className='BannerTwo-Container'>
      <div className='nike-banner-container'> 
        <img className='nike-banner' src={NikeBanner} alt="shoes" />
        <h4 className='reseller'>Official Nike Reseller</h4>
      </div>
        <div className='three-color-images'>
            <img className='banner-two-images' src={NikeFour} alt="shoes" />
            <img className='banner-two-images' src={NikeFive} alt="shoes" />
            <img className='banner-two-images' src={NikeSix} alt="shoes" />
        </div>
    </div>

  )
}

export default BannerTwo