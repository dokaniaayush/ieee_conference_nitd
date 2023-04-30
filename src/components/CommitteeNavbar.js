import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

const CommitteeNavbar = () => {
  return (
    <Navbar>
      <Nav.Link
        style={{
          border: "2px solid blue",
          borderRadius: "10px",
          padding: "10px",
          margin: "10px",
        }}
      >
        <Link
          to="committee"
          spy={true}
          smooth={true}
          offset={-55}
          duration={500}
          style={{
            textDecoration: "none",
            fontFamily: "Libre Franklin",
          }}
        >
          Committee
        </Link>
      </Nav.Link>
      <Nav.Link
        style={{
          border: "2px solid blue",
          borderRadius: "10px",
          padding: "10px",
          margin: "10px",
        }}
      >
        <Link
          to="technical_program_committee"
          spy={true}
          smooth={true}
          offset={-110}
          duration={500}
          style={{
            textDecoration: "none",
            fontFamily: "Libre Franklin",
          }}
        >
          Technical Program Committee
        </Link>
      </Nav.Link>
      <Nav.Link
        style={{
          border: "2px solid blue",
          borderRadius: "10px",
          padding: "10px",
          margin: "10px",
        }}
      >
        <Link
          to="international_advisory_committee"
          spy={true}
          smooth={true}
          offset={-110}
          duration={500}
          style={{
            textDecoration: "none",
            fontFamily: "Libre Franklin",
          }}
        >
          International Advisory Committee
        </Link>
      </Nav.Link>
      <Nav.Link
        style={{
          border: "2px solid blue",
          borderRadius: "10px",
          padding: "10px",
          margin: "10px",
        }}
      >
        <Link
          to="national_advisory_committee"
          spy={true}
          smooth={true}
          offset={-110}
          duration={500}
          style={{
            textDecoration: "none",
            fontFamily: "Libre Franklin",
          }}
        >
          National Advisory Committee
        </Link>
      </Nav.Link>
    </Navbar>
  );
};

export default CommitteeNavbar;
