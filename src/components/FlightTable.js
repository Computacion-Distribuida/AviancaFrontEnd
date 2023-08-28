import React from 'react';
import { Link } from 'react-router-dom';

const FlightTable = ({ flights }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Fecha de Salida</th>
          <th>ID</th>
          <th>Nombre de Referencia</th>
          <th>Origen</th>
          <th>Destino</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {flights.map((flight) => (
          <tr key={flight.id}>
            <td>{flight.fechaDeSalida}</td>
            <td>{flight.id}</td>
            <td>{flight.nombreDeReferencia}</td>
            <td>{flight.origen}</td>
            <td>{flight.destino}</td>
            <td>{flight.precio}</td>
            <td>
              <Link to={`/flight/${flight.id}`}>
                <button>Comprar Vuelo</button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FlightTable;