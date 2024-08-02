import React, { useState } from 'react';
import './Language.css';
import esLogo from '../assets/images/es.png';
import enLogo from '../assets/images/en.png';
import frLogo from '../assets/images/fr.png';

const Language = () => {
    const [language, setLanguage] = useState('es');

    const translations = {
        es: {
            title: "Calculadora de Distancia Euclidiana",
        },
        en: {
            title: "Euclidean Distance Calculator",
        },
        fr: {
            title: "Calculatrice de distance euclidienne",
        },
    };

    const t = translations[language];

    return (
        <nav className="language-selector">
            <ul>
                <li>
                    <img 
                        src={esLogo} 
                        alt="ES" 
                        title="Español"
                        onClick={() => setLanguage('es')} 
                        className={language === 'es' ? 'active' : ''}
                    />
                </li>
                <li>
                    <img 
                        src={enLogo} 
                        alt="EN" 
                        title="English"
                        onClick={() => setLanguage('en')} 
                        className={language === 'en' ? 'active' : ''}
                    />
                </li>
                <li>
                    <img 
                        src={frLogo} 
                        alt="FR" 
                        title="Français"
                        onClick={() => setLanguage('fr')} 
                        className={language === 'fr' ? 'active' : ''}
                    />
                </li>
            </ul>
        </nav>
    );
};

export default Language;
