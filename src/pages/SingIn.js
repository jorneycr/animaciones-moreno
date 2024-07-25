import React from "react";
import { Link } from "react-router-dom";

function SignInForm() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    const { email, password } = state;
    alert(`Has iniciado sesión con el email: ${email} y la contraseña: ${password}`);

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <section className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Iniciar sesión</h1>
        <input
          type="email"
          placeholder="Correo electrónico"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={state.password}
          onChange={handleChange}
        />
        <Link to="#">¿Olvidaste tu contraseña?</Link>
        <button type="submit">Iniciar sesión</button>
      </form>
    </section>
  );
}

export default SignInForm;
