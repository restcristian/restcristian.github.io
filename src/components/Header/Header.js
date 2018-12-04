import React from 'react';
import './Header.css';
import logo from '../../imgs/logo_w.png';
import MainNav from '../MainNav/MainNav';



const Header = (props) => {
  return (

    <div className="header-txt">
      <img src={logo} alt="Restituyo Logo" className="header-logo" />
      <p className="reset-padm author-name">Cristian Restituyo</p>
      <p className="reset-padm job-desc">Front-End Web / Mobile App Developer</p>
      <p className="reset-padm">
        <a href="https://github.com/restcristian" target="_blank" rel="noopener noreferrer" >Github</a>
        <span style={{ padding: "0 6px" }}>|</span>
        <a href="../../downloadables/Resume_CristianAlbertoRestituyoNunez.pdf" rel="noopener noreferrer" target="_blank">Résumé</a>
      </p>
      <p className="cursor reset-padm">|</p>
    </div>

  );

}

export default Header;