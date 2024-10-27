import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './SocialMedia.css';

const SocialMedia = () => {
    return (
        <section className="social-media">
            <a href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon facebook"
                aria-label="Visítanos en Facebook">
                <FaFacebookF aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
                aria-label="Visítanos en Instagram">
                <FaInstagram aria-hidden="true" />
            </a>
            <a href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon twitter"
                aria-label="Visítanos en Twitter">
                <FaTwitter aria-hidden="true" />
            </a>
        </section>

    );
};

export default SocialMedia;
