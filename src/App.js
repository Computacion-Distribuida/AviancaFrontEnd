import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Content from './components/Content';
import ErrorBoundary from './components/errors/ErrorBoundary';
import SparePartsModule from './components/SparePartsModule';
import Navigation from './components/Navigation';


function App() {

  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Header />
          <Navigation />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/repuestos" element={<SparePartsModule />} />
            <Route path="/iniciar-sesion" element={<Login />} />
            <Route path="/registro" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
    
  );
}

export default App;