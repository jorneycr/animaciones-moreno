import React, { useState, useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Reviews.css';
import { LanguageContext } from '../contexts/LanguageContext';
import { useUser } from '../contexts/UserContext';

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
    const { t } = useContext(LanguageContext);
    const { user } = useUser();

    const initialValues = {
        name: '',
        comment: '',
        rating: 0
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(2, t['reviews_nameShort'])
            .max(50, t['reviews_nameLong'])
            .required(t['reviews_nameRequired']),
        comment: Yup.string()
            .min(10, t['reviews_commentShort'])
            .max(300, t['reviews_commentLong'])
            .required(t['reviews_commentRequired']),
        rating: Yup.number()
            .min(1, t['reviews_ratingRequired'])
            .max(5, t['reviews_ratingMax'])
            .required(t['reviews_ratingRequired'])
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
        <section className="review-container">
            <h1>{t['reviews_title']}</h1>
            {reviewsList.map(review => (
                <section className="review-item" key={review.id}>
                    <h3>{review.name}</h3>
                    <p className="review-item-date">{review.date}</p>
                    <section className="rating">
                        {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                    </section>
                    <p>{review.comment}</p>
                </section>
            ))}
            {user && (user.role === "admin" || user.role === "coordinador" || user.role === "cliente") && (
                <section className='buttonReview'>
                    <button className="review-add-button" onClick={() => setShowModal(true)}>
                        {t['reviews_addButton']}
                    </button>
                </section>
            )}


            {showModal && (
                <section className="modal-review">
                    <section className="modal-content">
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
                                    <section className="review-form-group">
                                        <label htmlFor="name" className="review-form-label">{t['reviews_name']}</label>
                                        <Field name="name" type="text" className="review-form-input" />
                                        <ErrorMessage name="name" component="div" className="review-form-error" />
                                    </section>
                                    <section className="review-form-group">
                                        <label htmlFor="rating" className="review-form-label">{t['reviews_rating']}</label>
                                        <Field as="select" name="rating" className="review-form-input">
                                            <option value="">{t['reviews_selectRating']}</option>
                                            {[1, 2, 3, 4, 5].map(star => (
                                                <option key={star} value={star}>{star}</option>
                                            ))}
                                        </Field>
                                        <ErrorMessage name="rating" component="div" className="review-form-error" />
                                    </section>
                                    <section className="review-form-group">
                                        <label htmlFor="comment" className="review-form-label">{t['reviews_comment']}</label>
                                        <Field name="comment" as="textarea" className="review-form-textarea" />
                                        <ErrorMessage name="comment" component="div" className="review-form-error" />
                                    </section>
                                    <section className='buttonModal'>
                                        <button type="submit" className="review-submit-button">{t['reviews_submitButton']}</button>
                                        <button type="button" className="review-cancel-button" onClick={() => setShowModal(false)}>{t['reviews_cancelButton']}</button>
                                    </section>
                                </Form>
                            )}
                        </Formik>
                    </section>
                </section>
            )}
        </section>
    );
};

export default Reviews;
