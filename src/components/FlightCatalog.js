import React, { useEffect, useState } from "react";
import './styles/FlightCatalog.css';
import client from "../contentful";
import FlightCard from "./FlightCard"; // Importa el nuevo componente FlightCard

function FlightCatalog({ searchCriteria = {} }) {

  const [vuelos, setVuelos] = useState([]);
  useEffect(() => {
    async function getVuelos() {
      await client.getEntries({ content_type: "vuelos" }).then((response) => {
        const vuelosInfo = response.items.map((vuelo) => {
          let fields = vuelo.fields
          const date = new Date(fields.fechaDeSalida);
          const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            timeZoneName: 'short'
          };

          const formattedDate = date.toLocaleString('en-US', options);

          const formattedNumber = fields.precio.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          });

          fields['fechaDeSalida'] = formattedDate
          fields['precio'] = formattedNumber

          return fields
        })
        setVuelos(vuelosInfo);
        console.log(vuelosInfo);
      });
    }
    getVuelos();
  }, []);

  const formatDate = (dateString) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'
    ];
  
    const [month, day, year] = dateString.match(/\w+/g);
    const monthIndex = months.indexOf(month) + 1;
  
    return `${year}-${monthIndex.toString().padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  const displayedFlights = Object.keys(searchCriteria).length !== 0 ? vuelos.filter((vuelo) => {
    const { from, to, departureDate } = searchCriteria;
    
    if (from && to && departureDate) {
      return (
        vuelo.origen.toLowerCase().includes(from.toLowerCase()) &&
        vuelo.destino.toLowerCase().includes(to.toLowerCase()) &&
        formatDate(vuelo.fechaDeSalida) === departureDate
      );
    } else if (from && to) {
      return vuelo.origen.toLowerCase().includes(from.toLowerCase()) && vuelo.destino.toLowerCase().includes(to.toLowerCase());
    } else if (from && departureDate) {
      return vuelo.origen.toLowerCase().includes(from.toLowerCase()) && formatDate(vuelo.fechaDeSalida) === departureDate;
    } else if (to && departureDate) {
      return vuelo.destino.toLowerCase().includes(to.toLowerCase()) && formatDate(vuelo.fechaDeSalida) === departureDate;
    } else if (from) {
      return vuelo.origen.toLowerCase().includes(from.toLowerCase());
    } else if (to) {
      return vuelo.destino.toLowerCase().includes(to.toLowerCase());
    } else if (departureDate) {
      return formatDate(vuelo.fechaDeSalida) === departureDate;
    }

    return true;
  }) : vuelos;

  return (
    <div>
      <section className="flight-catalog">
        <h2>Catálogo de Vuelos</h2>
        {displayedFlights.length !== 0 && 
          <div className="flight-list">
            {displayedFlights.map((vuelo) => (
              <FlightCard key={vuelo.id} flight={vuelo} flights={vuelos} />
            ))}
          </div>
        }
        {displayedFlights.length === 0 && 
          <h3>No se encontraron vuelos disponibles.</h3>
        }
      </section>
    </div>
  );
}

export default FlightCatalog;
