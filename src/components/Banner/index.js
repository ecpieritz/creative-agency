import React from 'react'
import rightArrow from '../../assets/img/Icon/ca-icon__white-right-arrow.png'

const Banner = () => {
  return (
    <div className='ca-banner' id='ca-banner'>
      <div className='container-fluid'>
        <div className='ca-banner__texts'>
          <h1>
            Make your business<br/><span className='ca-colors__text__yellow'>more powerful<br/></span> with us
          </h1>
          <p>We provide various services to make your business grow and get bigger. Your satisfaction is our first priority.</p>
          <button className='btn btn-purple-bg'>
            <a href="#ca-services">Get Started <img src={rightArrow} alt="right arrow" /></a>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Banner
