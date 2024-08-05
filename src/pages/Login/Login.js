import React, { useState, useContext } from "react";
import "./Login.css";
import SignInForm from "./SingIn";
import SignUpForm from "./SignUp";
import { LanguageContext } from "../../contexts/LanguageContext";

function Login() {
  const { t } = useContext(LanguageContext);
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
              <h1 style={{color:'#FFF'}}>{t['login_welcome_back']}</h1>
              <p style={{color:'#FFF'}}>
                {t['login_persistent']}
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                {t['login_sign_in']}
              </button>
            </section>
            <section className="overlay-panel overlay-right">
              <h1 style={{color:'#FFF'}}>{t['login_hello']}</h1>
              <p style={{color:'#FFF'}}>{t['login_start_journey']}</p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                {t['login_sign_up']}
              </button>
            </section>
          </section>
        </aside>
      </section>
    </section>
  );
}

export default Login;
