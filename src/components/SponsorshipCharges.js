import React from "react";
import { Table } from "react-bootstrap";

const SponsorshipCharges = () => {
  const sponsorshipCharges = [
    {
      id: "1",
      sources: "Sponsorship from Industry/Other Govt. Agencies (to be applied)",
      amount1: "₹ 8,00,000/-",
      heads:
        "Pre-conference Expenditure (Conference Brochures, Posters, Postages, Local Travelling, etc.)",
      amount2: "₹ 1,50,000/-",
    },
    {
      id: "2",
      sources:
        "Financial Support/seed money from NIT Delhi (Organizer’s own contribution)",
      amount1: "₹ 2,50,000/-",
      heads:
        "Travel Allowance (For experts invited for Invited Talks, Key Note Addresses, Session Chair, etc.)",
      amount2: "₹ 1,00,000/-",
    },
    {
      id: "3",
      sources: "Registration Fees from participants",
      amount1: "₹ 9,79,000/-",
      heads:
        "Accommodation (For experts invited for Invited Talks, Key Note Addresses, Session Chair, etc.)",
      amount2: "₹ 1,00,000/-",
    },
    {
      id: "4",
      sources: "",
      amount1: "",
      heads:
        "Honorarium (For experts invited for Invited Talks, Key Note Addresses, Session Chair, etc.)",
      amount2: "₹ 1,50,000/-",
    },
    {
      id: "5",
      sources: "",
      amount1: "",
      heads: "Conference Kit (Bag, Pen, Pad, CD, etc.) and other Stationary",
      amount2: "₹ 1,50,000/-",
    },
    {
      id: "6",
      sources: "",
      amount1: "",
      heads: "Lunch, Snacks and Tea",
      amount2: "₹ 2,00,000/-",
    },
    {
      id: "7",
      sources: "",
      amount1: "",
      heads:
        "Misc. like Backdrops, Banners, Overall Decoration, Mementos, Photography, Videography, Live streaming, prizes for best papers, etc.",
      amount2: "₹ 2,00,000/-",
    },
    {
      id: "8",
      sources: "",
      amount1: "",
      heads: "IEEE	MGA	TCS	Fee, Delhi Section Fee and IEEE Xplore Expenditure",
      amount2: "₹ 3,50,000/-",
    },
    {
      id: "9",
      sources: "Total",
      amount1: "₹ 20,29,000/-",
      heads: "Total",
      amount2: "₹ 14,00,000/-",
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
          Sponsorship Charges
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th style={{ width: "35%" }}>Sources</th>
              <th>Amount</th>
              <th style={{ width: "35%" }}>Heads</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {sponsorshipCharges.map(
              ({ id, sources, amount1, heads, amount2 }) => (
                <tr key={id}>
                  <td>{sources}</td>
                  <td>{amount1}</td>
                  <td>{heads}</td>
                  <td>{amount2}</td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default SponsorshipCharges;
