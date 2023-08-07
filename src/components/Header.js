import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';
import aviancaLogo from '../assets/logo-av-white.svg';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={aviancaLogo} alt="Avianca" />
        </Link>
      </div>
      <div className="user-actions">
        <Link to="/iniciar-sesion">Iniciar sesión</Link>
        <Link to="/registro">Registrarse</Link>
      </div>
    </header>
  );
}

export default Header;
