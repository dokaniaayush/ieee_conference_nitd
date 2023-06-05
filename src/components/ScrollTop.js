import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const top = document.documentElement.scrollTop;
    if (top > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      variant="primary"
      className={`scroll-top-btn ${isVisible ? "show" : "hide"}`}
      onClick={scrollToTop}
      style={{right:"auto", marginLeft:"1%"}}
    >
      <FontAwesomeIcon icon={faArrowCircleUp} />
    </Button>
  );
};

export default ScrollTop;