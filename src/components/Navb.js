import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";
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
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);
  return (
    <Navbar
      className={navbar ? "active" : "navb"}
      sticky="top"
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Container>
        {/* <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100vw",
          }}
        > */}
        <Navbar.Brand href="#home">IEEE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="collapsingIcons">
          <Nav>
            <Nav.Link>
              <Link
                to="speakers"
                spy={true}
                smooth={true}
                offset={-55}
                duration={500}
                style={{
                  textDecoration: "none",
                }}
              >
                Speakers
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="sponsors"
                spy={true}
                smooth={true}
                offset={-55}
                duration={500}
                style={{
                  textDecoration: "none",
                }}
              >
                Sponsors
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="location"
                spy={true}
                smooth={true}
                offset={-55}
                duration={500}
                style={{
                  textDecoration: "none",
                }}
              >
                Location
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="footer"
                spy={true}
                smooth={true}
                offset={-55}
                duration={500}
                style={{
                  textDecoration: "none",
                }}
              >
                Footer
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
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
        {/* </div> */}
      </Container>
    </Navbar>
  );
}

export default Navb;
