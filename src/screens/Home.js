import React, { useEffect, useState } from "react";
import HomePage from "./HomePage";
import Sponsor from "./Sponsor";
import Location from "./Location";
import Navb from "../components/Navb";
import Speakers from "./Speakers";
import Footer from "./Footer";
import AboutInstitute from "./AboutInstitute";
import AboutConference from "./AboutConference";
import Contact from "./Contact";
import RegistrationandParticipationFee from "./../components/RegistrationandParticipationFee";
import Fees from "./Fees";
import { DotLoader } from "react-spinners";

import "./../App.css";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading === true) {
    return (
      <div
        style={{
          flex: 1,
          display: "flex",

          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DotLoader
          color="#1a1a1f"
          loading
          size={28}
          speedMultiplier={1}
          cssOverride={{
            marginTop: 250,
          }}
        />
      </div>
    );
  }
  return (
    <div className="App">
      <Navb show={true} />
      <HomePage />
      <Sponsor />
      <AboutConference />
      <Speakers />
      <AboutInstitute />
      <RegistrationandParticipationFee />
      <Location />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default Home;
