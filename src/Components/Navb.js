import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import {Link} from 'react-scroll'
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
  const [click,setClick]=useState(false);
  const closeMenu=()=> setClick(false);
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
            <Nav.Link>
            <Link
              to="speakers" spy={true} smooth={true} offset={-55} duration={500}
            >
              Speakers
            </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
              to="sponsors" spy={true} smooth={true} offset={-55} duration={500}
            >
              Sponsors
            </Link>
            </Nav.Link>
            <Nav.Link>
            <Link
              to="location" spy={true} smooth={true} offset={-55} duration={500}
            >
              Location
            </Link>
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
