import React from 'react';
import './Appointment.css';

function Appointment() {
  return (
    <main className="main-content">
      <div className="service-section">
        <div className="service-image-placeholder"></div>
        <div className="service-details">
          <h2>SERVICIO BODA</h2>
          <p>consectetur adipiscing elit</p>
          <h3>DETALLES</h3>
          <p>consectetur adipiscing elit</p>
        </div>
      </div>
      <div className="form-section">
        <form className="appointment-form">
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Mensaje"></textarea>
          <button type="submit">SIGUIENTE</button>
        </form>
      </div>
    </main>
  );
}

export default Appointment;
