import React from "react";
import MainCommittee from "../components/MainCommittee";
import TechnicalProgramCommittee from "../components/TechnicalProgramCommittee";
import CommitteeNavbar from "../components/CommitteeNavbar";
import InternationalAdvisoryComittee from "../components/InternationalAdvisoryComittee";
import NationalAdvisoryCommittee from "../components/NationalAdvisoryCommittee";
import Navb from "../components/Navb";
import ScrollTop from "../components/ScrollTop";

const Committee = () => {
  return (
    <>
      <Navb show={false} />
      <div
        id="committee"
        // className="container-fluid"
        style={{
          display: "flex",
          flex: "1",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {/* <CommitteeNavbar /> */}
        <MainCommittee />
        <TechnicalProgramCommittee />
        <InternationalAdvisoryComittee />
        <NationalAdvisoryCommittee />
        <ScrollTop/>
      </div>
    </>
  );
};

export default Committee;
