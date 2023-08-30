import React from 'react';
import './styles/Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li><a href="/">Vuelos</a></li>
        <li><a href="/repuestos">Repuestos</a></li>
        <li><a href="/">Tiquetes</a></li>
        <li><a href="/">Soporte</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;