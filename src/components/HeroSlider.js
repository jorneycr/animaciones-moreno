import React, { useContext } from 'react';
import Slider from 'react-slick';
import './HeroSlider.css';
import { LanguageContext } from '../contexts/LanguageContext';

import hero1 from '../assets/images/home/hero1.jpg';
import hero2 from '../assets/images/home/hero2.jpg';
import hero3 from '../assets/images/home/hero3.jpg';


const HeroSlider = () => {
    const { t } = useContext(LanguageContext);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        fade: true,
    };

    const slides = [
        { src: hero1, alt: "Hero 1" },
        { src: hero2, alt: "Hero 2" },
        { src: hero3, alt: "Hero 3" },
    ];

    return (
        <Slider {...settings} className="hero-slider">
            {slides.map((slide, index) => (
                <section key={index}>
                    <section 
                        className="hero-slide" 
                        style={{ backgroundImage: `url(${slide.src})` }}
                    >
                        <section className="hero-text">{t['heroSlider_text']}</section>
                        <img src={slide.src} alt={slide.alt} style={{ display: 'block' }} />
                    </section>
                </section>
            ))}
        </Slider>
    );
};

export default HeroSlider;
