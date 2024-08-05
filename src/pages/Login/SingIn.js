import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from '../../contexts/UserContext';
import { LanguageContext } from "../../contexts/LanguageContext";
import users from '../../data/Users';

const SignInForm = () => {
  const { t } = useContext(LanguageContext);
  const { setUser } = useUser();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t['sign_in_email_invalid'])
      .required(t['sign_in_email_required']),
    password: Yup.string()
      .required(t['sign_in_password_required']),
  });

  const onSubmit = (values, { resetForm }) => {
    const user = users.find(user => user.email === values.email && user.password === values.password);
    if (user) {
      setUser(user);
      alert(`${t['sign_in_success']} ${user.user}`);
      navigate("/settings"); // Redirecciona a /settings
    } else {
      alert(t['sign_in_invalid_credentials']);
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
          <h1>{t['sign_in_title']}</h1>
          <Field
            type="email"
            name="email"
            placeholder={t['sign_in_email_placeholder']}
          />
          <ErrorMessage name="email" component="div" />
          <Field
            type="password"
            name="password"
            placeholder={t['sign_in_password_placeholder']}
          />
          <ErrorMessage name="password" component="div" />
          <Link className="forgotPassword" to="/forgot-password">{t['sign_in_forgot_password']}</Link>
          <button className="inicioSeccion" type="submit">{t['sign_in_button']}</button>
        </Form>
      </Formik>
    </section>
  );
};

export default SignInForm;
