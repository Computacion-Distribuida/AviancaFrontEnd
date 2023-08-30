import React from 'react';
import './styles/Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        {/* <li><a href="/">Vuelos</a></li> */}
        <Link to="/">Vuelos</Link>
        <Link to="/repuestos">Repuestos</Link>
        <Link to="/">Tiquetes</Link>
        <Link to="/">Soporte</Link>
      </ul>
    </nav>
  );
}

export default Navigation;