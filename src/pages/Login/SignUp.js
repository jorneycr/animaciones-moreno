import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LanguageContext } from "../../contexts/LanguageContext";

const SignUpForm = () => {
  const { t } = useContext(LanguageContext);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required(t['sign_up_name_required']),
    email: Yup.string()
      .email(t['sign_up_email_invalid'])
      .required(t['sign_up_email_required']),
    password: Yup.string()
      .min(6, t['sign_up_password_min'])
      .required(t['sign_up_password_required']),
  });

  const onSubmit = (values, { resetForm }) => {
    alert(`${t['sign_up_success']} ${t['sign_up_name']}: ${values.name}, ${t['sign_up_email']}: ${values.email}`);
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
          <h1>{t['sign_up_title']}</h1>
          <Field
            type="text"
            name="name"
            placeholder={t['sign_up_name_placeholder']}
          />
          <ErrorMessage name="name" component="div" />
          <Field
            type="email"
            name="email"
            placeholder={t['sign_up_email_placeholder']}
          />
          <ErrorMessage name="email" component="div" />
          <Field
            type="password"
            name="password"
            placeholder={t['sign_up_password_placeholder']}
          />
          <ErrorMessage name="password" component="div" />
          <button className="inicioSeccion" type="submit">{t['sign_up_button']}</button>
        </Form>
      </Formik>
    </section>
  );
};

export default SignUpForm;
