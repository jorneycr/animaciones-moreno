import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import SocialMedia from './SocialMedia';

const Footer = () => {
  return (
    <>
      <footer className='full-footer'>
         <section  className="footer">
          <div className="footer-content">
            <section className='logo-social-media'>
              <div className="logo">Logo</div>
              {/* <section className="social-media">
                <a href="#facebook">F</a>
                <a href="#instagram">I</a>
                <a href="#twitter">T</a>
              </section> */}
              <SocialMedia/>
            </section>            
            <nav className="nav">
              <Link to="/">INICIO</Link>
              <Link to="/services">SERVICIOS</Link>
              <Link to="/about">NOSOTROS</Link>
              <Link to="/contact">CONTACTO</Link>
              <Link to="/login">LOGIN</Link>
            </nav>
            
          </div>
          <section className="footer-legal">
            <Link to="/privacy-policy">POLÍTICAS DE PRIVACIDAD</Link>
            <Link to="/terms-of-use">TÉRMINOS DE USO</Link>
          </section>
        </section>
        <section className="copyright">
        © Animaciones Moreno. Derechos Reservados
      </section>
      </footer>
      
    </>
  );
};

export default Footer;