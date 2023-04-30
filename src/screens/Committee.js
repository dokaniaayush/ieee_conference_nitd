import React from "react";
import MainCommittee from "../components/MainCommittee";
import TechnicalProgramCommittee from "../components/TechnicalProgramCommittee";
import CommitteeNavbar from "../components/CommitteeNavbar";
import InternationalAdvisoryComittee from "../components/InternationalAdvisoryComittee";
import NationalAdvisoryCommittee from "../components/NationalAdvisoryCommittee";
import Navb from "../components/Navb";

const Committee = () => {
  return (
    <>
      <Navb show={false} />
      <div
        id="committee"
        className="container"
        style={{
          display: "flex",
          flex: "1",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {/* <CommitteeNavbar /> */}
        <h3 style={{ margin: "25px" }}>Committee</h3>
        <MainCommittee />
        <br />
        <h3 style={{ margin: "20px" }}>Technical Program Committee</h3>
        <TechnicalProgramCommittee />
        <br />
        <h3 style={{ margin: "20px" }}>International Advisory Committee</h3>
        <br />
        <InternationalAdvisoryComittee />
        <h3 style={{ margin: "20px" }}>National Advisory Committee</h3>
        <br />
        <NationalAdvisoryCommittee />
        <br />
      </div>
    </>
  );
};

export default Committee;
