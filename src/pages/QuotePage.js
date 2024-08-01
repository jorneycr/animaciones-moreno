import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './QuotePage.css';

function QuotePage({ services }) {
  const { slug } = useParams();
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const service = services.find(s => s.slug === slug);
    setSelectedService(service);
  }, [slug, services]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      budget: '',
      location: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Nombre es requerido'),
      email: Yup.string().email('Email no válido').required('Email es requerido'),
      phone: Yup.string().required('Teléfono es requerido'),
      budget: Yup.number().required('Presupuesto es requerido').positive('Debe ser un número positivo'),
      location: Yup.string().required('Ubicación es requerida'),
      message: Yup.string().required('Mensaje es requerido'),
    }),
    onSubmit: values => {
      console.log(values);
      alert('Formulario enviado');
    },
  });

  if (!selectedService) {
    return (
      <div className="not-found">
        <h1>Servicio no encontrado</h1>
        <p>Lo sentimos, no pudimos encontrar el servicio que estás buscando.</p>
        <Link to="/" className="back-home">Volver a Inicio</Link>
      </div>
    );
  }

  return (
    <main className="main-content">
      <div className="service-section">
        <div className="service-image-placeholder">
          <img src={selectedService.image} alt={selectedService.name} />
        </div>
        <div className="service-details">
          <h2>{selectedService.name.toUpperCase()}</h2>
          <p>{selectedService.description}</p>
          <h4>DETALLES</h4>
          {selectedService.menu.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
        </div>
      </div>
      <div className="form-section">
        <form className="appointment-form" onSubmit={formik.handleSubmit}>
          <select value={selectedService.name} disabled>
            <option>{selectedService.name}</option>
          </select>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
          <input
            type="text"
            name="phone"
            placeholder="Teléfono"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="error">{formik.errors.phone}</div>
          ) : null}
          <input
            type="number"
            name="budget"
            placeholder="Presupuesto"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.budget}
          />
          {formik.touched.budget && formik.errors.budget ? (
            <div className="error">{formik.errors.budget}</div>
          ) : null}
          <input
            type="text"
            name="location"
            placeholder="Ubicación"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.location}
          />
          {formik.touched.location && formik.errors.location ? (
            <div className="error">{formik.errors.location}</div>
          ) : null}
          <textarea
            name="message"
            placeholder="Mensaje"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            rows="5"
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <div className="error">{formik.errors.message}</div>
          ) : null}
          <button type="submit">ENVIAR</button>
        </form>
      </div>
    </main>
  );
}

export default QuotePage;
