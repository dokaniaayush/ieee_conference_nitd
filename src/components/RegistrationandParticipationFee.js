import React from "react";
import Table from "react-bootstrap/Table";

const RegistrationandParticipationFee = () => {
  const Fees = [
    {
      Category: "Academician/Researcher( Non IEEE Member",
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
          Registration and Participation Fee
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Category</th>
              <th>Fee</th>
              <th>Number</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {Fees.map(({ Category, Fee, Number, TotalAmount }) => (
              <tr key={Category}>
                <td>{Category}</td>
                <td>{Fee}</td>
                <td>{Number}</td>
                <td>{TotalAmount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default RegistrationandParticipationFee;
