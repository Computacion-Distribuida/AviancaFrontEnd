import React from 'react';
import Promotions from './Promotions';
import FlightSearch from './FlightSearch';
import FlightCatalog from './FlightCatalog';
import Navigation from './Navigation';

function Content() {
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
