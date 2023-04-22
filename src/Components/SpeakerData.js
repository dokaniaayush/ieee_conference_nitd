import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

const SpeakerData = (props) => {
    return(
        <div>
            <h1>{props.name}</h1>
            <h3>{props.post}</h3>
            <a href={props.insta} className="instagram social" style={{color:"white", margin:"2px"}}>
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href={props.twitter} className="twitter social" style={{color:"white", margin:"2px"}}>
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href={props.linkedIn} className="linkedin social" style={{color:"white", margin:"2px"}}>
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <p>{props.discription}</p>
        </div>
    );
};

export default SpeakerData;