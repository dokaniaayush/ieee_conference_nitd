import React from "react";
import SpeakerCard from "../components/SpeakerCard";

const Speakers = () => {
  return (
    <div id="speakers"
      style={{
        backgroundColor: "#465e87",
        height:"600px",
        overflow:"hidden"
      }}
    >
      <div className="vl fs-1 fw-bold"
        style={{ 
          color: "white", 
          textAlign: "left", 
          margin:"2%",
          paddingLeft:"10px"  }}
      >
        Our Speakers
      </div>
      <div 
        style={{
            display:"flex", 
            flexDirection:"row", 
            overflowX:"scroll",
            
            }}>
        <SpeakerCard
          img = "https://nitdelhi.irins.org/assets/profile_images/62649.jpg"
          name = "Rikarmantra Basu"
          post = "Faculty"
          disciption = "Best faculty of NITD"
          insta=""
          twitter=""
          linkedIn=""
        />
        <SpeakerCard
          img = "https://nitdelhi.irins.org/assets/profile_images/62649.jpg"
          name = "Rikarmantra Basu"
          post = "Faculty"
          disciption = "Best faculty of NITD"
          insta=""
          twitter=""
          linkedIn=""
        />
        <SpeakerCard
          img = "https://nitdelhi.irins.org/assets/profile_images/62649.jpg"
          name = "Rikarmantra Basu"
          post = "Faculty"
          disciption = "Best faculty of NITD"
          insta=""
          twitter=""
          linkedIn=""
        />
        <SpeakerCard
          img = "https://nitdelhi.irins.org/assets/profile_images/62649.jpg"
          name = "Rikarmantra Basu"
          post = "Faculty"
          disciption = "Best faculty of NITD"
          insta=""
          twitter=""
          linkedIn=""
        />
        <SpeakerCard
          img = "https://nitdelhi.irins.org/assets/profile_images/62649.jpg"
          name = "Rikarmantra Basu"
          post = "Faculty"
          disciption = "Best faculty of NITD"
          insta=""
          twitter=""
          linkedIn=""
        />
        <SpeakerCard
          img = "https://nitdelhi.irins.org/assets/profile_images/62649.jpg"
          name = "Rikarmantra Basu"
          post = "Faculty"
          disciption = "Best faculty of NITD"
          insta=""
          twitter=""
          linkedIn=""
        />
      </div>
    </div>
  );
};

export default Speakers;
