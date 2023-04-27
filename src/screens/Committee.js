import React from "react";

const Committee = () => {
  return (
    <div className="container">
      <h3 style={{ margin: "20px" }}>Committee</h3>
      <div
        classname="card"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div className="card-body">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Honorary Chair</h5>
              <p classname="card-text">
                Prof. Yogesh Singh, Vice Chancellor, Delhi University, India
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">General Chair</h5>
              <p classname="card-text">
                Prof. Ajay Kumar Sharma, Director, NIT Delhi
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Organizing Chair</h5>
              <p classname="card-text">
                Dr. Manoj Kumar, Professor, Electronics and Communication
                Engineering, NIT Delhi
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Organizing Secretary</h5>
              <p classname="card-text">
                Dr. Rikmantra Basu, Associate Professor, Electronics and
                Communication Engineering, NIT Delhi
              </p>
              <p className="card-text">Dr. Manisha Bharti, Associate Professor, Electronics and Communication Engineering, NIT Delhi</p>
            </div>
          </div>
          <div className='card'>
    <div className='card-body'>
        <h5 className='card-title'>Technical Program Chair</h5>
        <p>Dr. Rikmantra Basu, Associate Professor, Electronics and Communication Engineering, NIT Delhi</p>
    </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Committee;
