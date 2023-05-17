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
        backgroundColor: "#273053",
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          marginTop: "10px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "35%",
            backgroundColor: "white",
            borderRadius: "20px",
            borderColor: "black",
            borderWidth: "1px",
            padding: "10px",
          }}
        >
        <h5 style={{color:"#273053"}}>Conference Venue</h5>
          <p
            style={{
              fontWeight: "bold",
            }}
          >
            Department of Electronics & Communication Engineering
          </p>
          <p
            style={{
              fontWeight: "bold",
            }}
          >
            National Institute of Technology, Delhi{" "}
          </p>
          <p>Plot No. FA7, Zone P1, GT Karnal Road,</p>
          Delhi-110036, India
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          margin: "0px",
        }}
      >
        <Map
          mapboxAccessToken="pk.eyJ1IjoibWFuYW5qbjI3MTIiLCJhIjoiY2xoM2JscjA2MG1sMzNtbnB3aGI4ejE2NSJ9.cSobjk0Ol6A5spmq2beM-w"
          style={{
            width: "70%",
            height: "70%",
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
      <hr style={{ backgroundColor: "white", height: "10px" }} />
    </div>
  );
};

export default Location;
