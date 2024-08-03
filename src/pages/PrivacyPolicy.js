import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import "./termsAndPrivacy.css";

const PrivacyPolicy = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section className="privacy-policy">
      <h1 style={{textAlign:'center'}}>{t['privacy_policy_title']}</h1>
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
  );
};

export default PrivacyPolicy;
