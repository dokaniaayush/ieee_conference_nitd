import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navb.css";

function Navb() {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  const home = useRef(null);
  const speakers = useRef(null);
  const sponsors = useRef(null);
  const location = useRef(null);
  const scrollToSection = (eleRef) => {
    window.scrollTo({
      top: eleRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <Navbar
      className={navbar ? "active" : "navb"}
      sticky="top"
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#speakers"
              onClick={() => scrollToSection(speakers)}
            >
              Speakers
            </Nav.Link>
            <Nav.Link
              href="#sponsors"
              onClick={() => scrollToSection(sponsors)}
            >
              Sponsors
            </Nav.Link>
            <Nav.Link
              href="#location"
              onClick={() => scrollToSection(location)}
            >
              Location
            </Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;
