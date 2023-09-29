import React from "react";

const Sponsor = () => {
  return (
    <div id="sponsors">
      <div style={{marginTop:"1%", marginBottom:"1%"}}>
        <div
          className="fs-3 fw-bold"
          style={{ marginBottom: "50px", color: "#273053"}}
        >
          Patrons/Contributors/Supporters
        </div>
        <div>
          <img
            src={require("./../assets/img/nitdLogo.jpg")}
            style={{
              height: "150px",
              width: "150px",
              borderRadius:"10%",
              marginBottom: "20px",
            }}
            alt="logo"
          />
          <br/><br/>
        </div>
        <h4>To be Updated soon...</h4>
      </div>
    </div>
  );
};

export default Sponsor;
