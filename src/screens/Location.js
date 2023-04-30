import React, { useRef, useEffect, useState } from "react";
import { Map, Marker, Popup, NavigationControl } from "react-map-gl";
const Location = () => {
  const [lng, setLng] = useState("77.13368470616429");
  const [lat, setLat] = useState("28.816678787482143");
  // 28.8165847849844, 77.13368470616429
  return (
    <div
      id="location"
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Map
        mapboxAccessToken="pk.eyJ1IjoibWFuYW5qbjI3MTIiLCJhIjoiY2xoM2JscjA2MG1sMzNtbnB3aGI4ejE2NSJ9.cSobjk0Ol6A5spmq2beM-w"
        style={{
          width: "80%",
          height: "80%",
          borderColor: "black",
          borderWidth: "1px",
          borderStyle: "solid",
        }}
        initialViewState={{
          latitude: lat,
          longitude: lng,
          zoom: 13,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        <Marker
          latitude="28.816678787482143"
          longitude="77.13368470616429"
          anchor="bottom"
          draggable="false"
        />
        <NavigationControl />
      </Map>
    </div>
  );
};

export default Location;
