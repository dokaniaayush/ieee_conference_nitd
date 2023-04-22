import React from "react";
import SpeakerImg from "../components/SpeakerImg";
import SpeakerData from "../components/SpeakerData";

const Speakers = () => {
  return (
    <div
     id="speakers"
      style={{
        backgroundColor: "#13699b",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "50%" }}>
        <div
          className="vl fs-1 fw-bold"
          style={{ color: "white", textAlign: "left", paddingLeft: "10px" }}
        >
          Our
          <br />
          Speakers
        </div>
        <div
          style={{
            textAlign: "left",
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <SpeakerImg
            imageLink="https://www.w3schools.com/images/img_fullaccess3_160.png"
            style={{ width: "40%" }}
          />
          <SpeakerData
            style={{ width: "60%" }}
            name="Ayush Dokania"
            post="Founder"
            insta=""
            linkedIn=""
            discription=""
          />
        </div>
        <div
          style={{
            textAlign: "left",
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <SpeakerData
            style={{ width: "60%" }}
            name="Ayush Dokania"
            post="Founder"
            insta=""
            twitter=""
            linkedIn=""
            discription=""
          />
          <SpeakerImg
            imageLink="https://www.w3schools.com/images/img_fullaccess3_160.png"
            style={{ width: "40%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Speakers;
