import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Content from './components/Content';
import ErrorBoundary from './components/errors/ErrorBoundary';


function App() {

  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/iniciar-sesion" element={<Login />} />
            <Route path="/registro" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
    
  );
}

export default App;