import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './QuotationForm.css';

const QuotationForm = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    date: '',
    services: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('El nombre es requerido'),
    email: Yup.string().email('Email inválido').required('El email es requerido'),
    phone: Yup.string().required('El teléfono es requerido').matches(/^[0-9]+$/, 'Sólo se permiten números'),
    date: Yup.date().required('La fecha del evento es requerida').min(new Date(), 'La fecha debe ser futura'),
    services: Yup.string().required('Por favor, seleccione al menos un servicio'),
  });

  const onSubmit = (values, { resetForm }) => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
  };

  return (
    <section className="quotation-form-container">
      <h1 className="quotation-form-header">Solicitar Cotización</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <label htmlFor="name" className="quotation-form-label">Nombre Completo</label>
          <Field type="text" id="name" name="name" className="quotation-form-input" />
          <ErrorMessage name="name" component="p" className="quotation-form-error" />

          <label htmlFor="email" className="quotation-form-label">Email</label>
          <Field type="email" id="email" name="email" className="quotation-form-input" />
          <ErrorMessage name="email" component="p" className="quotation-form-error" />

          <label htmlFor="phone" className="quotation-form-label">Teléfono</label>
          <Field type="text" id="phone" name="phone" className="quotation-form-input" />
          <ErrorMessage name="phone" component="p" className="quotation-form-error" />

          <label htmlFor="date" className="quotation-form-label">Fecha del Evento</label>
          <Field type="date" id="date" name="date" className="quotation-form-input" />
          <ErrorMessage name="date" component="p" className="quotation-form-error" />

          <label htmlFor="services" className="quotation-form-label">Servicios Requeridos</label>
          <Field as="select" id="services" name="services" className="quotation-form-input">
            <option value="">Selecciona un servicio</option>
            <option value="animacion">Animación</option>
            <option value="catering">Catering</option>
            <option value="decoracion">Decoración</option>
            <option value="musica">Música</option>
            <option value="salon">Salón de eventos</option>
          </Field>
          <ErrorMessage name="services" component="p" className="quotation-form-error" />

          <button type="submit" className="quotation-form-button">Enviar</button>
        </Form>
      </Formik>
    </section>
  );
};

export default QuotationForm;
