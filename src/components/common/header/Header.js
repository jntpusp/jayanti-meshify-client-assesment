import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from './../../../assets/images/twitter_logo.png';
import './header.scss';

function Header() {
  return (
    <Navbar className='app-header fixed-top'>
	    <Navbar.Brand href="#">
	      <img
	        alt=""
	        src={logo}
	        width="50"
	        height="40"
	        className="d-inline-block align-top app-logo"
	      />
	      <div className='app-title'>Meshify Assessment</div>
	    </Navbar.Brand>
	  </Navbar>
  );
}

export default Header;