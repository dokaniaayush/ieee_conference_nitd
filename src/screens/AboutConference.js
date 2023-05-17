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
          width: "60%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <h3 style={{color: "#273053"}}>About the Conference</h3>
        <br/>
        <div style={{textAlign: "justify",}}>
          <p>
            International Conference on Microelectronics, Communication and Signal
            Processing (ICMCSP 2024), provides a platform for researchers,
            academics, scholars, industry experts from India and the world to
            present and discuss their research findings in various areas of
            Electronics and Communication Engineering. However, ICMCSP 2024
            solicits original papers’ contributions in all related areas of
            Electronics Engineering.
          </p>
          <p>
            The major tracks of the conference are focused on Microelectronic
            Circuits and Systems, Communication Systems & Networks, Signal
            Processing & Applications, and VLSI Technology & Embedded Systems. The
            conference will feature keynote speakers, technical sessions, and
            workshops covering a wide range of topics related to Microelectronics,
            VLSI Design, Signal Processing and Communication systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutConference;
