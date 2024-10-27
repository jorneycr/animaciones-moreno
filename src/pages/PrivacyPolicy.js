import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { LanguageContext } from '../contexts/LanguageContext';
import "./termsAndPrivacy.css";

const PrivacyPolicy = () => {
  const { t } = useContext(LanguageContext);

  return (
    <>
      <Helmet>
        <title>{t['privacy_policy_title']} - Animaciones Moreno</title>
        <meta name="description" content={t['privacy_policy_intro']} />
        <meta property="og:title" content={t['privacy_policy_title']} />
        <meta property="og:description" content={t['privacy_policy_intro']} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://animaciones-moreno-topaz.vercel.app/privacy-policy" />
        <link rel="canonical" href="https://animaciones-moreno-topaz.vercel.app/privacy-policy" />
      </Helmet>

      <section className="privacy-policy">
        <h1 style={{ textAlign: 'center' }}>{t['privacy_policy_title']}</h1>
        <p>{t['privacy_policy_intro']}</p>

        <h2>{t['privacy_policy_section_1_title']}</h2>
        <p>{t['privacy_policy_section_1_content']}</p>

        <h2>{t['privacy_policy_section_2_title']}</h2>
        <p>{t['privacy_policy_section_2_content']}</p>

        <h2>{t['privacy_policy_section_3_title']}</h2>
        <p>{t['privacy_policy_section_3_content']}</p>

        <h2>{t['privacy_policy_section_4_title']}</h2>
        <p>{t['privacy_policy_section_4_content']}</p>

        <p>{t['privacy_policy_last_update']}</p>
      </section>
    </>
  );
};

export default PrivacyPolicy;
