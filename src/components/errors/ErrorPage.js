import React from 'react';
import './styles/ErrorPage.css';
import aviancaLogo from '../../assets/logo-av-red.svg';

function ErrorPage() {
  const goHome = () => {
    window.location.reload()
  }
  return (
    <div className="error-page">
      <img src={aviancaLogo} alt="Avianca Logo" className="error-logo" />
      <h1>¡Ups! Algo salió mal</h1>
      <p>Lo sentimos, ocurrió un error inesperado.</p>
      <p>Por favor, intenta nuevamente más tarde.</p>
      <button onClick={goHome}>Volver</button>
    </div>
  );
}

export default ErrorPage;
