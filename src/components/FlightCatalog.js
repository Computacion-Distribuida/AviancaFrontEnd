import React, { useEffect, useState } from "react";
import './styles/FlightCatalog.css';
import client from "../contentful";
import FlightTable from "./FlightTable";
import SimpleTable from "./SimpleTable";

function FlightCatalog() {

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

  return (
    <div>
      <section className="flight-catalog">
        <h2>Catálogo de Vuelos</h2>
        <div className="flight-list"></div>
      </section>

      <div>
      {/* <SimpleTable data={vuelos} /> */}
       <FlightTable flights={vuelos} />
      </div>
    </div>
  );
}

export default FlightCatalog;
