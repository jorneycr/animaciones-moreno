import React, { useContext } from 'react';
import './GalleryAll.css';
import { LanguageContext } from '../contexts/LanguageContext';

const images = [
    { id: 1, src: 'https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_1280.jpg', alt: 'Despedidas 1' },
    { id: 2, src: 'https://cdn.pixabay.com/photo/2018/07/04/00/19/champagne-3515140_1280.jpg', alt: 'Despedidas 2' },
    { id: 3, src: 'https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg', alt: 'Despedidas 3' },
    { id: 4, src: 'https://cdn.pixabay.com/photo/2021/04/13/02/28/wine-6174460_1280.jpg', alt: 'Despedidas 4' },
    { id: 5, src: 'https://media.istockphoto.com/id/1395305908/es/foto/grupo-de-ni%C3%B1os-y-profesor-jugando-con-el-paraca%C3%ADdas-arco-iris-del-parque-infantil-sobre-hierba.jpg?s=2048x2048&w=is&k=20&c=e9NA2sJcOjAAjJ6SH4e7GrxLMalMKJ1TuTsVMdz7F-8=', alt: 'Escolares 1' },
    { id: 6, src: 'https://cdn.pixabay.com/photo/2019/11/29/01/58/wedding-4660419_1280.jpg', alt: 'Escolares 2' },
    { id: 7, src: 'https://cdn.pixabay.com/photo/2017/10/10/00/03/child-2835430_1280.jpg', alt: 'Escolares 3' },
    { id: 8, src: 'https://cdn.pixabay.com/photo/2023/12/29/15/37/balloons-8476432_1280.jpg', alt: 'Escolares 4' },
    { id: 9, src: 'https://cdn.pixabay.com/photo/2016/06/29/04/39/wedding-dresses-1486005_960_720.jpg', alt: 'Bodas 1' },
    { id: 10, src: 'https://cdn.pixabay.com/photo/2016/03/27/18/53/drinks-1283608_1280.jpg', alt: 'Bodas 2' },
    { id: 11, src: 'https://cdn.pixabay.com/photo/2020/10/29/13/34/table-5696243_1280.jpg', alt: 'Bodas 3' },
    { id: 12, src: 'https://cdn.pixabay.com/photo/2014/11/13/17/04/heart-529607_1280.jpg', alt: 'Bodas 4' },
    { id: 13, src: 'https://cdn.pixabay.com/photo/2023/01/18/14/39/family-7727035_1280.jpg', alt: 'Familiares 1' },
    { id: 14, src: 'https://cdn.pixabay.com/photo/2017/06/23/04/49/beach-2433476_960_720.jpg', alt: 'Familiares 2' },
    { id: 15, src: 'https://media.istockphoto.com/id/1464173078/es/foto/fiesta-en-el-jard%C3%ADn.jpg?s=2048x2048&w=is&k=20&c=w47OFH3iucSmiUJNpFCg0p48ifYbHokSvXT6WKlLRUo=', alt: 'Familiares 3' },
    { id: 16, src: 'https://cdn.pixabay.com/photo/2019/09/15/10/27/family-4477874_1280.jpg', alt: 'Familiares 4' },
    { id: 17, src: 'https://cdn.pixabay.com/photo/2015/10/18/19/04/graduation-995042_960_720.jpg', alt: 'Graduaciones 1' },
    { id: 18, src: 'https://cdn.pixabay.com/photo/2021/12/27/16/40/sylvester-6897648_1280.jpg', alt: 'Graduaciones 2' },
    { id: 19, src: 'https://cdn.pixabay.com/photo/2016/06/11/05/18/graduation-1449488_1280.jpg', alt: 'Graduaciones 3' },
    { id: 20, src: 'https://cdn.pixabay.com/photo/2018/04/15/18/02/books-3322275_960_720.jpg', alt: 'Graduaciones 4' },
    { id: 21, src: 'https://cdn.pixabay.com/photo/2020/03/05/16/07/happy-birthday-4904779_1280.jpg', alt: 'Cumpleaños 1' },
    { id: 22, src: 'https://cdn.pixabay.com/photo/2017/07/27/12/31/party-2545168_960_720.jpg', alt: 'Cumpleaños 2' },
    { id: 23, src: 'https://cdn.pixabay.com/photo/2021/04/13/02/28/wine-6174460_1280.jpg', alt: 'Cumpleaños 3' },
    { id: 24, src: 'https://cdn.pixabay.com/photo/2023/06/21/20/05/party-8080105_1280.jpg', alt: 'Cumpleaños 4' }
];

const GalleryAll = () => {
    const { t } = useContext(LanguageContext);

    return (
        <section className="gallery">
            <h1>{t['gallery_all_title']}</h1>
            <section className="image-grid">
                {images.map(image => (
                    <img key={image.id} src={image.src} alt={image.alt} />
                ))}
            </section>
        </section>
    );
};

export default GalleryAll;
