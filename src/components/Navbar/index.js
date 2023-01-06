import React from 'react'
import logo from '../../assets/img/ca-logo.png'

const Navbar = () => {
  return (
    <nav className='ca-navbar navbar-dark navbar sticky-top navbar-expand-lg'>
      <a className="navbar-brand" href="#ca-banner"><img src={logo} alt="Creative Agency logo" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon "></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#ca-services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#ca-documentation">Documentation</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#ca-satisfaction">Satisfaction</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#ca-working">Working Space</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#ca-customers">Customers</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#ca-faq">FAQ</a>
          </li>
        </ul>
        <button className='btn btn-purple-bg'>
          <a href="#ca-contact">Contact us</a>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
