import React, { useState } from "react";
import "./Login.css";
import SignInForm from "./SingIn";
import SignUpForm from "./SignUp";

function Login() {
  const [type, setType] = useState("signIn");

  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
    }
  };

  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");

  return (
    <section className="login">
      <section className={containerClass} id="container">
        <SignUpForm />
        <SignInForm />
        <aside className="overlay-container">
          <section className="overlay">
            <section className="overlay-panel overlay-left">
              <h1 style={{color:'#FFF'}}>¡Bienvenido de nuevo!</h1>
              <p style={{color:'#FFF'}}>
                Para mantenerte conectado con nosotros, por favor inicia sesión con tu información personal.
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Iniciar sesión
              </button>
            </section>
            <section className="overlay-panel overlay-right">
              <h1 style={{color:'#FFF'}}>¡Hola, amigo!</h1>
              <p style={{color:'#FFF'}}>Ingresa tus datos personales y comienza tu viaje con nosotros.</p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Registrarse
              </button>
            </section>
          </section>
        </aside>
      </section>
    </section>
  );
}

export default Login;
