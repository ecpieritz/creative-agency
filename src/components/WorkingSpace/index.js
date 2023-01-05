import React from 'react'
import Titles from '../Titles'

import img01 from '../../assets/img/ca-working-space__01.png'
import img02 from '../../assets/img/ca-working-space__02.png'
import img03 from '../../assets/img/ca-working-space__03.png'
import img04 from '../../assets/img/ca-working-space__04.png'
import img05 from '../../assets/img/ca-working-space__05.png'
import img06 from '../../assets/img/ca-working-space__06.png'

const WorkingSpace = () => {
  return (
    <section className='ca-working section' id='ca-working'>
      <div className='container-fluid'>
        <Titles subtitle='Working space' title="Let’s meet our interior room decoration" />

        <div className='row'>
          <div className='col-lg-4'>
              <img src={img01} alt="" />
              <img src={img02} alt="" />
          </div>
          <div className='col-lg-4'>
              <img src={img03} alt="" />
              <img src={img04} alt="" />
          </div>
          <div className='col-lg-4'>
              <img src={img05} alt="" />
              <img src={img06} alt="" />
          </div>
          

        </div>
      </div>
    </section>
  )
}

export default WorkingSpace
