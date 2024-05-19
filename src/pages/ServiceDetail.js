import React from 'react';
import './ServiceDetail.css';

const ServiceDetail = () => {
  return (
    <section className="service-detail">
      <div className="service-header">
        <div className="service-image">Imagen Servicio</div>
        <div className="service-info">
          <h1>SERVICIO DE BODA</h1>
          <p>Disponible para: Alajuela, Guanacaste y Heredia</p>
        </div>
      </div>
      <div className="service-gallery">
        <img src="path/to/image1.jpg" alt="Image 1" />
        <img src="path/to/image2.jpg" alt="Image 2" />
        <img src="path/to/image3.jpg" alt="Image 3" />
      </div>
      <div className="service-menu">
        <h2>Información de menú del servicio</h2>
        <div className="menu-info">
          <p>consectetur adipiscing elit</p>
          <p>consectetur adipiscing elit</p>
          <p>consectetur adipiscing elit</p>
          <p>consectetur adipiscing elit</p>
          <p>consectetur adipiscing elit</p>
          <p>consectetur adipiscing elit</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
