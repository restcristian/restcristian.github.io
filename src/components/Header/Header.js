import React from 'react';
import './Header.css';
import logo from '../../imgs/logo_w.png';
import MainNav from '../MainNav/MainNav';

const Header = (props) => {
  return (
    <header className="main-header">
      <div className="header-txt">
        <img src={logo} alt="Restituyo Logo" className="header-logo" />
        <p className="reset-padm author-name">Cristian Restituyo</p>
        <p className="reset-padm job-desc">Front-End / Mobile App Developer</p>
        <p className = "reset-padm">UNDER CONSTRUCTION</p>
        <p className="cursor reset-padm">|</p>
      </div>
      <div className="main-nav-wrapper">
        <MainNav />
      </div>

    </header>
  );

}

export default Header;