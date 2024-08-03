import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './ContactForm.css';
import { LanguageContext } from '../contexts/LanguageContext';

const ContactForm = () => {
  const { t } = useContext(LanguageContext);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, t['contact_name_max'])
        .required(t['contact_name_required']),
      email: Yup.string()
        .email(t['contact_email_invalid'])
        .required(t['contact_email_required']),
      phone: Yup.string()
        .matches(/^[0-9]+$/, t['contact_phone_digits'])
        .min(10, t['contact_phone_min'])
        .required(t['contact_phone_required']),
      message: Yup.string()
        .max(500, t['contact_message_max'])
        .required(t['contact_message_required']),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="contact-form-animaciones">
      <label htmlFor="name" className="contact-form-animaciones-label">{t['contact_name_label']}</label>
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

      <label htmlFor="email" className="contact-form-animaciones-label">{t['contact_email_label']}</label>
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

      <label htmlFor="phone" className="contact-form-animaciones-label">{t['contact_phone_label']}</label>
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

      <label htmlFor="message" className="contact-form-animaciones-label">{t['contact_message_label']}</label>
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

      <button type="submit" className="contact-form-animaciones-button">{t['contact_submit_button']}</button>
    </form>
  );
};

export default ContactForm;
