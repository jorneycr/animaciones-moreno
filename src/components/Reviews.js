import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Reviews.css';

const reviewsData = [
  {
    id: 1,
    name: "Ana García",
    date: "20 de Julio, 2024",
    comment: "Me encantó el evento, todo estuvo perfecto y muy bien organizado.",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Fernández",
    date: "18 de Julio, 2024",
    comment: "Excelente servicio, muy profesionales. Recomendado al 100%.",
    rating: 4,
  },
  {
    id: 3,
    name: "Laura Pérez",
    date: "15 de Julio, 2024",
    comment: "Una experiencia inolvidable, el equipo hizo un trabajo fantástico.",
    rating: 5,
  },
];

const Reviews = () => {
  const [reviewsList, setReviews] = useState(reviewsData);
  const [showModal, setShowModal] = useState(false);

  const initialValues = {
    name: '',
    comment: '',
    rating: 0
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'El nombre es demasiado corto')
      .max(50, 'El nombre es demasiado largo')
      .required('El nombre es requerido'),
    comment: Yup.string()
      .min(10, 'El comentario es demasiado corto')
      .max(300, 'El comentario es demasiado largo')
      .required('El comentario es requerido'),
    rating: Yup.number()
      .min(1, 'La calificación es requerida')
      .max(5, 'La calificación máxima es 5')
      .required('La calificación es requerida')
  });

  const onSubmit = (values, { resetForm }) => {
    const newReview = {
      id: reviewsList.length + 1,
      name: values.name,
      date: new Date().toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      comment: values.comment,
      rating: values.rating
    };
    setReviews([...reviewsList, newReview]);
    setShowModal(false);
    resetForm();
  };

  return (
    <div className="review-container">
      <h1>Reseñas</h1>
      {reviewsList.map(review => (
        <div className="review-item" key={review.id}>
          <h3>{review.name}</h3>
          <p className="review-item-date">{review.date}</p>
          <div className="rating">
            {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
          </div>
          <p>{review.comment}</p>
        </div>
      ))}
      <button className="review-add-button" onClick={() => setShowModal(true)}>
        Agregar Reseña
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {() => (
                <Form className="review-form">
                  <div className="review-form-group">
                    <label htmlFor="name" className="review-form-label">Nombre</label>
                    <Field name="name" type="text" className="review-form-input"/>
                    <ErrorMessage name="name" component="div" className="review-form-error"/>
                  </div>
                  <div className="review-form-group">
                    <label htmlFor="rating" className="review-form-label">Calificación</label>
                    <Field as="select" name="rating" className="review-form-input">
                      <option value="">Seleccione una calificación</option>
                      {[1, 2, 3, 4, 5].map(star => (
                        <option key={star} value={star}>{star}</option>
                      ))}
                    </Field>
                    <ErrorMessage name="rating" component="div" className="review-form-error"/>
                  </div>
                  <div className="review-form-group">
                    <label htmlFor="comment" className="review-form-label">Comentario</label>
                    <Field name="comment" as="textarea" className="review-form-textarea"/>
                    <ErrorMessage name="comment" component="div" className="review-form-error"/>
                  </div>
                  <button type="submit" className="review-submit-button">Enviar</button>
                  <button type="button" className="review-cancel-button" onClick={() => setShowModal(false)}>Cancelar</button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
