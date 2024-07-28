import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = ({ services }) => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const service = services.find(s => s.slug === slug);

    if (!service) {
        return <div>Servicio no encontrado</div>;
    }

    const handleQuoteClick = () => {
        navigate(`/quote/${slug}`);
    };

    return (
        <section className="service-detail">
            <div className="service-header">
                <div className="service-image">
                    <img src={service.image} alt={service.name} />
                </div>
                <div className="service-info">
                    <h1>{service.name}</h1>
                    <p>{service.description}</p>
                </div>
            </div>
            <div className="service-gallery">
                {service.gallery.map((img, index) => (
                    <img key={index} src={img} alt={`Gallery Image ${index + 1}`} />
                ))}
            </div>
            <div className="service-menu">
                <h2>Información de menú del servicio</h2>
                <div className="menu-info">
                    {service.menu.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
            </div>
            <div className="quote-button">
                <button onClick={handleQuoteClick}>Cotizar Servicio</button>
            </div>
        </section>
    );
};

export default ServiceDetail;
