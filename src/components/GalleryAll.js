import React, { useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './GalleryAll.css';
import { LanguageContext } from '../contexts/LanguageContext';
import Bodas1 from '../assets/images/gallery/Bodas1.jpg';
import Bodas2 from '../assets/images/gallery/Bodas2.jpg';
import Cumpleaños1 from '../assets/images/gallery/Cumpleaños1.jpg';
import Cumpleaños2 from '../assets/images/gallery/Cumpleaños2.jpg';
import Escolares1 from '../assets/images/gallery/Escolares1.jpg';
import Escolares2 from '../assets/images/gallery/Escolares2.jpg';
import Despedidas1 from '../assets/images/gallery/Despedidas1.jpg';
import Despedidas2 from '../assets/images/gallery/Despedidas2.jpg';
import Familiares1 from '../assets/images/gallery/Familiares1.jpg';
import Familiares2 from '../assets/images/gallery/Familiares2.jpg';
import Graduaciones1 from '../assets/images/gallery/Graduaciones1.jpg';
import Graduaciones2 from '../assets/images/gallery/Graduaciones2.jpg';


const images = [
    { id: 1, src: Despedidas1, alt: 'Despedidas 1' },
    { id: 2, src: Despedidas2, alt: 'Despedidas 2' },
    { id: 6, src: Escolares1, alt: 'Escolares 1' },
    { id: 7, src: Escolares2, alt: 'Escolares 2' },
    { id: 9, src: Bodas1, alt: 'Bodas 1' },
    { id: 10, src: Bodas2, alt: 'Bodas 2' },
    { id: 13, src: Familiares1, alt: 'Familiares 1' },
    { id: 14, src: Familiares2, alt: 'Familiares 2' },
    { id: 17, src: Graduaciones1, alt: 'Graduaciones 1' },
    { id: 18, src: Graduaciones2, alt: 'Graduaciones 2' },
    { id: 21, src: Cumpleaños1, alt: 'Cumpleaños 1' },
    { id: 22, src: Cumpleaños2, alt: 'Cumpleaños 2' },
];

const GalleryAll = () => {
    const { t } = useContext(LanguageContext);

    return (
        <section className="gallery">
            <h1>{t['gallery_all_title']}</h1>
            <section className="image-grid">
                {images.map(image => (
                    <LazyLoadImage
                        key={image.id}
                        src={image.src}
                        alt={image.alt}
                        effect="blur"
                        className="gallery-image"
                    />
                ))}
            </section>
        </section>
    );
};

export default GalleryAll;
