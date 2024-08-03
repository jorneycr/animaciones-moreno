import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useContext } from 'react';
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
            <section className="service-header">
                <section className="service-image">
                    <img src={service.image} alt={service.name} />
                </section>
                <section className="service-info">
                    <h1>{service.name}</h1>
                    <p>{service.description}</p>
                </section>
            </section>
            <section className="service-gallery">
                {service.gallery.map((img, index) => (
                    <img key={index} src={img} alt={`Gallery item ${index + 1}`} />
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
