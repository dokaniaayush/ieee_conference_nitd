import React from "react";

const AboutConference = () => {
  return (
    <div
      id="about"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
          textAlign: "justify",
        }}
      >
        <h3>About The Conference</h3>
        <p>
          The conference is being proposed to be organized for the first time
          with the theme of “Microelectronics, Communication and Signal
          Processing.” However, ICMCSP 2024 solicits original papers’
          contributions in all related areas.
        </p>

        <p>
          The theme of the conference is “Microelectronics Communication and
          Signal Processing.” However, ICMCSP 2024 solicits original papers’
          contributions in all related areas. The main but not limited tracks of
          the conference are focused on Microelectronic Circuits and Systems,
          Communication Systems & Networks, Signal Processing and Applications,
          and VLSI Technology and Embedded Systems. The committee may propose to
          publish the accepted and selected then after papers, only after the
          due presentation and evaluation, through the IEEE Xplore.
        </p>
      </div>
    </div>
  );
};

export default AboutConference;
