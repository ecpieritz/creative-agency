import React from 'react'
import Card from '../Card'
import Titles from '../Titles'

import flame from '../../assets/img/Icon/ca-icon__purple-flame.png'
import pen from '../../assets/img/Icon/ca-icon__pen.png'
import desktop from '../../assets/img/Icon/ca-icon__desktop.png'
import mobile from '../../assets/img/Icon/ca-icon__mobile.png'
import building from '../../assets/img/Icon/ca-icon__building.png'
import chart from '../../assets/img/Icon/ca-icon__chart.png'

const Services = () => {
  return (
    <section className='ca-services section'>
      <div className='container-fluid'>
        <Titles subtitle='Our Services' title="The various services we provide to make your business more powerful" />

        <div className='row'>
          <div className='col-lg-4 col-md-6'>
            <Card imgBgColor="white" img={flame} imgAlt="purple flame icon" title="Ideate" text="We help you develop creative ideas so that your business can grow more rapidly" />
          </div>
          <div className='col-lg-4 col-md-6'>
            <Card imgBgColor="red" img={pen} imgAlt="pen icon" title="Design" text="We provide services with the best designs than our designer team for your business" />
          </div>
          <div className='col-lg-4 col-md-6'>
            <Card imgBgColor="green" img={desktop} imgAlt="desktop icon" title="Web Development" text="We help develop company websites to be more professional and attractive" />
          </div>
          <div className='col-lg-4 col-md-6'>
            <Card imgBgColor="yellow" img={mobile} imgAlt="mobile icon" title="App Development" text="We help develop company mobile apps to be more professional and attractive" />
          </div>
          <div className='col-lg-4 col-md-6'>
            <Card imgBgColor="cyan" img={building} imgAlt="building icon" title="Business Growth" text="We also provide services by providing input for your business growth" />
          </div>
          <div className='col-lg-4 col-md-6'>
            <Card imgBgColor="orange" img={chart} imgAlt="chart icon" title="Digital marketing" text="We also help you market your products through an online marketplace" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
