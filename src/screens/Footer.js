import React from "react";
import { Form, Button } from "react-bootstrap";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { BiPhone } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import "./Footer.css";

const Footer = () => {
  // const ColoredLine = ({ color }) => (
  //   <hr
  //     style={{
  //       color: color,
  //       backgroundColor: color,
  //       height: "5",
  //     }}
  //   />
  // );
  return (
    // <div id="footer" style={{ backgroundColor: "#465e87" }}>
    //   {/* <div className='' id="foo-top">
    //     <p className='fs-1 text-white'>Tech Innovation</p>
    //     <p className='fs-1 text-white'>Conference 2035</p>
    //   </div> */}
    //   {/* <br /> */}
    //   <ColoredLine color="red"/>
    //   <div id="foo-middle" style={{ display: "flex", flexDirection: "row" }}>
    //     <div className="lg-3 md-2 sm-4 m-5">
    //       <p className="fs-2 text-white">What</p>
    //       <p className="fs-5 text-bold">Date</p>
    //     </div>
    //     <div className="lg-3 md-2 sm-4 m-5">
    //       <p className="fs-2 text-white">When</p>
    //       <p className="fs-5 text-bold">Date</p>
    //     </div>
    //     <div className="lg-3 md-2 sm-4 m-5">
    //       <p className="fs-2 text-white">Where</p>
    //       <p className="fs-5 text-bold">Date</p>
    //     </div>
    //   </div>
    //   <div className="" id="foo-bottom">
    //     <h2 className="text-white">Contact Us</h2>
    //     {/* <br /> */}
    //     <Form style={{ display: "flex", flexDirection: "row" }}>
    //       <Form.Group className="mb-3 m-2" controlId="formBasicEmail">
    //         <Form.Control type="email" placeholder="Enter email" />
    //       </Form.Group>
    //       <Button className="m-2" variant="primary" type="submit">
    //         Submit
    //       </Button>
    //     </Form>
    //     {/* <br /> */}
    //     <ul
    //       id="social_media_icons"
    //       style={{ display: "flex", flexDirection: "row" }}
    //     >
    //       <li className="socialIcons">
    //         <AiFillFacebook />
    //       </li>
    //       <li className="socialIcons">
    //         <AiFillTwitterCircle />
    //       </li>
    //       <li className="socialIcons">
    //         <AiOutlineInstagram />
    //       </li>
    //       <li className="socialIcons">
    //         <AiFillLinkedin />
    //       </li>
    //     </ul>
    //     {/* <br /> */}
    //   </div>
    //   <div
    //     className="footer-copyright text-center"
    //     style={{
    //       margin: 0,
    //     }}
    //   >
    //     <p>
    //       2023 Copyright © National Institute Of Technology, Delhi. All Rights
    //       Reserved
    //     </p>
    //     <p>
    //       Crafted with ❤️ by
    //       <a href="" target="_blank" rel="noopener">
    //         1
    //       </a>
    //       ,
    //       <a href="" target="_blank" rel="noopener">
    //         1
    //       </a>
    //       ,
    //       <a href="" target="_blank" rel="noopener">
    //         1
    //       </a>
    //     </p>
    //   </div>
    // </div>
    
    <div
      id="footer"
      style={{ backgroundColor: "#273053", width: "100%", height: "100%" }}
    >
      <div
        className="infoCard"
        style={{
          display: "flex",
          width: "60%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "20px",
          color: "white",
        }}
      >
        <div
          className="whatInfo"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h4>What</h4>
          <p style={{ marginTop: "8px" }}>ICMCSP 2024</p>
        </div>
        <div
          className="whenInfo"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h4>When</h4>
          <p style={{ marginTop: "8px" }}>Aug 9-11, 2024</p>
        </div>
        <div
          className="whereInfo"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h4>Where</h4>
          <p style={{ marginTop: "8px" }}>NIT Delhi</p>
        </div>
      </div>
      <hr />
      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3 style={{ marginTop: "15px" }}>Contact Information</h3>
        <div
          className="contactCard"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "85%",
            marginTop: "20px",
            marginBottom: "30px",
          }}
        >
          <div
            className="contact1"
            style={{
              borderColor: "#273053",
              borderWidth: "1px",
              borderRadius: "25px",
              borderStyle: "solid",
              boxShadow: "0 1rem 3rem rgba(0,0,0,.575)",
              padding: "25px",
              transition: "ease-in 0.5s",
            }}
          >
            <div>
              <IoPersonOutline
                style={{ marginBottom: "10px", width: "25px", height: "25px" }}
              />
              <p style={{ fontWeight: "bold" }}>Prof. Manoj Kumar</p>
              <p>Conference Chair</p>
              <p>Professor, Department of ECE, NIT Delhi</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CiMail
                style={{
                  width: "25px",
                  height: "25px",
                  cursor: "pointer",
                }}
              />
              <p
                style={{
                  marginTop: "10px",
                  marginLeft: "6px",
                  cursor: "pointer",
                }}
                onClick={() =>
                  (window.location = "mailto:manojtaleja@nitdelhi.ac.in")
                }
              >
                manojtaleja@nitdelhi.ac.in
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BiPhone
                style={{
                  width: "25px",
                  height: "25px",
                  cursor: "pointer",
                }}
              />
              <p
                style={{
                  marginTop: "12px",
                  marginLeft: "6px",
                  cursor: "pointer",
                }}
              >
                9873853870, 011-33861150
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginTop: "20px",
            marginBottom: "30px",
          }}
        >
          <div
            className="contact3"
            style={{
              borderColor: "#273053",
              borderWidth: "1px",
              borderRadius: "25px",
              borderStyle: "solid",
              boxShadow: "0 1rem 3rem rgba(0,0,0,.575)",
              padding: "25px",
              transition: "ease-in 0.5s",
              marginLeft: "20px",
            }}
          >
            <div>
              <IoPersonOutline
                style={{ marginBottom: "10px", width: "25px", height: "25px" }}
              />
              <p style={{ fontWeight: "bold" }}>Dr. Rikmantra Basu</p>
              <p>Convener</p>
              <p>Associate Professor, Department of ECE, NIT Delhi</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CiMail
                style={{
                  width: "25px",
                  height: "25px",
                  cursor: "pointer",
                }}
              />
              <p
                style={{
                  marginTop: "10px",
                  marginLeft: "6px",
                  cursor: "pointer",
                }}
                onClick={() =>
                  (window.location = "mailto:rikmantrabasu@nitelhi.ac.in")
                }
              >
                rikmantrabasu@nitelhi.ac.in
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BiPhone
                style={{
                  width: "25px",
                  height: "25px",
                  cursor: "pointer",
                }}
              />
              <p
                style={{
                  marginTop: "12px",
                  marginLeft: "6px",
                  cursor: "pointer",
                }}
              >
                9899320887, 011-33861159
              </p>
            </div>
          </div>
          <div
            className="contact2"
            style={{
              borderColor: "#273053",
              borderWidth: "1px",
              borderRadius: "25px",
              borderStyle: "solid",
              boxShadow: "0 1rem 3rem rgba(0,0,0,.575)",
              padding: "25px",
              transition: "ease-in 0.5s",
              marginLeft: "20px",
            }}
          >
            <div>
              <IoPersonOutline
                style={{ marginBottom: "10px", width: "25px", height: "25px" }}
              />
              <p style={{ fontWeight: "bold" }}>Dr. Manisha Bharti</p>
              <p>Convener</p>
              <p>Associate Professor, Department of ECE, NIT Delhi</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CiMail
                style={{
                  width: "25px",
                  height: "25px",
                  cursor: "pointer",
                }}
              />
              <p
                style={{
                  marginTop: "10px",
                  marginLeft: "6px",
                  cursor: "pointer",
                }}
                onClick={() =>
                  (window.location = "mailto:manishabharti@nitdelhi.ac.in")
                }
              >
                manishabharti@nitdelhi.ac.in
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BiPhone
                style={{
                  width: "25px",
                  height: "25px",
                  cursor: "pointer",
                }}
              />
              <p
                style={{
                  marginTop: "12px",
                  marginLeft: "6px",
                  cursor: "pointer",
                }}
              >
                9990344355, 011-33861156
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginTop: "20px",
            marginBottom: "30px",
          }}
        >
          <div
            className="contact3"
            style={{
              borderColor: "#273053",
              borderWidth: "1px",
              borderRadius: "25px",
              borderStyle: "solid",
              boxShadow: "0 1rem 3rem rgba(0,0,0,.575)",
              padding: "25px",
              transition: "ease-in 0.5s",
              marginLeft: "20px",
            }}
          >
            <div>
              <IoPersonOutline
                style={{ marginBottom: "10px", width: "25px", height: "25px" }}
              />
              <p style={{ fontWeight: "bold" }}>Dr. D.Vaithiyanathan</p>
              <p>Organizing Secretary</p>
              <p>Assistant Professor, Department of ECE, NIT Delhi</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CiMail
                style={{
                  width: "25px",
                  height: "25px",
                  cursor: "pointer",
                }}
              />
              <p
                style={{
                  marginTop: "10px",
                  marginLeft: "6px",
                  cursor: "pointer",
                }}
                onClick={() =>
                  (window.location = "mailto:sandeep@nitdelhi.ac.in")
                }
              >
                {/* rikmantrabasu@nitelhi.ac.in */}
                sandeep@nitdelhi.ac.in
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BiPhone
                style={{
                  width: "25px",
                  height: "25px",
                  cursor: "pointer",
                }}
              />
              <p
                style={{
                  marginTop: "12px",
                  marginLeft: "6px",
                  cursor: "pointer",
                }}
              >
                9899320887, 011-33861159
              </p>
            </div>
          </div>
          <div
            className="contact2"
            style={{
              borderColor: "#273053",
              borderWidth: "1px",
              borderRadius: "25px",
              borderStyle: "solid",
              boxShadow: "0 1rem 3rem rgba(0,0,0,.575)",
              padding: "25px",
              transition: "ease-in 0.5s",
              marginLeft: "20px",
            }}
          >
            <div>
              <IoPersonOutline
                style={{ marginBottom: "10px", width: "25px", height: "25px" }}
              />
              <p style={{ fontWeight: "bold" }}>Dr. Sandeep Kumar</p>
              <p>Organizing Secretary</p>
              <p>Assistant Professor, Department of ECE, NIT Delhi</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CiMail
                style={{
                  width: "25px",
                  height: "25px",
                  cursor: "pointer",
                }}
              />
              <p
                style={{
                  marginTop: "10px",
                  marginLeft: "6px",
                  cursor: "pointer",
                }}
                onClick={() =>
                  (window.location = "mailto:sandeep@nitdelhi.ac.in")
                }
              >
                sandeep@nitdelhi.ac.in
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BiPhone
                style={{
                  width: "25px",
                  height: "25px",
                  cursor: "pointer",
                }}
              />
              <p
                style={{
                  marginTop: "12px",
                  marginLeft: "6px",
                  cursor: "pointer",
                }}
              >
                +91-11-33861155
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bottomContainer"
        style={{
          backgroundColor: "#273053",
          color: "white",
          width: "100%",
        }}
      >
        <p
          style={{
            marginTop: "8px",
          }}
        >
          2023 Copyright © National Institute Of Technology, Delhi. All Rights
          Reserved
        </p>
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "#1c223b",
          color: "white",
          padding: "8px",
          // marginBottom: "0px",
        }}
      >
        <p
          style={{
            marginBottom: "0px",
          }}
        >
          Site developed by{" "}
          <a
            href="https://www.linkedin.com/in/ayush-dokania-2b27131b9/"
            style={{
              textDecorationLine: "none",
            }}
          >
            AYUSH Kr. DOKANIA,
          </a>,{" "}
          <a
            href="https://www.linkedin.com/in/manan-jain-65aa561b7/"
            style={{
              textDecorationLine: "none",
            }}
          >
            MANAN JAIN
          </a>,{" "}
          <a
            href="https://www.linkedin.com/in/priyanshu-agrawal-5a00651b1/"
            style={{
              textDecorationLine: "none",
            }}
          >
            PRIYANSHU AGRAWAL
          </a>
          ,{" "}Students of NIT Delhi, of ECE Branch
        </p>
      </div>
    </div>
  );
};

export default Footer;
