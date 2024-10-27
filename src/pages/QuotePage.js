import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './QuotePage.css';
import { LanguageContext } from '../contexts/LanguageContext';

function QuotePage({ services }) {
  const { slug } = useParams();
  const [selectedService, setSelectedService] = useState(null);
  const { t } = useContext(LanguageContext);

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
      name: Yup.string().required(t['quote_name_required']),
      email: Yup.string().email(t['quote_email_invalid']).required(t['quote_email_required']),
      phone: Yup.string().required(t['quote_phone_required']),
      budget: Yup.number().required(t['quote_budget_required']).positive(t['quote_budget_positive']),
      location: Yup.string().required(t['quote_location_required']),
      message: Yup.string().required(t['quote_message_required']),
    }),
    onSubmit: values => {
      console.log(values);
      alert(t['quote_form_submitted']);
    },
  });

  if (!selectedService) {
    return (
      <section className="not-found">
        <Helmet>
          <title>{t['quote_service_not_found_title']} - Animaciones Moreno</title>
          <meta name="description" content={t['quote_service_not_found_message']} />
          <meta property="og:title" content={t['quote_service_not_found_title']} />
          <meta property="og:description" content={t['quote_service_not_found_message']} />
          <meta property="og:url" content={`https://animaciones-moreno-topaz.vercel.app/quote/${slug}`} />
          <meta property="og:type" content="website" />
          <link rel="canonical" href={`https://animaciones-moreno-topaz.vercel.app/quote/${slug}`} />
        </Helmet>
        <h1>{t['quote_service_not_found_title']}</h1>
        <p>{t['quote_service_not_found_message']}</p>
        <Link to="/" className="back-home">{t['quote_back_home']}</Link>
      </section>
    );
  }

  return (
    <main className="main-content">
      <Helmet>
        <title>{t['quote_page_title']} - {selectedService.name}</title>
        <meta name="description" content={`${t['quote_page_description']} ${selectedService.name}`} />
        <meta property="og:title" content={`${t['quote_page_title']} - ${selectedService.name}`} />
        <meta property="og:description" content={`${t['quote_page_description']} ${selectedService.name}`} />
        <meta property="og:url" content={`https://animaciones-moreno-topaz.vercel.app/quote/${slug}`} />
        <meta property="og:image" content={selectedService.image} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://animaciones-moreno-topaz.vercel.app/quote/${slug}`} />
      </Helmet>

      <section className="service-section">
        <figure className="service-image-placeholder">
          <img src={selectedService.image} alt={selectedService.name} />
        </figure>
        <section className="service-details">
          <h2>{selectedService.name.toUpperCase()}</h2>
          <p>{selectedService.description}</p>
          <h4>{t['quote_details_title']}</h4>
          {selectedService.menu.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </section>
      </section>
      
      <section className="form-section">
        <form className="appointment-form" onSubmit={formik.handleSubmit}>
          <select value={selectedService.name} disabled>
            <option>{selectedService.name}</option>
          </select>
          <input
            type="text"
            name="name"
            placeholder={t['quote_name_placeholder']}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <section className="error">{formik.errors.name}</section>
          ) : null}
          <input
            type="email"
            name="email"
            placeholder={t['quote_email_placeholder']}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <section className="error">{formik.errors.email}</section>
          ) : null}
          <input
            type="text"
            name="phone"
            placeholder={t['quote_phone_placeholder']}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <section className="error">{formik.errors.phone}</section>
          ) : null}
          <input
            type="number"
            name="budget"
            placeholder={t['quote_budget_placeholder']}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.budget}
          />
          {formik.touched.budget && formik.errors.budget ? (
            <section className="error">{formik.errors.budget}</section>
          ) : null}
          <input
            type="text"
            name="location"
            placeholder={t['quote_location_placeholder']}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.location}
          />
          {formik.touched.location && formik.errors.location ? (
            <section className="error">{formik.errors.location}</section>
          ) : null}
          <textarea
            name="message"
            placeholder={t['quote_message_placeholder']}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            rows="5"
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <section className="error">{formik.errors.message}</section>
          ) : null}
          <button type="submit">{t['quote_submit_button']}</button>
        </form>
      </section>
    </main>
  );
}

export default QuotePage;
