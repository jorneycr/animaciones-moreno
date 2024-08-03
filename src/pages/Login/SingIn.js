import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const SignInForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Correo electrónico no es válido")
      .required("Correo electrónico es requerido"),
    password: Yup.string()
      .required("Contraseña es requerida"),
  });

  const onSubmit = (values, { resetForm }) => {
    alert(`Has iniciado sesión con el email: ${values.email} y la contraseña: ${values.password}`);
    resetForm();
  };

  return (
    <section className="form-container sign-in-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <h1>Iniciar sesión</h1>
          <Field
            type="email"
            name="email"
            placeholder="Correo electrónico"
          />
          <ErrorMessage name="email" component="div" />
          <Field
            type="password"
            name="password"
            placeholder="Contraseña"
          />
          <ErrorMessage name="password" component="div" />
          <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
          <button type="submit">Iniciar sesión</button>
        </Form>
      </Formik>
    </section>
  );
};

export default SignInForm;
