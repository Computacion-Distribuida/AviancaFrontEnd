import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';
import aviancaLogo from '../assets/logo-av-white.svg';
import { Auth } from 'aws-amplify';

function Header(props) {
  const {isLoggedIn} = props
  

  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  // function logIn () {
  //   Auth.federatedSignIn()
  //   window.location.reload();
  // }


  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={aviancaLogo} alt="Avianca" />
        </Link>
      </div>
      <div className="user-actions">
        {/* <Link to="/iniciar-sesion">Iniciar sesión</Link>
        <Link to="/registro">Registrarse</Link> */}

        {!isLoggedIn && (
          <>
            <button onClick={()=> Auth.federatedSignIn()}>Iniciar Sesión</button>
            <button onClick={()=> Auth.federatedSignIn()}>Registrarse</button>
          </>

        )}

        {isLoggedIn && (
          <>
            <button onClick={signOut}>Cerrar Sesión</button>
          </>

        )}
        
      </div>
    </header>
  );
}

export default Header;
