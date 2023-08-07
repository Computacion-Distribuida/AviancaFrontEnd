import React from 'react';
import './styles/Login.css';

function Login() {
  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form className='login-form'>
        <label>Correo Electrónico</label>
        <input type="email" />
        <label>Contraseña</label>
        <input type="password" />
        <button className="login-button">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
