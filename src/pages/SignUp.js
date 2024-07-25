import React from "react";

function SignUpForm() {
  const [state, setState] = React.useState({
    name: "",
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

    const { name, email, password } = state;
    alert(`Te has registrado con nombre: ${name}, correo electrónico: ${email}, y contraseña: ${password}`);

    setState({
      name: "",
      email: "",
      password: ""
    });
  };

  return (
    <section className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Crear Cuenta</h1>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Nombre"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Correo Electrónico"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Contraseña"
        />
        <button type="submit">Registrarse</button>
      </form>
    </section>
  );
}

export default SignUpForm;
