import React from "react";
import NationalData from "../db/NationalData";
import { Table } from "react-bootstrap";

const NationalAdvisoryComittee = () => {
  return (
    <div
      style={{
        backgroundColor: "#273053",
        width: "100%",
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
          National Advisory Committee
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th style={{textAlign:"left", paddingLeft:"50px", width:"70%"}}>Organization</th>
            </tr>
          </thead>
          <tbody>
            {NationalData.map(({ id, name, description }) => (
              <tr key={id}>
                <td style={{ fontWeight: "bold",textAlign:"left", paddingLeft:"50px", width:"30%" }}>{name}</td>
                <td style={{textAlign:"left", paddingLeft:"15px", width:"70%"}}>{description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default NationalAdvisoryComittee;
