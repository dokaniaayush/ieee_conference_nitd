import React from "react";

const SpeakerImg = (props) => {
    return(
        <>
            <img src={props.imageLink} style={{width:"40%", height:"400px", marginRight:"30px"}}></img>
        </>
    );
};

export default SpeakerImg;