import React from "react";
import SponsorshipCharges from "../components/SponsorshipCharges";
import RegistrationandParticipationFee from "../components/RegistrationandParticipationFee";
import Navb from "../components/Navb";
import Footer from "./Footer";
import ScrollTop from "../components/ScrollTop";
import NavbOther from "../components/NavbOther";

const Fees = () => {
  return (
    <>
      <NavbOther />
      <div
        style={{
          backgroundColor: "#273053",
        }}
      >
        {/* <SponsorshipCharges /> */}
        <RegistrationandParticipationFee />
        <hr style={{ backgroundColor: "white", height: "5px" }} />
        <Footer />
        <ScrollTop />
      </div>
    </>
  );
};

export default Fees;
