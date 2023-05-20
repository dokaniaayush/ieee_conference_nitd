import React from "react";
import TechnicalData from "../db/TechnicalData";
import { Table } from "react-bootstrap";

const TechnicalProgramCommittee = () => {
  return (
    <div
      style={{
        backgroundColor: "#273053",
        width: "100%",
        justifyContent:"left",
        
      }}
    >
      <div
        style={{
          margin: "10px 200px",
          backgroundColor: "white",
        }}
      >
        <div
          className="fs-1 fw-bold"
          style={{
            color: "#273053",
            textAlign: "center",
            margin: "5px",
            paddingLeft: "10px",
          }}
        >
          Technical Program Committee
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th style={{textAlign:"left", paddingLeft:"50px", width:"70%"}}>Organization</th>
            </tr>
          </thead>
          <tbody>
            {TechnicalData.map(({ id, name, description }) => (
              <tr key={id}>
                <td style={{textAlign:"left", paddingLeft:"50px", width:"30%", fontWeight: "bold"}}>{name}</td>
                <td style={{textAlign:"left", paddingLeft:"15px", width:"70%"}}>{description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TechnicalProgramCommittee;
