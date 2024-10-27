import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { LanguageContext } from '../contexts/LanguageContext';
import "./termsAndPrivacy.css";

const TermsOfUse = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section className="terms-of-use">
      <Helmet>
        <title>{t['terms_of_use_title']} - Animaciones Moreno</title>
        <meta name="description" content={t['terms_of_use_intro']} />
        <meta property="og:title" content={t['terms_of_use_title']} />
        <meta property="og:description" content={t['terms_of_use_intro']} />
        <meta property="og:url" content="https://animaciones-moreno-topaz.vercel.app/terms-of-use" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://animaciones-moreno-topaz.vercel.app/terms-of-use" />
      </Helmet>

      <h1 style={{textAlign:'center'}}>{t['terms_of_use_title']}</h1>
      <p>{t['terms_of_use_intro']}</p>
      
      <h2>{t['terms_of_use_section_1_title']}</h2>
      <p>{t['terms_of_use_section_1_content']}</p>
      
      <h2>{t['terms_of_use_section_2_title']}</h2>
      <p>{t['terms_of_use_section_2_content']}</p>

      <h2>{t['terms_of_use_section_3_title']}</h2>
      <p>{t['terms_of_use_section_3_content']}</p>
      
      <p>{t['terms_of_use_last_update']}</p>
    </section>
  );
};

export default TermsOfUse;
