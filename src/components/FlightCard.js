import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/FlightCard.css';

const FlightCard = ({ flight, flights }) => {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate(`/flight/${flight.id}`, { state: { flights, flightId: flight.id } });
  };  

  return (
    <div className="flight-card">
      <img src={flight.imagen.fields.file.url} alt={`Vuelo ${flight.imagen.fields.description}`} />
      <h3>{flight.origen} → {flight.destino}</h3>
      <p>{flight.fechaDeSalida}</p>
      <p>{flight.precio}</p>
      <button onClick={handleBuyClick}>Comprar Ya</button>
    </div>
  );
};

export default FlightCard;
