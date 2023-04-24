import React from "react";

const SpeakerImg = (props) => {
    return(
        <div>
            <img src = {props.imageLink} style={{width:"100%", height:"350px"}}></img>
        </div>
    );
};

export default SpeakerImg;