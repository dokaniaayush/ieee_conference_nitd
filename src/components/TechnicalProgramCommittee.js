import React from "react";
import TechnicalData from "../db/TechnicalData";
import { Table } from "react-bootstrap";

const TechnicalProgramCommittee = () => {
  return (
    <div
      style={{
        backgroundColor: "#273053",
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
            color: "Black",
            textAlign: "left",
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
              <th>Description</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {TechnicalData.map(({ id, name, description, email }) => (
              <tr key={id}>
                <td style={{fontWeight:'bold'}}>{name}</td>
                <td>{description}</td>
                <td>
                  <a href={`mailto:${email}`}>{email}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TechnicalProgramCommittee;
