import React, { useContext } from 'react';
import './Language.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import esLogo from '../assets/images/es.webp';
import enLogo from '../assets/images/en.webp';
import frLogo from '../assets/images/fr.webp';
import { LanguageContext } from '../contexts/LanguageContext';

const Language = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    const languages = [
        { code: 'es', logo: esLogo, title: 'Español' },
        { code: 'en', logo: enLogo, title: 'English' },
        { code: 'fr', logo: frLogo, title: 'Français' }
    ];

    const currentLanguage = languages.find(lang => lang.code === language);

    return (
        <nav className="language-selector">
            <ul>
                <li>
                    <LazyLoadImage 
                        src={currentLanguage.logo} 
                        alt={currentLanguage.code.toUpperCase()} 
                        title={currentLanguage.title}
                        className="active"
                        effect="blur" // Efecto de carga diferida
                    />
                </li>
                {languages.filter(lang => lang.code !== language).map(lang => (
                    <li key={lang.code}>
                        <LazyLoadImage 
                            src={lang.logo} 
                            alt={lang.code.toUpperCase()} 
                            title={lang.title}
                            onClick={() => setLanguage(lang.code)} 
                            className="inactive"
                            effect="blur" // Efecto de carga diferida
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Language;
