import React from "react";
import TechnicalData from "../db/TechnicalData";
import Card from "./Card";

const TechnicalProgramCommittee = () => {
  return (
    <div
      id="technical_program_committee"
      classname="card"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        borderColor: "black",
        borderWidth: "2px",
        backgroundColor: "rgb(39, 48, 83)",
        width: "100%",
      }}
    >
      {
        TechnicalData.map((data)=>{
            return(
              <Card key={data.id} name={data.name} description={data.description} email={data.email}/>
            )
        })
      }
      
    </div>
  );
};

export default TechnicalProgramCommittee;
