import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from '../../contexts/UserContext';
import users from '../../data/Users';

const SignInForm = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

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
    const user = users.find(user => user.email === values.email && user.password === values.password);
    if (user) {
      setUser(user);
      alert(`Has iniciado sesión como: ${user.user}`);
      navigate("/settings"); // Redirecciona a /settings
    } else {
      alert('Credenciales inválidas');
    }
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
          <Link className="forgotPassword" to="/forgot-password">¿Olvidaste tu contraseña?</Link>
          <button  className="inicioSeccion" type="submit">Iniciar sesión</button>
        </Form>
      </Formik>
    </section>
  );
};

export default SignInForm;
