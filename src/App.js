import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Asegúrate de importar 'Routes'
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Promotions from './components/Promotions';
import FlightSearch from './components/FlightSearch';
import Login from './components/Login'; // Importa el componente Login
import Register from './components/Register'; // Importa el componente Register

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Promotions />} />
          <Route path="/buscar" element={<FlightSearch />} />
          <Route path="/iniciar-sesion" element={<Login />} /> {/* Ruta para Iniciar Sesión */}
          <Route path="/registro" element={<Register />} /> {/* Ruta para Registro */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
