import React, { useState } from 'react';
import './styles/FlightSearch.css';

function FlightSearch() {
  const [isRoundTrip, setIsRoundTrip] = useState(true);

  const handleRoundTripChange = () => {
    setIsRoundTrip(!isRoundTrip);
  };

  return (
    <section className="flight-search">
      <h2>Buscar Vuelos</h2>
      <div className="search-form">
        <div className="search-options">
          <div className="option">
            <label>Desde</label>
            <input type="text" placeholder="Origen" />
          </div>
          <div className="option">
            <label>Hacia</label>
            <input type="text" placeholder="Destino" />
          </div>
          <div className="option">
            <label>Salida</label>
            <input type="date" />
          </div>
          {isRoundTrip && (
            <div className="option">
              <label>Regreso</label>
              <input type="date" />
            </div>
          )}
          <div className="option">
            <label>Pasajeros</label>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="2">3</option>
              <option value="2">4</option>
              <option value="2">5</option>
              <option value="2">6</option>
              <option value="2">7</option>
              <option value="2">8</option>
            </select>
          </div>
          {/* <div className="option">
            <label>Tipo de Vuelo</label>
            <div className="checkbox-container">
              <input
                type="checkbox"
                checked={isRoundTrip}
                onChange={handleRoundTripChange}
              />
              <label>{isRoundTrip ? 'Ida y Vuelta' : 'Solo Ida'}</label>
            </div>
          </div> */}
          <button className="search-button">Buscar Vuelos</button>
        </div>
      </div>
    </section>
  );
}

export default FlightSearch;