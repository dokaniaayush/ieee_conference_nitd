import React from "react";
import { Nav, Table } from "react-bootstrap";
import Navb from "../components/Navb";
import ScrollTop from "../components/ScrollTop";
import Footer from "./Footer";

const Tracks = () => {
  const tracksData = [
    {
      id: "1",
      trackNumber: "Track 1",
      nomenclature: "Microelectronic Circuits and Systems",
      societies:
        "1. IEEE Electron Device Society \n 2. IEEE Photonics Society \n 3. IEEE Circuits and Systems Society",
    },
    {
      id: "2",
      trackNumber: "Track 2",
      nomenclature: "Communication Systems & Networks",
      societies: "1. IEEE Communication Society",
    },
    {
      id: "3",
      trackNumber: "Track 3",
      nomenclature: "Signal Processing and Applications",
      societies: "1. IEEE Signal Processing Society",
    },
    {
      id: "4",
      trackNumber: "Track 4",
      nomenclature: "VLSI Technology and Embedded Systems",
      societies:
        "1. IEEE Electron Device Society \n 2. IEEE Circuits and Systems Society",
    },
  ];
  const subTracksData = [
    {
      id: "1",
      trackNumber: "Track 1",
      nomenclature: "Microelectronic Circuits and Systems",
      societies:
        "1. Electronic Device Physics \n 2. Photonic/ Opto-electronic Devices \n 3. Circuits and Systems \n 4. Nano-electronics \n 5. System Level design \n 6. Electronics for Green Technology \n 7. Nano scale device Modeling \n 8. Device processing Techniques",
    },
    {
      id: "2",
      trackNumber: "Track 2",
      nomenclature: "Communication Systems & Networks",
      societies:
        "1. Optical Fibre Communication and Systems. \n 2. Computer & Intelligent Communication \n 3. Wireless & Broadband Communication and Sensor Networks \n 4. Network Security \n5. RF Antenna Design and Modelling \n 6. Cognitive Communications \n7. Analog/Digital Communication Systems \n 8. LTE , 5G and 6G Design",
    },
    {
      id: "3",
      trackNumber: "Track 3",
      nomenclature: "Signal Processing and Applications",
      societies:
        "1. Signal Processing Systems and Algortihms \n 2. Radar Signal Processing \n 3. Speech and audio signal processing and coding \n 4. Image signal processing \n 5. Biomedical signal processing and bioinformatics \n 6. Remote sensing applications \n 7. Signal processing Applications \n 8. Computer & Intelligent Communication",
    },
    {
      id: "4",
      trackNumber: "Track 4",
      nomenclature: "VLSI Technology and Embedded Systems",
      societies:
        "1. VLSI Design \n 2. High Speed/Low Power Circuits \n 3. Digital Circuits and FPGA Based Designs \n 4. Analog/Mixed Signal System Design \n 5. Deep Submicron Design and Modeling Issues \n 6. Testing and Verification \n 7. Emerging Semiconductor Technologies \n 8. Real-Time Embedded Systems and Applications \n 9. Distributed Embedded Computing \n 10.Internet-of-Things",
    },
  ];

  return (
    <>
      <Navb />
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
            Tracks
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Track Number</th>
                <th>Nomenclature</th>
              </tr>
            </thead>
            <tbody>
              {tracksData.map(({ id, trackNumber, nomenclature }) => (
                <tr key={id}>
                  <td>{trackNumber}</td>
                  <td>{nomenclature}</td>
                  {/* <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {societies.split("\n").map((item, i) => (
                        <td
                          style={{
                            width: "100%",
                            textAlign: "left",
                          }}
                        >
                          {item}
                        </td>
                      ))}
                    </div> */}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
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
            Sub Tracks
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Track Number</th>
                <th>Nomenclature</th>
                {/* <th>Supported IEEE Societies</th> */}
              </tr>
            </thead>
            <tbody>
              {subTracksData.map(({ id, trackNumber, nomenclature }) => (
                <tr key={id}>
                  <td>{trackNumber}</td>
                  <td>{nomenclature}</td>
                  {/* <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      {societies.split("\n").map((item, i) => (
                        <td
                          style={{
                            width: "100%",
                            textAlign: "left",
                          }}
                        >
                          {item}
                        </td>
                      ))}
                    </div> */}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <hr style={{ backgroundColor: "white", height: "5px" }} />
      </div>

      <ScrollTop />

      <Footer />
    </>
  );
};

export default Tracks;
