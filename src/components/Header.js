import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo.png';

const Header = () => {
    const [language, setLanguage] = useState('es');

    const handleLanguageChange = (e) => {
        const selectedLanguage = e.target.value;
        setLanguage(selectedLanguage);
        alert(`Idioma cambiado a: ${selectedLanguage === 'es' ? 'Español' : selectedLanguage === 'en' ? 'Inglés' : 'Francés'}`);
    };

    return (
        <header className="header">
            <img className='logo' src={logo} alt="logo" />
            <nav className="nav">
                <Link to="/">INICIO</Link>
                <Link to="/services">SERVICIOS</Link>
                <Link to="/about">NOSOTROS</Link>
                <Link to="/contact">CONTACTO</Link>
                <Link to="/blog">BLOG</Link>
                <Link to="/login">LOGIN</Link>
            </nav>
            <section className="cta">
                <select value={language} onChange={handleLanguageChange} className="language-select">
                    <option value="es">Español</option>
                    <option value="en">Inglés</option>
                    <option value="fr">Francés</option>
                </select>
            </section>
        </header>
    );
};

export default Header;
