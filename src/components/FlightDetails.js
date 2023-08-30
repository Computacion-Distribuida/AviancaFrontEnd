import React from 'react';
import { useLocation } from 'react-router-dom';
import './styles/FlightDetails.css';

const FlightDetails = () => {
  const location = useLocation();
  const flights = location.state.flights;

  const { flightId } = location.state;

  const flight = flights.find((f) => f.id === flightId);

  const handleBuyClick = async (flight) => {
    console.log(`Comprando ${flight.nombreDeReferencia}`);

    const requestBody = {
        flightNumber: Math.floor(Math.random() * 200000).toString(),
        departureAirport : 'MED',
        arrivalAirport: 'OLH',
        departureDate: flight.fechaDeSalida,
        arrivalDate: '2023-08-30T12:30:00Z',
        passengerName: "Camilo Zapata",
        seatNumber: "A2",
        ticketPrice: flight.precio
    };

    console.log(requestBody)
    
    const url = 'https://bzlyjkqexc.execute-api.us-east-1.amazonaws.com/ticket';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(requestBody)
    };

    console.log(options);
    
    const makeCompra = async () => {
      try {
        const response = await fetch(url, options);
        const statusCode = response.status;
        return statusCode
      }
      catch (error) {
        console.error('API request error:', error);
      }
    };
    const clients_info = await makeCompra();
    console.log(clients_info);
    if (clients_info === 201 || clients_info === 200) {
      console.log('Vuelo comprado!')
    }
    

    return clients_info
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
        <button className="buy-button" onClick={() => handleBuyClick(flight)}>Comprar Tiquetes</button>
      </div>
    </div>
  );
};

export default FlightDetails;
