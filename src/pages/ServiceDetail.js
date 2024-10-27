import React, { useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LanguageContext } from '../contexts/LanguageContext';
import './ServiceDetail.css';

const ServiceDetail = ({ services }) => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { t } = useContext(LanguageContext);
    const service = services.find(s => s.slug === slug);

    if (!service) {
        return (
            <section className="not-found">
                <Helmet>
                    <title>{t['serviceDetail_notFound']} - Animaciones Moreno</title>
                    <meta name="description" content={t['quote_service_not_found_message']} />
                    <meta property="og:title" content={t['serviceDetail_notFound']} />
                    <meta property="og:description" content={t['quote_service_not_found_message']} />
                    <meta property="og:url" content={`https://animaciones-moreno-topaz.vercel.app/service/${slug}`} />
                    <meta property="og:type" content="website" />
                    <link rel="canonical" href={`https://animaciones-moreno-topaz.vercel.app/service/${slug}`} />
                </Helmet>
                <h1>{t['serviceDetail_notFound']}</h1>
                <p>{t['quote_service_not_found_message']}</p>
                <Link to="/" className="back-home">{t['quote_back_home']}</Link>
            </section>
        );
    }

    const handleQuoteClick = () => {
        navigate(`/quote/${slug}`);
    };

    return (
        <section className="service-detail">
            <Helmet>
                <title>{service.name} - Animaciones Moreno</title>
                <meta name="description" content={service.description} />
                <meta property="og:title" content={service.name} />
                <meta property="og:description" content={service.description} />
                <meta property="og:image" content={service.image} />
                <meta property="og:url" content={`https://animaciones-moreno-topaz.vercel.app/service/${slug}`} />
                <meta property="og:type" content="website" />
                <link rel="canonical" href={`https://animaciones-moreno-topaz.vercel.app/service/${slug}`} />
            </Helmet>

            <section className="service-header">
                <section className="service-image">
                    <LazyLoadImage
                        src={service.image}
                        alt={service.name}
                        effect="blur"
                        className="service-main-image"
                    />
                </section>
                <section className="service-info">
                    <h1>{service.name}</h1>
                    <p>{service.description}</p>
                </section>
            </section>

            <section className="service-gallery">
                {service.gallery.map((img, index) => (
                    <LazyLoadImage
                        key={index}
                        src={img}
                        alt={`Gallery item ${index + 1} for ${service.name}`}
                        effect="blur"
                        className="service-gallery-image"
                    />
                ))}
            </section>

            <section className="service-menu">
                <h2>{t['serviceDetail_information']} {service.name}</h2>
                <section className="menu-info">
                    {service.menu.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </section>
            </section>

            <section className="quote-button">
                <button className='cta-button' onClick={handleQuoteClick}>{t['serviceDetail_quoteButton']}</button>
            </section>
        </section>
    );
};

export default ServiceDetail;
