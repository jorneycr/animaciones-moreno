import React from 'react';
import './About.css';

function About() {
  return (
    <main className="about-page">
      <section className="about-section">
        <h1>Sobre Nosotros</h1>
        <p>Somos una empresa dedicada a ofrecer servicios de animación y entretenimiento para bodas y eventos especiales. Nuestro objetivo es hacer de tu evento un momento inolvidable.</p>
        <h2>Nuestra Historia</h2>
        <p>Fundada en 2010, Animaciones Moreno ha crecido de ser una pequeña empresa familiar a uno de los líderes en la industria de la animación y el entretenimiento para eventos en la región. A lo largo de los años, hemos ampliado nuestros servicios y equipo para satisfacer las necesidades de nuestros clientes.</p>
        <h2>Misión</h2>
        <p>Nuestra misión es proporcionar experiencias de entretenimiento excepcionales que superen las expectativas de nuestros clientes y creen recuerdos duraderos.</p>
        <h2>Visión</h2>
        <p>Ser reconocidos como la mejor empresa de animación y entretenimiento en la región, conocida por nuestra creatividad, profesionalismo y dedicación a la excelencia.</p>
        <h2>Nuestro Equipo</h2>
        <p>Contamos con un equipo diverso y talentoso que se especializa en diferentes áreas de la animación y la organización de eventos. Desde DJ's y animadores, hasta coordinadores y diseñadores, todos estamos dedicados a brindarte el mejor servicio.</p>
        <div className="team-gallery">
          <div className="team-member">
            <div className="team-photo photo1"></div>
            <p>Juan Pérez - DJ Principal</p>
          </div>
          <div className="team-member">
            <div className="team-photo photo2"></div>
            <p>Maria López - Coordinadora de Eventos</p>
          </div>
          <div className="team-member">
            <div className="team-photo photo3"></div>
            <p>Carlos Gómez - Animador</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
