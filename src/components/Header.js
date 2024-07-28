import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo.png';
import Language from './Language';

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <img className='logo' src={logo} alt="logo" />
            </Link>
            <nav className="nav">
                <Link to="/">INICIO</Link>
                <Link to="/services">SERVICIOS</Link>
                <Link to="/about">NOSOTROS</Link>
                <Link to="/contact">CONTACTO</Link>
                <Link to="/blog">BLOG</Link>
                <Link to="/login">LOGIN</Link>
            </nav>
            <section className="cta">
                <Language/>
            </section>
        </header>
    );
};

export default Header;
