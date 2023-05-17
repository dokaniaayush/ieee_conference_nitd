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
        <h3 style={{ color: "#273053" }}>
          About the Institute
        </h3>
        <br />
        <div style={{ textAlign: "justify", }}>
          <p>
            National Institute of Technology Delhi (NITD) is one of the ten new NIT (s) established in the
            year 2010 by an act of parliament and has been declared as an Institute of National importance. 
            NIT Delhi is an autonomous Institute which functions under the aegis of Ministry of Human Resource 
            Development, Government of India. It aims to provide instructions and research facilities in various 
            disciplines of Engineering, Science and Technology, Management, Social Sciences and Humanities for 
            advance learning and dissemination of knowledge. The mission of NIT Delhi is to produce human resource 
            those who are creative, competitive and innovative with high intellect and ethical values.
          </p>
          <hr/>
          <h3 style={{textAlign:"center", color: "#273053" }}>
          About the Department
        </h3><br/>
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
