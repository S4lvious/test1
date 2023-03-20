import React, { useState } from "react";
// import Video from "./Video";
import GeoChart from "./GeoChart";
import './map.css'
import json from './GeoChart.world.geo.json'

function Map() {
  const [property, setProperty] = useState("pop_est");
  return (
    <React.Fragment>
      <GeoChart data={json} property={property} />
      <select
        value={property}
        onChange={event => setProperty(event.target.value)}
      >
        <option value="pop_est">Population</option>
      </select>
    </React.Fragment>
  );
}

export default Map;
