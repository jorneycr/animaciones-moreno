import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './ContactForm.css';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, 'El nombre debe tener 50 caracteres o menos')
        .required('El nombre es requerido'),
      email: Yup.string()
        .email('El correo electrónico no es válido')
        .required('El correo electrónico es requerido'),
      phone: Yup.string()
        .matches(/^[0-9]+$/, 'El número de teléfono solo puede contener dígitos')
        .min(10, 'El número de teléfono debe tener al menos 10 dígitos')
        .required('El número de teléfono es requerido'),
      message: Yup.string()
        .max(500, 'El mensaje debe tener 500 caracteres o menos')
        .required('El mensaje es requerido'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="contact-form-animaciones">
      <label htmlFor="name" className="contact-form-animaciones-label">Nombre</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        className={`contact-form-animaciones-input ${formik.touched.name && formik.errors.name ? 'contact-form-animaciones-error' : ''}`}
      />
      {formik.touched.name && formik.errors.name ? (
        <span className="contact-form-animaciones-error-message">{formik.errors.name}</span>
      ) : null}

      <label htmlFor="email" className="contact-form-animaciones-label">Correo Electrónico</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className={`contact-form-animaciones-input ${formik.touched.email && formik.errors.email ? 'contact-form-animaciones-error' : ''}`}
      />
      {formik.touched.email && formik.errors.email ? (
        <span className="contact-form-animaciones-error-message">{formik.errors.email}</span>
      ) : null}

      <label htmlFor="phone" className="contact-form-animaciones-label">Número de Teléfono</label>
      <input
        id="phone"
        name="phone"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phone}
        className={`contact-form-animaciones-input ${formik.touched.phone && formik.errors.phone ? 'contact-form-animaciones-error' : ''}`}
      />
      {formik.touched.phone && formik.errors.phone ? (
        <span className="contact-form-animaciones-error-message">{formik.errors.phone}</span>
      ) : null}

      <label htmlFor="message" className="contact-form-animaciones-label">Mensaje</label>
      <textarea
        id="message"
        name="message"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
        className={`contact-form-animaciones-textarea ${formik.touched.message && formik.errors.message ? 'contact-form-animaciones-error' : ''}`}
      />
      {formik.touched.message && formik.errors.message ? (
        <span className="contact-form-animaciones-error-message">{formik.errors.message}</span>
      ) : null}

      <button type="submit" className="contact-form-animaciones-button">Enviar</button>
    </form>
  );
};

export default ContactForm;
