import React from "react";
import SpeakerCard from "../components/SpeakerCard";

// import img1 from './assets/img/nitd_logo.png';

const Speakers = () => {
  return (
    <div
      id="speakers"
      style={{
        backgroundColor: "#273053",
        height: "620px",
        overflow: "hidden",
      }}
    >
      <div
        className="vl fs-1 fw-bold"
        style={{
          color: "white",
          textAlign: "left",
          margin: "2%",
          paddingLeft: "10px",
        }}
      >
        Our Speakers
      </div>
      <div className="box"
        style={{
          display: "flex",
          flexDirection: "row",
          overflowX: "scroll",
          marginRight:"1%"
        }}>
        <SpeakerCard
          img={require("./../assets/img/GeetaSikka.jpeg")}
          name="Geeta Sikka"
          post="HOD CSE"
          disciption="NIT Delhi"
          insta=""
          twitter=""
          linkedIn=""
        />
        <SpeakerCard
          img={require("./../assets/img/NeetaPandey.jpeg")}
          name="Prof Neeta Pandey"
          post="Professor"
          disciption="Delhi Technological University"
          insta=""
          twitter=""
          linkedIn=""
        />
        <SpeakerCard
          img={require("./../assets/img/AmitPrakashSingh.jpeg")}
          name="Amit Prakash Singh"
          post="Director"
          disciption="IPU-Innovation and Incubation Foundation"
          insta=""
          twitter=""
          linkedIn=""
        />
        <SpeakerCard
          img={require("./../assets/img/GhanshyamSingh.jpeg")}
          name="Prof. Ghanshyam Singh"
          post="Professor"
          disciption="Dept. of Electronics & Communication Engg., MNIT"
          insta=""
          twitter=""
          linkedIn=""
        />
        <SpeakerCard
          img={require("./../assets/img/BinodKKanaujia.jpeg")}
          name="Prof. Binod K Kanaujia"
          post="Senior Member of IEEE"
          disciption="Director, Dr B R Ambedkar NIT Jalandhar and Professor, School of Computational and Integrative"
          insta=""
          twitter=""
          linkedIn=""
        />
        <SpeakerCard
          img={require("./../assets/img/BVRReddy.jpeg")}
          name="Prof. BVR Reddy"
          post="Professor"
          disciption="Information Technology, ggs ip university, delhi"
          insta=""
          twitter=""
          linkedIn=""
        />
        <SpeakerCard
          img={require("./../assets/img/NupurPrakash.jpeg")}
          name="Nupur Prakash"
          post="Founder Vice Chancellor"
          disciption="Indira Gandhi Delhi Technical University for Women (IGDTUW)"
          insta=""
          twitter=""
          linkedIn=""
        /> 
      </div>
    </div>
  );
};

export default Speakers;
