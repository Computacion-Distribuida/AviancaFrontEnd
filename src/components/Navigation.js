import React from 'react';
import './styles/Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li><a href="#">Vuelos</a></li>
        <li><a href="#">Promociones</a></li>
        <li><a href="#">Destinos</a></li>
        <li><a href="#">Check-in</a></li>
        <li><a href="#">Más</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;