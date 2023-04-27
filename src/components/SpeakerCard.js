import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const SpeakerCard = (props) => {
    return (
        <div className="cards" >
            <div className="card">
                <img src={props.img} alt="pic" className="card__img" />
                <div className="card__info">
                    <span className="card__title"> {props.name} </span>
                    <h3 className="card__category "> {props.post} </h3>
                    <p class="card-text">{props.disciption}</p>                
                    <div>
                        <a href={props.insta} className="instagram social" style={{ color: "black", margin: "2px" }}>
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <a href={props.twitter} className="twitter social" style={{ color: "black", margin: "2px" }}>
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a href={props.linkedIn} className="linkedin social" style={{ color: "black", margin: "2px" }}>
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpeakerCard;