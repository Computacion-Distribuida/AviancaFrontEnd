import React from 'react';
import './styles/Header.css';
import aviancaLogo from '../assets/logo-av-white.svg';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={aviancaLogo} alt="Avianca" />
      </div>
      <div className="user-actions">
        <a href="#">Iniciar sesión</a>
        <a href="#">Registrarse</a>
      </div>
    </header>
  );
}

export default Header;