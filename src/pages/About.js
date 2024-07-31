import React from 'react';
import './About.css';

function About() {
  return (
    <main className="about-page">
      <section className="about-section">
        <h3 style={{textAlign:'center'}}>Sobre Nosotros</h3>
        <p>Somos una empresa dedicada a ofrecer servicios de animación y entretenimiento para bodas y eventos especiales. Nuestro objetivo es hacer de tu evento un momento inolvidable.</p>
        <h4 style={{textAlign:'center'}}>Misión</h4>
        <p>Nuestra misión es proporcionar experiencias de entretenimiento excepcionales que superen las expectativas de nuestros clientes y creen recuerdos duraderos.</p>
        <h4 style={{textAlign:'center'}}>Visión</h4>
        <p>Ser reconocidos como la mejor empresa de animación y entretenimiento en la región, conocida por nuestra creatividad, profesionalismo y dedicación a la excelencia.</p>
      </section>
    </main>
  );
}

export default About;
