import React from "react";
import Table from "react-bootstrap/Table";

const RegistrationandParticipationFee = () => {
  const Fees1 = [
    {
      Category: "Academician/Researcher (Non IEEE Member)",
      Fee: "₹ 8000/-",
      Number: "30",
      TotalAmount: "₹ 2,40,000/-",
    },
    {
      Category: "Academician/Researcher (IEEE Members)",
      Fee: "₹ 7000/-",
      Number: "20",
      TotalAmount: "₹ 1,40,000/-",
    },
    {
      Category: "Students(Non IEEE Member)",
      Fee: "₹ 7000/-",
      Number: "20",
      TotalAmount: "₹ 1,40,000/-",
    },
    {
      Category: "Students (IEEE Members)",
      Fee: "₹ 6000/-",
      Number: "20",
      TotalAmount: "₹ 1,20,000/-",
    },
    {
      Category: "Delegates (Non-Authors/Additional Authors) (IEEE Members)",
      Fee: "₹ 3000/-",
      Number: "5",
      TotalAmount: "₹ 15,000/-",
    },
    {
      Category: "Delegates (Non-Authors/Additional Authors) (Non IEEE Members)",
      Fee: "₹ 4000/-",
      Number: "5",
      TotalAmount: "₹ 20,000/-",
    },
  ];
  const Fees2 = [
    {
      Category1: "Academician/Researcher (Non IEEE Member)",
      Fee1: "USD 350",
      Number: "30",
      TotalAmount: "₹ 2,40,000/-",
    },
    {
      Category1: "Academician/Researcher (IEEE Members)",
      Fee1: "USD 300",
      Number: "20",
      TotalAmount: "₹ 1,40,000/-",
    },
    {
      Category1: "Students(Non IEEE Member)",
      Fee1: "USD 250",
      Number: "20",
      TotalAmount: "₹ 1,40,000/-",
    },
    {
      Category1: "Students (IEEE Members)",
      Fee1: "USD 200",
      Number: "20",
      TotalAmount: "₹ 1,20,000/-",
    },
    {
      Category1: "Delegates (Non-Authors/Additional Authors) (IEEE Members)",
      Fee1: "USD 100",
    },
    {
      Category1: "Delegates (Non-Authors/Additional Authors) (Non IEEE Members)",
      Fee1: "USD 150",
    },
  ];
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
            color: "#273053",
            textAlign: "left",
            margin: "5px",
            paddingLeft: "10px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
          }}
        >
          Registration and Participation Fee
        </div>
        <hr />
        <div
          style={{
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Indian Authors
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Category</th>
              <th style={{ width: "30%" }}>Registration Fee/Person</th>
            </tr>
          </thead>
          <tbody>
            {Fees1.map(({ Category, Fee }) => (
              <tr key={Category}>
                <td style={{paddingLeft:"20%", textAlign:"left"}}>{Category}</td>
                <td>{Fee}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div
          style={{
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Foreign Authors
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Category</th>
              <th style={{ width: "30%" }}>Registration Fee/Person</th>
            </tr>
          </thead>
          <tbody>
            {Fees2.map(({ Category1, Fee1 }) => (
              <tr key={Category1}>
                <td style={{paddingLeft:"20%", textAlign:"left"}}>{Category1}</td>
                <td>{Fee1}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default RegistrationandParticipationFee;
