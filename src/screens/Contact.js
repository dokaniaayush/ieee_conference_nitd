import React from 'react'

const Contact = () => {
  return (
    <div
      id='contact'
      className="container"
      style={{
        display: "flex",
        flex: "1",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin:"20px"
      }}
    >
    <h3 style={{ margin: "25px" }}>Contact Information</h3>
    <div
        classname="card"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          borderColor: "black",
          borderWidth: "2px",
          backgroundColor: "#465e87",
          width: "80%",
        }}
      >
    
    <div
          className="card"
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <div
            className="card-body"
            style={{
              width: "600px",
              marginBottom: "10px",
            }}
          >
            <h5 className="card-title">Prof. Manoj Kumar</h5>
            <p classname="card-text">
            Conference Chair
            </p>
            <p classname="card-text">
            Professor, Department of ECE, NIT Delhi
            </p>
            <p className="card-text">
            Email:{" "}
            <a href="mailto:manojtaleja@nitdelhi.ac.in">manojtaleja@nitdelhi.ac.in</a>
          </p>
          <p className="card-text">
            Contact Number:{" "}
            <a href="tel:9873853870">9873853870</a> ,
            <a href="tel:01133861150">011-33861150</a>
          </p>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <div
            className="card-body"
            style={{
              width: "600px",
              marginBottom: "10px",
            }}
          >
            <h5 className="card-title">Dr. Manisha Bharti</h5>
            <p classname="card-text">
            Organizing Secretary
            </p>
            <p classname="card-text">
            Associate Professor, Department of ECE, NIT Delhi
            </p>
            <p className="card-text">
            Email:{" "}
            <a href="mailto:manishabharti@nitdelhi.ac.in">manishabharti@nitdelhi.ac.in</a>
          </p>
          <p className="card-text">
            Contact Number:{" "}
            <a href="tel:9990344355">9990344355</a> ,
            <a href="tel:01133861156">011-33861156</a>
          </p>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <div
            className="card-body"
            style={{
              width: "600px",
              marginBottom: "10px",
            }}
          >
            <h5 className="card-title">Dr. Rikmantra Basu</h5>
            <p classname="card-text">
            Organizing Secretary
            </p>
            <p classname="card-text">
            Associate Professor, Department of ECE, NIT Delhi
            </p>
            <p className="card-text">
            Email:{" "}
            <a href="mailto:rikmantrabasu@nitelhi.ac.in">rikmantrabasu@nitelhi.ac.in</a>
          </p>
          <p className="card-text">
            Contact Number:{" "}
            <a href="tel:9899320887">9899320887</a> ,
            <a href="tel:01133861159">011-33861159</a>
          </p>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Contact