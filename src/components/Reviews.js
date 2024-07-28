import React from 'react';
import './Reviews.css';

const reviews = [
    { id: 1, name: 'Juan Pérez', comment: '¡Excelente servicio!' },
    { id: 2, name: 'Ana Gómez', comment: 'Muy profesionales y amables.' },
    { id: 3, name: 'Carlos Martínez', comment: 'Altamente recomendado.' },
    // Agrega más reseñas según sea necesario
];

const Reviews = () => {
    return (
        <div className="reviews">
            <h1>Reseñas de Clientes</h1>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <h3>{review.name}</h3>
                        <p>{review.comment}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Reviews;
