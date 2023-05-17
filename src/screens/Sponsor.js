import React from "react";

const Sponsor = () => {
  return (
    <div id="sponsors">
      <div
        id="sponsor_text"
        className="fs-3 fw-bold"
        style={{ marginBottom: "50px", color: "#273053" }}
      >
        Sponsors
      </div>
      <div id="sponsor_list">
        <img
          src={require("./../assets/img/nitd_logo.jpg")}
          style={{
            height: "100px",
            width: "100px",
            borderRadius: "100%",
            marginBottom: "20px",
          }}
          alt="logo"
        />
        <h5>Nit Delhi</h5>
        <br/>
        <h4>To be Updated soon...</h4>
      </div>
    </div>
  );
};

export default Sponsor;
