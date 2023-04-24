import React from "react";
import { useState } from "react";
import Navb from "../components/Navb";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import "./HomePage.css";

// import Navb from "../components/Navb";
const HomePage = () => {
  return (
    <div
      id="home"
      style={{
        // position: "absolute",
        // top: "-20px",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundImage: `url(${require("./../assets/img/sample.png")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {/* <Navb /> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <div>
          <div className="middleBox">
            <img
              src={require("./../assets/img/ieee_logo.png")}
              style={{
                height: "90px",
              }}
              alt="logo"
            />
            <h2
              style={{
                fontFamily: "Noto Sans",
              }}
            >
              National Institute of Technology Delhi
            </h2>
            <img
              src={require("./../assets/img/nitd_logo.jpg")}
              style={{
                height: "90px",
              }}
              alt="logo"
            />
          </div>
          <h1
            style={{
              color: "black",
              marginTop: "20px",
            }}
          >
            First International Conference on
          </h1>
          <h1
            style={{
              color: "white",
            }}
          >
            Microelectronics, Communication and Signal Processing
          </h1>
          <h1
            style={{
              color: "white",
            }}
          >
            (ICMCSP 2024)
          </h1>
        </div>

        <div className="socialIconsBar">
          <ul>
            <li className="socialIcons">
              <AiFillFacebook />
            </li>
            <li className="socialIcons">
              <AiFillTwitterCircle />
            </li>
            <li className="socialIcons">
              <AiOutlineInstagram />
            </li>
            <li className="socialIcons">
              <AiFillLinkedin />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
