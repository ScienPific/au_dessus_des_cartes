import React, { useEffect, useState } from "react";
import logo from './logo.jpg';
import './App.css';
import { VectorMap } from "react-jvectormap";
import CountryInfo from "./components/CountryInfo"

function App() {

  // Map function start
  const mapData = {
    //FI: 0,
    //FR: 0,
    //US: 0
  };

  const [countrySelected, setcountrySelected] = useState('none');
  const handleClick = (e, countryCode) => {
    setcountrySelected(countryCode)
    console.log(countrySelected)
  };

  // Map function end

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="Map-box">
        <div>
          <VectorMap
            map={"world_mill"}
            backgroundColor="transparent" //change it to ocean blue: #0077be
            zoomOnScroll={true}
            containerStyle={{
              width: "100%",
              height: "520px",
              backgroundColor: "white"
            }}
            onRegionClick={handleClick} //gets the country code
            containerClassName="map"
            regionStyle={{
              initial: {
                fill: "#BCBCBC",
                "fill-opacity": 0.9,
                stroke: "none",
                "stroke-width": 0,
                "stroke-opacity": 0
              },
              hover: {
                "fill-opacity": 0.8,
                cursor: "pointer"
              },
              selected: {
                fill: "#2938bc" //color for the clicked country
              },
              selectedHover: {
                fill: "#2938bc" //color for the clicked country 
              },
            }}
            regionsSelectable={true}
            series={{
              regions: [
                {
                  values: mapData, //this is your data
                  scale: ["#146804", "#ff0000"], //your color game's here
                  normalizeFunction: "polynomial"
                }
              ]
            }}
          />
        </div>
      </div>
      <CountryInfo
        country={countrySelected}
      />
    </div>
  );
}

export default App;
