import React from 'react';
import './Gallery.css';

const images = [
    { id: 1, src: 'path/to/image1.jpg', alt: 'Evento 1' },
    { id: 2, src: 'path/to/image2.jpg', alt: 'Evento 2' },
    { id: 3, src: 'path/to/image3.jpg', alt: 'Evento 3' },
    // Agrega más imágenes según sea necesario
];

const Gallery = () => {
    return (
        <div className="gallery">
            <h1>Galería de Eventos</h1>
            <div className="image-grid">
                {images.map(image => (
                    <img key={image.id} src={image.src} alt={image.alt} />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
