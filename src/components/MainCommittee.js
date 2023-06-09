import React from "react";
import MainData from "../db/MainData";
import { Table } from "react-bootstrap";

const MainCommittee = () => {
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
          Committee Members
        </div>
        <Table striped bordered hover>
          {/* <thead>
            <tr>
              <th>Position</th>
              <th>Details</th>
            </tr>
          </thead> */}
          <tbody>
            {MainData.map(({ id, position, description }) => (
              <tr key={id}>
                <td style={{ fontWeight: "bold", textAlign:"left", paddingLeft:"50px", width:"30%" }}>{position}</td>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    paddingLeft:"15px", 
                    width:"70%"
                  }}
                >
                  {description.split("\n").map((item, i) => (
                    <td
                      style={{
                        width: "100%",
                        textAlign: "left",
                      }}
                    >
                      {item}
                    </td>
                  ))}
                </div>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MainCommittee;
