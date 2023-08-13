import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Content from './components/Content';



function App() {
  return (
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
  );
}

export default App;