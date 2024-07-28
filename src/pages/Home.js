import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ services }) => {
    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <h1>ANIMACIONES MORENO</h1>
                    <p>SERVICIOS DE ANIMACIÓN Y <span className="catering">CATERING SERVICE</span></p>
                    <div className="image-collage">
                        <img src="path/to/image1.jpg" alt="Image 1" />
                        <img src="path/to/image2.jpg" alt="Image 2" />
                        <img src="path/to/image3.jpg" alt="Image 3" />
                        <img src="path/to/image4.jpg" alt="Image 4" />
                        <img src="path/to/image5.jpg" alt="Image 5" />
                        <img src="path/to/image6.jpg" alt="Image 6" />
                        <img src="path/to/image7.jpg" alt="Image 7" />
                    </div>
                </div>
            </section>

            <section className="services">
                <h2>NUESTROS SERVICIOS</h2>
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

                        {/* Sección de Review */}
                        <section className="review">
                <h2>Reseñas</h2>
                <p>Lea las opiniones de nuestros clientes satisfechos.</p>
                <button className="cta-button">
                    <Link to="/reviews">Ver Reseñas</Link>
                </button>
            </section>

            {/* Sección de Galería */}
            <section className="gallery">
                <h2>Galería</h2>
                <p>Explore nuestras fotos de eventos pasados.</p>
                <button className="cta-button">
                    <Link to="/gallery">Ver Galería</Link>
                </button>
            </section>

            {/* Sección de Directorio Personal */}
            <section className="personal-directory">
                <h2>Directorio Personal</h2>
                <p>Conozca a nuestro equipo y su experiencia.</p>
                <button className="cta-button">
                    <Link to="/personal-directory">Ver Directorio</Link>
                </button>
            </section>

            <section className="contact">
                <p>Llama al <strong>(800) 8888-8888</strong></p>
                <div className="locations">
                    <h4>Ubicaciones</h4>
                    <p>San José - Escazú - Lindora - Heredia - Alajuela - San Ramón - Puntarenas - Caldera - Liberia - Nicoya</p>
                </div>
                <button className="cta-button">SOLICITAR COTIZACIÓN</button>
            </section>
        </>
    );
};

export default Home;
