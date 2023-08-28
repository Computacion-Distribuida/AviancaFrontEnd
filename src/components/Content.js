import React, { useEffect, useState } from "react";
import Promotions from "./Promotions";
import FlightSearch from "./FlightSearch";
import FlightCatalog from "./FlightCatalog";
import Navigation from "./Navigation";

import ReactGA from 'react-ga';


function Content() {
  useEffect(() => {
    console.log('Entré al UseEffect que trackea Google Analytics')
    ReactGA.pageview('/homepage');
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
