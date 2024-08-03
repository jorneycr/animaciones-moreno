import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import './About.css';

function About() {
  const { t } = useContext(LanguageContext);

  return (
    <main className="about-page">
      <section className="about-section">
        <h3 style={{ textAlign: 'center' }}>{t['about_title']}</h3>
        <p>{t['about_intro']}</p>
        <h4 style={{ textAlign: 'center' }}>{t['about_mission_title']}</h4>
        <p>{t['about_mission']}</p>
        <h4 style={{ textAlign: 'center' }}>{t['about_vision_title']}</h4>
        <p>{t['about_vision']}</p>
      </section>
    </main>
  );
}

export default About;
