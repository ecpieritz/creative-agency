import React from 'react'
import Titles from '../Titles'

import amazon from '../../assets/img/customers/ca-customers__amazon.png'
import jeep from '../../assets/img/customers/ca-customers__jeep.png'
import areem from '../../assets/img/customers/ca-customers__areem.png'
import hubspot from '../../assets/img/customers/ca-customers__hubspot.png'
import jquery from '../../assets/img/customers/ca-customers__jquery.png'
import canon from '../../assets/img/customers/ca-customers__canon.png'
import fedex from '../../assets/img/customers/ca-customers__fedex.png'
import bitcoin from '../../assets/img/customers/ca-customers__bitcoin.png'
import pirelli from '../../assets/img/customers/ca-customers__pirelli.png'
import philips from '../../assets/img/customers/ca-customers__philips.png'
import marvel from '../../assets/img/customers/ca-customers__marvel.png'
import milhas from '../../assets/img/customers/ca-customers__123milhas.png'

const Customers = () => {
  return (
    <section className='ca-customers section' id='ca-customers'>
      <div className='container-fluid'>
        <Titles subtitle='Some of Our Great Customers' title="Some of the companies we have worked with" />
        
        <div className='row'>
          <div className='col-lg-2 col-md-3 col-6'>
            <img src={amazon} alt="" />
          </div>

          <div className='col-lg-2 col-md-3 col-6'>
            <img src={jeep} alt="" />
          </div>

          <div className='col-lg-2 col-md-3 col-6'>
            <img src={areem} alt="" />
          </div>

          <div className='col-lg-2 col-md-3 col-6'>
            <img src={hubspot} alt="" />
          </div>

          <div className='col-lg-2 col-md-3 col-6'>
            <img src={jquery} alt="" />
          </div>
          <div className='col-lg-2 col-md-3 col-6'>
            <img src={canon} alt="" />
          </div>

          <div className='col-lg-2 col-md-3 col-6'>
            <img src={fedex} alt="" />
          </div>

          <div className='col-lg-2 col-md-3 col-6'>
            <img src={bitcoin} alt="" />
          </div>

          <div className='col-lg-2 col-md-3 col-6'>
            <img src={pirelli} alt="" />
          </div>

          <div className='col-lg-2 col-md-3 col-6'>
            <img src={philips} alt="" />
          </div>

          <div className='col-lg-2 col-md-3 col-6'>
            <img src={marvel} alt="" />
          </div>

          <div className='col-lg-2 col-md-3 col-6'>
            <img src={milhas} alt="" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Customers
