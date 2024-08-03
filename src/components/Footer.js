import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import SocialMedia from './SocialMedia';
import logoWhite from '../assets/images/logoBlanco.png';
import { LanguageContext } from '../contexts/LanguageContext';

const Footer = () => {
    const { t } = useContext(LanguageContext);

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
                        <Link to="/">{t['footer_home']}</Link>
                        <Link to="/#services">{t['footer_services']}</Link>
                        <Link to="/about">{t['footer_about']}</Link>
                        <Link to="/contact">{t['footer_contact']}</Link>
                        <Link to="/blog">{t['footer_blog']}</Link>
                        <Link to="/login">{t['footer_login']}</Link>
                    </nav>
                </section>
                <section className="footer-legal">
                    <Link to="/privacy-policy">{t['footer_privacyPolicy']}</Link>
                    <Link to="/terms-of-use">{t['footer_termsOfUse']}</Link>
                </section>
            </section>
            <section className="copyright">
                {t['footer_copyright']}
            </section>
        </footer>
    );
};

export default Footer;
