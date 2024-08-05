import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";
import { LanguageContext } from "../../contexts/LanguageContext";

const ForgotPassword = ({ onBackToLogin }) => {
  const { t } = useContext(LanguageContext);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(t['forgot_password_email_invalid'])
        .required(t['forgot_password_email_required']),
    }),
    onSubmit: (values) => {
      alert(`${t['forgot_password_email_sent']} ${values.email}`);
      formik.resetForm();
    },
  });

  return (
    <section className="forgot-password-form-container">
      <form onSubmit={formik.handleSubmit} className="forgot-password-form">
        <h1 className="forgot-password-title">{t['forgot_password_title']}</h1>
        <p className="forgot-password-text">
          {t['forgot_password_instruction']}
        </p>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder={t['forgot_password_email_placeholder']}
          className="forgot-password-input"
          required
        />
        {formik.touched.email && formik.errors.email ? (
          <section className="forgot-password-error">{formik.errors.email}</section>
        ) : null}
        <button type="submit" className="forgot-password-button">
          {t['forgot_password_submit_button']}
        </button>
        <button type="button" onClick={onBackToLogin} className="forgot-password-ghost-button">
          <Link to="/login" className="forgot-password-link">{t['forgot_password_back_to_login']}</Link>
        </button>
      </form>
    </section>
  );
};

export default ForgotPassword;
