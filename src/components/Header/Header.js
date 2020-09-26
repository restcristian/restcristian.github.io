import React from 'react';
import './Header.css';
import logo from '../../imgs/logo_w.png';
import PDF from '../../downloadables/cv_cristianrestituyo.pdf.pdf';

const Header = (props) => {
  return (
    <div className='header-txt'>
      <img src={logo} alt='Restituyo Logo' className='header-logo' />
      <p className='reset-padm author-name'>Cristian Restituyo</p>
      <p className='reset-padm job-desc'>JavaScript Developer</p>
      <p className='reset-padm'>Cologne, Germany</p>
      <p className='reset-padm'>
        <a
          href='https://github.com/restcristian'
          target='_blank'
          rel='noopener noreferrer'
        >
          Github
        </a>
        <span style={{ padding: '0 6px' }}>|</span>
        <a href={PDF} rel='noopener noreferrer' target='_blank'>
          Résumé
        </a>
      </p>
      <p className='cursor reset-padm'>|</p>
    </div>
  );
};

export default Header;
