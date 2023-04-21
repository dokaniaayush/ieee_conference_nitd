import React from "react";
import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

import "./Navbar.css";
const Navbar = () => {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <h3>TIC</h3>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">Speakers</a>
        <a href="/#">Agenda</a>
        <a href="/#">Venue</a>
        <a href="/#">Contact</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <GrClose />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <GiHamburgerMenu />
      </button>
    </header>
  );
};

export default Navbar;
