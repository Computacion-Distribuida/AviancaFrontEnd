import React, { useEffect, useState } from "react";
import Promotions from "./Promotions";
import FlightSearch from "./FlightSearch";
import FlightCatalog from "./FlightCatalog";
import Navigation from "./Navigation";
import client from "../contentful";
function Content() {
  const [vuelos, setVuelos] = useState([]);
  useEffect(() => {
    async function getVuelos() {
      await client.getEntries({ content_type: "vuelos" }).then((response) => {
        setVuelos(response.items);
        console.log(response.items);
      });
    }
    getVuelos();
  }, []);

  return (
    <>
      <Navigation />
      <Promotions />
      <FlightSearch />
      <FlightCatalog />
    </>
  );
}

export default Content;
