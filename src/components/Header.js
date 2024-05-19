import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className="nav">
        <Link to="/">INICIO</Link>
        <Link to="/servicios">SERVICIOS</Link>
        <Link to="/nosotros">NOSOTROS</Link>
      </nav>
      <div className="cta">
        <Link to="/cita" className="cta-button">SOLICITAR CITA</Link>
        <img src="path/to/costa-rica-flag.png" alt="CR Flag" className="flag" />
      </div>
    </header>
  );
};

export default Header;
