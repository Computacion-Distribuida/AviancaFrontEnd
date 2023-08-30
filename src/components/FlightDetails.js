import React from 'react';
import { useLocation } from 'react-router-dom';
import './styles/FlightDetails.css';

const FlightDetails = () => {
  const location = useLocation();
  const flights = location.state.flights;

  const { flightId } = location.state;

  const flight = flights.find((f) => f.id === flightId);

  const handleBuyClick = () => {
    //Aquí se haría el request para manejar la compra.
    console.log(flight);
  };

  if (!flight) {
    return <div>El vuelo no existe.</div>;
  }

  return (
    <div className="flight-details">
      <img src={flight.imagen.fields.file.url} alt={`Vuelo ${flight.imagen.fields.description}`} />
      <div className="flight-description">
        <h2>{flight.origen} → {flight.destino}</h2>
        <p>Fecha de Salida: {flight.fechaDeSalida}</p>
        <p>Precio: {flight.precio}</p>
        <button className="buy-button" onClick={handleBuyClick}>Comprar Tiquetes</button>
      </div>
    </div>
  );
};

export default FlightDetails;
