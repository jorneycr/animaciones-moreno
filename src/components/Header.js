import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [language, setLanguage] = useState('es');

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    alert(`Idioma cambiado a: ${selectedLanguage === 'es' ? 'Español' : selectedLanguage === 'en' ? 'Inglés' : 'Francés'}`);
  };

  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className="nav">
        <Link to="/">INICIO</Link>
        <Link to="/services">SERVICIOS</Link>
        <Link to="/about">NOSOTROS</Link>
        <Link to="/contact">CONTACTO</Link>
        <Link to="/login">LOGIN</Link>
      </nav>
      <div className="cta">
        <select value={language} onChange={handleLanguageChange} className="language-select">
          <option value="es">Español</option>
          <option value="en">Inglés</option>
          <option value="fr">Francés</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
