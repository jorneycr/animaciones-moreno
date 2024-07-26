import React from "react";

function ForgotPasswordForm({ onBackToLogin }) {
  const [email, setEmail] = React.useState("");

  const handleChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    alert(`Se ha enviado un correo para restablecer la contraseña a: ${email}`);
    setEmail("");
  };

  return (
    <section className="form-container forgot-password-container">
      <form onSubmit={handleOnSubmit}>
        <h1>¿Olvidaste tu contraseña?</h1>
        <p>Ingresa tu correo electrónico y te enviaremos instrucciones para restablecer tu contraseña.</p>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Correo electrónico"
          required
        />
        <button type="submit">Enviar</button>
        <button type="button" onClick={onBackToLogin} className="ghost">
          Volver a Iniciar sesión
        </button>
      </form>
    </section>
  );
}

export default ForgotPasswordForm;
