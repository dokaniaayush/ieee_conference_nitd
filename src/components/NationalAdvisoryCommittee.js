import React from "react";
import NationalData from "../db/NationalData";
import { Table } from "react-bootstrap";

const NationalAdvisoryComittee = () => {
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
          National Advisory Committee
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
            {NationalData.map(({ id, name, description, email }) => (
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

export default NationalAdvisoryComittee;
