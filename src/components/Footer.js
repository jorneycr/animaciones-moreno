import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import SocialMedia from './SocialMedia';
import logoWhite from '../assets/images/logoBlanco.png';

const Footer = () => {
    return (
        <footer className='full-footer'>
            <section className="footer">
                <section className="footer-content">
                    <section className='logo-social-media'>
                        <Link to="/">
                            <img className='logoWhite' src={logoWhite} alt="logoWhite" />
                        </Link>
                        <SocialMedia />
                    </section>
                    <nav className="nav">
                        <Link to="/">INICIO</Link>
                        <Link to="/#services">SERVICIOS</Link>
                        <Link to="/about">NOSOTROS</Link>
                        <Link to="/contact">CONTACTO</Link>
                        <Link to="/blog">BLOG</Link>
                        <Link to="/login">LOGIN</Link>
                    </nav>
                </section>
                <section className="footer-legal">
                    <Link to="/privacy-policy">POLÍTICAS DE PRIVACIDAD</Link>
                    <Link to="/terms-of-use">TÉRMINOS DE USO</Link>
                </section>
            </section>
            <section className="copyright">
                © Animaciones Moreno. Derechos Reservados
            </section>
        </footer>
    );
};

export default Footer;
