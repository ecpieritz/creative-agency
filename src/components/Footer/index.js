import React from 'react'

import facebook from '../../assets/img/Icon/ca-icon__facebook.png'
import instagram from '../../assets/img/Icon/ca-icon__instagram.png'
import linkedin from '../../assets/img/Icon/ca-icon__linkedin.png'
import twitter from '../../assets/img/Icon/ca-icon__twitter.png'
import logoImg from '../../assets/img/ca-logo.png'
import office from '../../assets/img/ca-footer.png'


const Footer = () => {
  return (
    <footer className='ca-footer'>
      <div className='row'>
        <div className='col-md-5 ca-footer__logo'>
          <img src={logoImg} alt="Creative Agency logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className='col-md-4 ca-footer__office'>
          <p className='ca-footer__title'>Our Office</p>
          <img src={office} alt="map in white" />
        </div>
        <div className='col-md-3 ca-footer__contact'>
          <p className='ca-footer__title'>Contact</p>

          <p>São Paulo Street, 1234<br/>Blumenau/SC - Brazil</p>
          <p>info@yourdomain.com</p>
          <p>+55 (00) 00000-0000</p>
        </div>
      </div>
      <hr/>
      <div className='row'>
        <div className='col-md-8 ca-footer__made-by'>
          <p>© 2022 Made with 💙 by Emilyn C. Pieritz</p>
        </div>


        <div className='col-md-4 ca-footer__socials'>
          <a href="#ca-banner">
            <img src={facebook} alt="" />
          </a>
          <a href="#ca-banner">
            <img src={instagram} alt="" />
          </a>
          <a href="#ca-banner">
            <img src={linkedin} alt="" />
          </a>
          <a href="#ca-banner">
            <img src={twitter} alt="" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
