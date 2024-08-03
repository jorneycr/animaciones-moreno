import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = ({ onBackToLogin }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Formato de correo electrónico inválido")
        .required("El correo electrónico es obligatorio"),
    }),
    onSubmit: (values) => {
      alert(`Se ha enviado un correo para restablecer la contraseña a: ${values.email}`);
      formik.resetForm();
    },
  });

  return (
    <section className="forgot-password-form-container">
      <form onSubmit={formik.handleSubmit} className="forgot-password-form">
        <h1 className="forgot-password-title">¿Olvidaste tu contraseña?</h1>
        <p className="forgot-password-text">
          Ingresa tu correo electrónico y te enviaremos instrucciones para restablecer tu contraseña.
        </p>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Correo electrónico"
          className="forgot-password-input"
          required
        />
        {formik.touched.email && formik.errors.email ? (
          <section className="forgot-password-error">{formik.errors.email}</section>
        ) : null}
        <button type="submit" className="forgot-password-button">
          Enviar
        </button>
        <button type="button" onClick={onBackToLogin} className="forgot-password-ghost-button">
          <Link to="/login" className="forgot-password-link">Volver a Iniciar sesión</Link>
        </button>
      </form>
    </section>
  );
};

export default ForgotPassword;
