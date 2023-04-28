import React from "react";
import Navb from "../components/Navb";

const Committee = () => {
  return (
    <>
      <Navb />
      <div
        className="container"
        style={{
          display: "flex",
          flex: "1",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h3 style={{ margin: "20px" }}>Committee</h3>
        <div
          classname="card"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            borderColor: "black",
            borderWidth: "2px",
            backgroundColor: "blue",
            width: "80%",
            height: "800px",
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
              <h5 className="card-title">Honorary Chair</h5>
              <p classname="card-text">
                Prof. Yogesh Singh, Vice Chancellor, Delhi University, India
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
              <h5 className="card-title">Honorary Chair</h5>
              <p classname="card-text">
                Prof. Yogesh Singh, Vice Chancellor, Delhi University, India
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
              <h5 className="card-title">Honorary Chair</h5>
              <p classname="card-text">
                Prof. Yogesh Singh, Vice Chancellor, Delhi University, India
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
              <h5 className="card-title">Honorary Chair</h5>
              <p classname="card-text">
                Prof. Yogesh Singh, Vice Chancellor, Delhi University, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Committee;
