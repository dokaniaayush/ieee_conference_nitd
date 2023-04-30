import React from "react";
import SponsorshipCharges from "../components/SponsorshipCharges";
import RegistrationandParticipationFee from "../components/RegistrationandParticipationFee";
import Navb from "../components/Navb";
const Fees = () => {
  return (
    <>
      <Navb show={false} />
      <div
        style={{
          backgroundColor: "#273053",
        }}
      >
        <SponsorshipCharges />
        <RegistrationandParticipationFee />
      </div>
    </>
  );
};

export default Fees;
