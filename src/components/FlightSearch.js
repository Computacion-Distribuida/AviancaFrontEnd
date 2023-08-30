import React, { useState } from 'react';
import './styles/FlightSearch.css';

function FlightSearch({ onSearch }) {
  const [isRoundTrip, setIsRoundTrip] = useState(false);

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');

  const handleFromChange = (event) => {
    const value = event.target.value;
    setFrom(value);
  };

  const handleToChange = (event) => {
    const value = event.target.value;
    setTo(value);
  };

  const handleDateChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setDepartureDate(value);
  };

  const handleRoundTripChange = () => {
    setIsRoundTrip(!isRoundTrip);
  };

  const handleSearchClick = () => {
    let tempCriteria = {}
    if(from !== '' && to !== '' && departureDate !== '') {
      tempCriteria = {from, to, departureDate}
    }
    else if(from !== '' && to !== ''){
      tempCriteria = {from, to}
    }
    else if(from !== '' && departureDate !== ''){
      tempCriteria = {from, departureDate}
    }
    else if(to !== '' && departureDate !== ''){
      tempCriteria = {to, departureDate}
    }
    else if(from !== ''){
      tempCriteria = {from}
    }
    else if(to !== ''){
      tempCriteria = {to}
    }
    else if(departureDate !== ''){
      tempCriteria = {departureDate}
    }
    onSearch(tempCriteria);
  };

  return (
    <section className="flight-search">
      <h2>Buscar Vuelos</h2>
      <div className="search-form">
        <div className="search-options">
          <div className="option">
            <label>Desde</label>
            <input type="text" placeholder="Origen" onChange={handleFromChange} />
          </div>
          <div className="option">
            <label>Hacia</label>
            <input type="text" placeholder="Destino" onChange={handleToChange} />
          </div>
          <div className="option">
            <label>Salida</label>
            <input type="date" onChange={handleDateChange} />
          </div>
          {isRoundTrip && (
            <div className="option">
              <label>Regreso</label>
              <input type="date" />
            </div>
          )}
          {/* <div className="option">
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
          </div> */}
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
          <button className="search-button" onClick={handleSearchClick}>Buscar Vuelos</button>
        </div>
      </div>
    </section>
  );
}

export default FlightSearch;