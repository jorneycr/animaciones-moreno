import React, { useContext } from 'react';
import './Language.css';
import esLogo from '../assets/images/es.png';
import enLogo from '../assets/images/en.png';
import frLogo from '../assets/images/fr.png';
import { LanguageContext } from '../contexts/LanguageContext';

const Language = () => {
    const { language, setLanguage } = useContext(LanguageContext);

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
