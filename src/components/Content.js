import React, { useEffect, useState } from "react";
import Promotions from "./Promotions";
import FlightSearch from "./FlightSearch";
import FlightCatalog from "./FlightCatalog";
import ReactGA from 'react-ga';

function Content() {
  const [searchCriteria, setSearchCriteria] = useState({});

  useEffect(() => {
    console.log('Entré al UseEffect que trackea Google Analytics')
    ReactGA.pageview('/homepage');
  }, []);

  return (
    <>
      <Promotions />
      <FlightSearch onSearch={(criteria) => { setSearchCriteria(criteria) }} />
      <FlightCatalog searchCriteria={searchCriteria} />
    </>
  );
}

export default Content;
