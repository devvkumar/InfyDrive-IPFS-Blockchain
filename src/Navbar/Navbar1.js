import React from 'react'
import './Navbar1.css'

const Navbar1 = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top border-bottom">
  <div className="container-fluid">
    <a className="navbar-brand m-4 infy" href="/">InfyDrive</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0  nav_ul">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            SOLUTIONS
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">DECENTRALIZED STORAGE</a></li>
            <li><a className="dropdown-item" href="#">BY ORGANIZATION</a></li>
            {/* <li><hr className="dropdown-divider"></li> */}
            <li><a className="dropdown-item" href="#">BY USE CASE</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            SERVICES
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">DESTOR STUDIO</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            RESOURCES
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">BLOG</a></li>
            {/* <li><hr className="dropdown-divider"></li> */}
            <li><a className="dropdown-item" href="#">EVENTS</a></li>
            <li><a className="dropdown-item" href="#">VIDEOS</a></li>
            <li><a className="dropdown-item" href="#">NEWS</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PARTNERS
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">OVERVIEW</a></li>
            <li><a className="dropdown-item" href="#">BECOME A PARTNER</a></li>
            {/* <li><hr className="dropdown-divider"></li> */}
            <li><a className="dropdown-item" href="#">PROVIDERS DIRECTORY</a></li>
            <li><a className="dropdown-item" href="#">PROVIDER RESOURCES</a></li>
            <li><a className="dropdown-item" href="#">NETWORK BLOG</a></li>
          </ul>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <button type="button" class="btn btn-primary nav_btn">GET STARTED</button>
    </div>
  </div>    
</nav>
    </>
  )
}

export default Navbar1
