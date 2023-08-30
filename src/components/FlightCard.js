import React from 'react';
import { Link } from 'react-router-dom';
import './styles/FlightCard.css';

const FlightCard = ({ flight }) => {

  console.log(flight);

  return (
    <div className="flight-card">
      <img src={flight.imagen.fields.file.url} alt={`Vuelo ${flight.imagen.fields.description}`} />
      <h3>{flight.origen} → {flight.destino}</h3>
      <p>{flight.fechaDeSalida}</p>
      <p>{flight.precio}</p>
      <Link to={`/flight/${flight.id}`} className="buy-button">Comprar Ya</Link>
    </div>
  );
};

export default FlightCard;
