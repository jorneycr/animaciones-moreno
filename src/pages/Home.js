import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import HeroSlider from '../components/HeroSlider';
import { LanguageContext } from '../contexts/LanguageContext';
import { Helmet } from "react-helmet";

const Home = ({ services }) => {
    const { t } = useContext(LanguageContext);

    return (
        <>
            <Helmet>
                {/* Título de la página */}
                <title>{t['home_homeTitle']} - Animaciones Moreno</title>
                
                {/* Meta descripción */}
                <meta name="description" content={t['home_metaDescription']} />
                
                {/* Palabras clave (SEO Keywords) */}
                <meta name="keywords" content="eventos, animaciones, catering, decoración, organización de eventos" />
                
                {/* Meta para redes sociales (Open Graph) */}
                <meta property="og:title" content={t['home_homeTitle']} />
                <meta property="og:description" content={t['home_metaDescription']} />
                <meta property="og:url" content="https://animaciones-moreno-topaz.vercel.app/" />
                <meta property="og:type" content="website" />
                
                {/* Twitter Card meta tags */}
                <meta name="twitter:title" content={t['home_homeTitle']} />
                <meta name="twitter:description" content={t['home_metaDescription']} />
                
                {/* URL canónica */}
                <link rel="canonical" href="https://animaciones-moreno-topaz.vercel.app/" />
            </Helmet>
            
            <HeroSlider />

            <section id='services' className="services">
                <h2>{t['home_homeTitle']}</h2>
                <section className="service-cards">
                    {services.map(service => (
                        <Link to={`/service/${service.slug}`} key={service.slug}>
                            <section className="service-card">
                                <img src={service.icon} alt={`${service.name} Icon`} />
                                <h3>{service.name}</h3>
                                <p>{service.description}</p>
                            </section>
                        </Link>
                    ))}
                </section>
            </section>

            <section className="review">
                <h2>{t['home_reviews']}</h2>
                <p>{t['home_readReviews']}</p>
                <button className="cta-button">
                    <Link to="/reviews">{t['home_viewReviews']}</Link>
                </button>
            </section>

            <section className="gallery">
                <h2>{t['home_eventCalendar']}</h2>
                <p>{t['home_exploreEventCalendar']}</p>
                <button className="cta-button">
                    <Link to="/calendar">{t['home_viewEventCalendar']}</Link>
                </button>
            </section>

            <section className="personal-directory">
                <h2>{t['home_personalDirectory']}</h2>
                <p>{t['home_meetTeam']}</p>
                <button className="cta-button">
                    <Link to="/personal-directory">{t['home_viewDirectory']}</Link>
                </button>
            </section>

            <section className="gallery">
                <h2>{t['home_gallery']}</h2>
                <p>{t['home_exploreGallery']}</p>
                <button className="cta-button">
                    <Link to="/gallery">{t['home_viewGallery']}</Link>
                </button>
            </section>

            <section className="contact">
                <p>{t['home_callUs']} <strong>(800) 8888-8888</strong></p>
                <section className="locations">
                    <h4>{t['home_locations']}</h4>
                    <p>{t['home_locationList']}</p>
                </section>
                <button className="cta-button"><Link to="/contact">{t['home_contact']}</Link></button>
            </section>
        </>
    );
};

export default Home;
