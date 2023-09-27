import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div
      class="ad-wrap"
      id="home"
      style={{
        // position: "absolute",
        // top: "-20px",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        // backgroundImage: `url(${require("./../assets/img/admin1.JPG")})`, opacity : 0.6,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        // backgroundAttachment: "fixed",

      }}
    >
      <img
        class="ad-bg"
        src={require("./../assets/img/admin1.JPG")}
        alt=""
      />
      <div class="ad-content"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <div style={{marginTop:"-3.5%"}}>
          <h1
            style={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            First International Conference on
          </h1>
          <h1
            style={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            Microelectronics, Communication and Signal Processing
          </h1>
          <h1
            style={{
              color: "black",
              fontWeight: "bold",
            }}
          >
          (ICMCSP 2024)
          </h1>
          <h3
            style={{
              color: "black",
              marginTop:"30px"
              // fontWeight: "bold",
            }}
          >
          August 9-11, 2024
          </h3>
          <div className="middleBox">
            {/* <img
              src={require("./../assets/img/ieee_logo.png")}
              style={{
                height: "90px",
              }}
              alt="logo"
            /> */}
            <img
              src={require("./../assets/img/nitd_logo.jpg")}
              style={{
                height: "115px",
                width: "115px",
              }}
              alt="logo"
            />
            <div>
              <h2
                style={{
                  fontFamily: "Noto Sans",
                  fontSize: "30px",
                }}
              >
                Department of Electronics and Communication Engineering
              </h2>
              {/* <h2
                style={{
                  fontFamily: "Noto Sans",
                }}
              >
                Of
              </h2> */}
              <h2
                style={{
                  fontFamily: "Noto Sans",
                  fontSize: "30px",
                }}
              >
                National Institute of Technology Delhi
              </h2>
            </div>
          </div>
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
