import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import './About.css';
import { Helmet } from "react-helmet";

function About() {
  const { t } = useContext(LanguageContext);

  return (
    <main className="about-page">
      {/* Helmet para SEO */}
      <Helmet>
        <title>{t['about_title']} - Animaciones Moreno</title>
        <meta name="description" content={t['about_intro']} />
        <meta property="og:title" content={t['about_title']} />
        <meta property="og:description" content={t['about_intro']} />
        <meta property="og:url" content="https://animaciones-moreno-topaz.vercel.app/about" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://animaciones-moreno-topaz.vercel.app/about" />
      </Helmet>

      {/* Contenido de la página */}
      <section className="about-section">
        <h1 style={{ textAlign: 'center' }}>{t['about_title']}</h1>
        <p>{t['about_intro']}</p>

        <h2 style={{ textAlign: 'center' }}>{t['about_mission_title']}</h2>
        <p>{t['about_mission']}</p>

        <h2 style={{ textAlign: 'center' }}>{t['about_vision_title']}</h2>
        <p>{t['about_vision']}</p>
      </section>
    </main>
  );
}

export default About;
