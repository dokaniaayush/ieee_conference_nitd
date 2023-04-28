import React from "react";
import MainCommittee from "../components/MainCommittee";
import TechnicalProgramCommittee from "../components/TechnicalProgramCommittee";
import Navb from "../components/Navb";

const Committee = () => {
  return (
    <>
      <Navb />
      <div
        className="container"
        style={{
          display: "flex",
          flex: "1",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h3 style={{ margin: "25px" }}>Committee</h3>
        <MainCommittee />
        <br />
        <h3 style={{ margin: "20px" }}>Technical Program Committee</h3>
        <TechnicalProgramCommittee />
      </div>
    </>
  );
};

export default Committee;
