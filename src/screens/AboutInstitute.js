import React from "react";

const AboutInstitute = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <h3 style={{color: "#273053"}}>
          About the Department of Electronics and Communication Engineering, NIT
          Delhi
        </h3>
        <br/>
        <div style={{textAlign: "justify",}}>
          <p>
            The Department of ECE was established in 2010, immediately with the
            beginning of the Institute under the aegis of the Ministry of
            Education (MoE), Govt. of India. Currently, the Department is offering
            one undergraduate program as B. Tech (ECE) and two postgraduate
            programs as M. Tech. ECE and M. Tech. ECE (VLSI). The Department also
            offers Ph. D. and Post-Doctoral Fellowship (PDF) Programme in relevant
            areas of electronics and communication engineering. Department has
            good infrastructure including laboratories and research facilities in
            electronic devices and circuits, electronic measurement and
            instrumentation, microprocessor and microcontroller, microwave and
            antenna design, optical fiber communication and optical devices,
            multimedia, advanced communication and VLSI design. Faculty members of
            ECE department have received projects, grants, and fellowships from
            various funding agencies. The Department has active collaborations
            with academic & research institutes.
          </p>
          <p>
            The Department of ECE has a blend of young as well as experienced
            dynamic faculty members and is committed to providing quality
            education and research in the field. Faculty members of the department
            have excellent academic & research credentials and published many
            peer-reviewed journal articles/papers, Books, Book Chapters, etc. in
            the diversified field and have adequate experience in teaching and
            research. The department of ECE provides a creative learning
            environment to the students for excellence in technical education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutInstitute;
