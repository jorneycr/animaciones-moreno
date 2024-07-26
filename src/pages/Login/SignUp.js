import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Nombre es requerido"),
    email: Yup.string()
      .email("Correo electrónico no es válido")
      .required("Correo electrónico es requerido"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("Contraseña es requerida"),
  });

  const onSubmit = (values, { resetForm }) => {
    alert(`Te has registrado con nombre: ${values.name}, correo electrónico: ${values.email}, y contraseña: ${values.password}`);
    resetForm();
  };

  return (
    <section className="form-container sign-up-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <h1>Crear Cuenta</h1>
          <Field
            type="text"
            name="name"
            placeholder="Nombre"
          />
          <ErrorMessage name="name" component="div" />
          <Field
            type="email"
            name="email"
            placeholder="Correo Electrónico"
          />
          <ErrorMessage name="email" component="div" />
          <Field
            type="password"
            name="password"
            placeholder="Contraseña"
          />
          <ErrorMessage name="password" component="div" />
          <button type="submit">Registrarse</button>
        </Form>
      </Formik>
    </section>
  );
};

export default SignUpForm;
