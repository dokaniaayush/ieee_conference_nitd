import React from "react";

const Location = () => {
  return (
    <div
      id="location"
      // style={{ height: "100%", width: "100%", overflow: "hidden" }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.7589707644056!2d77.13065381102261!3d28.81625577546296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b1923ada2e3%3A0x1169930518add2fe!2sNational%20Institute%20of%20Technology%20Delhi!5e0!3m2!1sen!2sin!4v1682107206687!5m2!1sen!2sin"
        style={{ border: "0", height: "100%", width: "100%" }}
        allowfullscreen="true"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Location;
