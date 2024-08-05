import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo.png';
import Language from './Language';
import { LanguageContext } from '../contexts/LanguageContext';
import { useUser } from '../contexts/UserContext';

const Header = () => {
    const { t } = useContext(LanguageContext);
    const { user, setUser } = useUser();

    return (
        <header className="header">
            <Link to="/">
                <img className='logo' src={logo} alt="logo" />
            </Link>
            <nav className="nav">
                <Link to="/">{t['header_home']}</Link>
                {/* <Link to="/#services">{t['header_services']}</Link> */}
                <Link to="/about">{t['header_about']}</Link>
                <Link to="/contact">{t['header_contact']}</Link>
                <Link to="/blog">{t['header_blog']}</Link>
                {user ? (
                    <Link to="/settings">{t['header_welcome']}, {user.user}</Link>
                ) : (
                    <Link to="/login">{t['header_login']}</Link>
                )}
                {user && (
                    <button className="login-button" onClick={() => setUser(null)}>{t['header_logout']}</button>
                )}
            </nav>
            <section className="cta">
                <Language />
            </section>
        </header>
    );
};

export default Header;
