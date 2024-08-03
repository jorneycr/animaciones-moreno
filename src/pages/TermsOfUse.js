import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import "./termsAndPrivacy.css";

const TermsOfUse = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section className="terms-of-use">
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
