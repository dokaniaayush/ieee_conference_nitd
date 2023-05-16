import React from "react";

const Sponsor = () => {
  return (
    <div id="sponsors">
      <div
        id="sponsor_text"
        className="fs-3 fw-bold"
        style={{ marginBottom: "50px", color: "#13699b" }}
      >
        Sponsors
      </div>
      <div id="sponsor_list">
        <img
          src={require("./../assets/img/nitd_logo.jpg")}
          style={{
            height: "100px",
            width: "100px",
            borderRadius:"100%",
            marginBottom:"20px"
          }}
          alt="logo"
        />
        <h4>To be Continue...</h4>
      </div>
    </div>
  );
};

export default Sponsor;
