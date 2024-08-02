// Home.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import HeroSlider from '../components/HeroSlider';
import { LanguageContext } from '../contexts/LanguageContext';

const Home = ({ services }) => {
    const { t } = useContext(LanguageContext);

    return (
        <>
            <HeroSlider/>

            <section id='services' className="services">
                <h2>{t.homeTitle}</h2>
                <div className="service-cards">
                    {services.map(service => (
                        <Link to={`/service/${service.slug}`} key={service.slug}>
                            <div className="service-card">
                                <img src={service.icon} alt={`${service.name} Icon`} />
                                <h3>{service.name}</h3>
                                <p>{service.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="review">
                <h2>{t.reviews}</h2>
                <p>{t.readReviews}</p>
                <button className="cta-button">
                    <Link to="/reviews">{t.viewReviews}</Link>
                </button>
            </section>

            <section className="gallery">
                <h2>{t.gallery}</h2>
                <p>{t.exploreGallery}</p>
                <button className="cta-button">
                    <Link to="/gallery">{t.viewGallery}</Link>
                </button>
            </section>

            <section className="personal-directory">
                <h2>{t.personalDirectory}</h2>
                <p>{t.meetTeam}</p>
                <button className="cta-button">
                    <Link to="/personal-directory">{t.viewDirectory}</Link>
                </button>
            </section>

            <section className="contact">
                <p>{t.callUs} <strong>(800) 8888-8888</strong></p>
                <div className="locations">
                    <h4>{t.locations}</h4>
                    <p>{t.locationList}</p>
                </div>
                <button className="cta-button"><Link to="/contact">{t.contact}</Link></button>
            </section>
        </>
    );
};

export default Home;
