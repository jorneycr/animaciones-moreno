import React from 'react';
import './Home.css';

const Home = () => {
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
          <div className="service-card">
            <img src="path/to/icon1.png" alt="Icon 1" />
            <h3>Despedidas</h3>
            <p>consectetur adipiscing elit</p>
          </div>
          <div className="service-card">
            <img src="path/to/icon2.png" alt="Icon 2" />
            <h3>Escolares</h3>
            <p>consectetur adipiscing elit</p>
          </div>
          <div className="service-card">
            <img src="path/to/icon3.png" alt="Icon 3" />
            <h3>Bodas</h3>
            <p>consectetur adipiscing elit</p>
          </div>
          <div className="service-card">
            <img src="path/to/icon4.png" alt="Icon 4" />
            <h3>Familiares</h3>
            <p>consectetur adipiscing elit</p>
          </div>
          <div className="service-card">
            <img src="path/to/icon5.png" alt="Icon 5" />
            <h3>Graduaciones</h3>
            <p>consectetur adipiscing elit</p>
          </div>
          <div className="service-card">
            <img src="path/to/icon6.png" alt="Icon 6" />
            <h3>Otro</h3>
            <p>consectetur adipiscing elit</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <p>Llama al <strong>(800) 8888-8888</strong></p>
        <div className="locations">
          <h4>Ubicaciones</h4>
          <p>San José - Escazú - Lindora - Heredia - Alajuela - San Ramón - Puntarenas - Caldera - Liberia - Nicoya</p>
        </div>
        <button className="cta-button">SOLICITAR CITA</button>
      </section>
</>
  );
};

export default Home;
