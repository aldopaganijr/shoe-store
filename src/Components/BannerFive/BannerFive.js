import React from 'react'
import "./BannerFive.scss"
import Kids from "../../Assets/kids.jpeg";

const BannerFive = () => {

  return (

    <div className='bannerFive-container'>
        <img className='bannerFiveimg' src={Kids} alt="banner" />
    </div>

  )
}

export default BannerFive