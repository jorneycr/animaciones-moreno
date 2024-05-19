import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo">Logo</div>
        <nav className="nav">
          <Link to="/">INICIO</Link>
          <Link to="/#servicios">SERVICIOS</Link>
          <Link to="/nosotros">NOSOTROS</Link>
          <Link to="/solicitar-cita">SOLICITAR CITA</Link>
        </nav>
        <div className="social-media">
          <a href="#facebook">F</a>
          <a href="#instagram">I</a>
          <a href="#twitter">T</a>
        </div>
      </div>
      <div className="footer-legal">
        <a href="#privacidad">POLÍTICAS DE PRIVACIDAD</a>
        <a href="#terminos">TÉRMINOS DE USO</a>
        <p>© Animaciones Moreno. Derechos Reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
