import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React, { useEffect, useState } from "react";
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Content from './components/Content';
import ErrorBoundary from './components/errors/ErrorBoundary';
import SparePartsModule from './components/SparePartsModule';
import Navigation from './components/Navigation';
import { Auth } from 'aws-amplify';
import FlightDetails from './components/FlightDetails';
import FlightCatalog from './components/FlightCatalog';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    async function checkUser() {
      try {
        await new Promise(resolve => setTimeout(resolve, 3500));
        const user = await Auth.currentAuthenticatedUser();
        console.log('user: ', user);
        setIsLoggedIn(true)
      } catch (error) {
        console.log('error: ', error);
      }
    
    }
    checkUser()
    
  }, []);
  
  console.log(isLoggedIn)


  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Header isLoggedIn = {isLoggedIn} />
          <Navigation />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/repuestos" element={<SparePartsModule />} />
            <Route path="/flight/:flightId" element={<FlightDetails />} />
            <Route path="/vuelos" element={<FlightCatalog />} />
            <Route path="/iniciar-sesion" element={<Login />} />
            <Route path="/registro" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
    
  );
}

export default App;