import React from 'react';
import './styles/Login.css';
import { Auth } from 'aws-amplify';
function Login() {
  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log('user: ', user);
    } catch (error) {
      console.log('error: ', error);
    }
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
      <button onClick={()=> Auth.federatedSignIn()}>normal</button>
      <button onClick={checkUser}>Check User</button>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default Login;
