import React from "react";
import HomePage from "./HomePage";
import Sponsor from "./Sponsor";
import Location from "./Location";
import Navb from "../components/Navb";
import Speakers from "./Speakers";
import Footer from "./Footer";
import AboutInstitute from "./AboutInstitute";
import AboutConference from "./AboutConference";
import Contact from "./Contact";
import "./../App.css";

const Home = () => {
  return (
    <div className="App">
      <Navb />
      <HomePage />
      <AboutInstitute />
      <hr />
      <AboutConference />
      <Sponsor />
      <Speakers />
      <Location />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default Home;
