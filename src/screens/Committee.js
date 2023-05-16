import React from "react";
import MainCommittee from "../components/MainCommittee";
import TechnicalProgramCommittee from "../components/TechnicalProgramCommittee";
import CommitteeNavbar from "../components/CommitteeNavbar";
import InternationalAdvisoryComittee from "../components/InternationalAdvisoryComittee";
import NationalAdvisoryCommittee from "../components/NationalAdvisoryCommittee";
import Navb from "../components/Navb";
import ScrollTop from "../components/ScrollTop";
import NavbOther from "../components/NavbOther";
import Footer from "./Footer";

const Committee = () => {
  return (
    <>
      <NavbOther />
      <div
        id="committee"
        // className="container-fluid"
        style={{
          display: "flex",
          flex: "1",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontFamily: "Archivo",
        }}
      >
        {/* <CommitteeNavbar /> */}
        <MainCommittee />
        <TechnicalProgramCommittee />
        <InternationalAdvisoryComittee />
        <NationalAdvisoryCommittee />
        <hr style={{ backgroundColor: "white", height: "5px", margin:"0px" }} />
        <ScrollTop />
        <Footer />
      </div>
    </>
  );
};

export default Committee;
