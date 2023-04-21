import React from "react";
import Navb from "../components/Navb";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/img/sample.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: "100vh",
      }}
    >
      <Navb />
      <br />
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
  );
};

export default HomePage;
