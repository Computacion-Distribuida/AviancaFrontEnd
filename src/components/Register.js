import React from 'react';
import './styles/Register.css';

function Register() {
  return (
    <div className="register-container">
      <h2>Registro</h2>
      <form>
        <label>Nombre Completo</label>
        <input type="text" />
        <label>Correo Electrónico</label>
        <input type="email" />
        <label>Contraseña</label>
        <input type="password" />
        <label>Confirmar Contraseña</label>
        <input type="password" />
        <button className="register-button">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
