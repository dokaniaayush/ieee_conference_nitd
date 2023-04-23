import React from "react";
import { Form, Button } from "react-bootstrap";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: "5",
      }}
    />
  );
  return (
    <div id="footer" style={{ backgroundColor: "#465e87" }}>
      {/* <div className='' id="foo-top">
        <p className='fs-1 text-white'>Tech Innovation</p>
        <p className='fs-1 text-white'>Conference 2035</p>
      </div> */}
      {/* <br /> */}
      {/* <ColoredLine color="red"/> */}
      <div id="foo-middle" style={{ display: "flex", flexDirection: "row" }}>
        <div className="lg-3 md-2 sm-4 m-5">
          <p className="fs-2 text-white">What</p>
          <p className="fs-5 text-bold">Date</p>
        </div>
        <div className="lg-3 md-2 sm-4 m-5">
          <p className="fs-2 text-white">When</p>
          <p className="fs-5 text-bold">Date</p>
        </div>
        <div className="lg-3 md-2 sm-4 m-5">
          <p className="fs-2 text-white">Where</p>
          <p className="fs-5 text-bold">Date</p>
        </div>
      </div>
      <div className="" id="foo-bottom">
        <h2 className="text-white">Contact Us</h2>
        {/* <br /> */}
        <Form style={{ display: "flex", flexDirection: "row" }}>
          <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Button className="m-2" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {/* <br /> */}
        <ul
          id="social_media_icons"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <li className="socialIcons">
            <AiFillFacebook />
          </li>
          <li className="socialIcons">
            <AiFillTwitterCircle />
          </li>
          <li className="socialIcons">
            <AiOutlineInstagram />
          </li>
          <li className="socialIcons">
            <AiFillLinkedin />
          </li>
        </ul>
        {/* <br /> */}
      </div>
      <div
        className="footer-copyright text-center"
        style={{
          margin: 0,
        }}
      >
        <p className="mb-2">
          2023 Copyright © National Institute Of Technology, Delhi. All Rights
          Reserved
        </p>
        <p>
          Crafted with ❤️ by
          <a href="" target="_blank" rel="noopener">
            1
          </a>
          ,
          <a href="" target="_blank" rel="noopener">
            1
          </a>
          ,
          <a href="" target="_blank" rel="noopener">
            1
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
