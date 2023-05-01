import React from 'react'

const Card = (props) => {
    const mail="mailto:"+props.email;
  return (
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
          <h5 className="card-title">{props.name}</h5>
          <p classname="card-text">
            {props.description}
          </p>
          <p className="card-text">
            Email: <a href={mail}>{props.email}</a>
          </p>
        </div>
      </div>
  )
}

export default Card;