import React from 'react'
import PropTypes from 'prop-types'
import "./placeholdertext.css"
import {Link} from 'react-router-dom'
export default function Navbar({ title, about, mode ,toggleMode }) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${mode}`}>
        <div className="container-fluid">
          <a className={`navbar-brand ms-3 text-${mode==='light'? 'dark' : 'light'}`} href="/">{title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={"nav-item"}>
                <Link className={`nav-link text-${mode==='light'? 'dark' : 'light'}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${mode==='light'? 'dark' : 'light'}`} to="/about">{about}</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className={`form-control me-2 bg-${mode==='light'? 'light' : 'dark'} text-${mode==='light'? 'dark' : 'light'} ${mode==='light'?'black':'white'}-placeholder`} type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>

            <div className={`form-check form-switch ms-3 text-${mode==='light'? 'dark' : 'light'}`}>
              <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleMode}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{mode==='light'?'Enable':'Disable'} Dark Mode</label>
            </div>

          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
}