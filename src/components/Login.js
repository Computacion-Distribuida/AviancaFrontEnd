import React from 'react';
import './styles/Login.css';
import { Auth } from 'aws-amplify';
function Login() {
  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    console.log('user: ', user);
  }
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
      <button onClick={()=> Auth.federatedSignIn({
        provider: 'Facebook'
      })}>FACEBOOK</button>
            <button onClick={()=> Auth.federatedSignIn({
        provider: 'GOOGLE'
      })}>GOOGLE</button>
      <button onClick={checkUser}>Check User</button>
    </div>
  );
}

export default Login;
