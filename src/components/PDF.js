import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PDF = ({ name, dateOfBirth, aadharNumber, standard }) => {
  return (
    <>
      <div className="Post" ref={ref}>
        <div style={{ border: "1px solid black", margin: "10px 50px" }}>
          <div>
            <div className="hljs-title">
              <h1 className="header" style={{ textTransform: "uppercase" }}>
                saraswati samaj sewa samiti
              </h1>

              <h4
                className="subsection-title"
                style={{
                  textTransform: "uppercase",
                  textDecoration: "underline",
                }}
              >
                sri nivash medha khoj pratiyogita 2021
              </h4>
            </div>
            <br />

            <div>
              <h3
                className="header"
                style={{
                  textAlign: "center",
                  textTransform: "uppercase",
                  margin: "20px",
                }}
              >
                student admit card
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "50% 50%",
                  gap: "10px",
                  margin: "20px",
                }}
              >
                <div style={{ textAlign: "left" }}>
                  <p>
                    {" "}
                    <span style={{ fontWeight: 700 }}>Student Name : </span>
                    {name}
                  </p>
                  <p>
                    {" "}
                    <span style={{ fontWeight: 700 }}>
                      Date of Birth :
                    </span>{" "}
                    {dateOfBirth}
                  </p>
                  <p>
                    {" "}
                    <span style={{ fontWeight: 700 }}>Aadhar Card :</span>{" "}
                    {aadharNumber}
                  </p>
                  <p>
                    {" "}
                    <span style={{ fontWeight: 700 }}>Class :</span> {standard}
                  </p>
                  <p>
                    {" "}
                    <span style={{ fontWeight: 700 }}>Roll No. :</span>{" "}
                    __________________________
                  </p>
                </div>
                <div
                  style={{
                    width: "200px",
                    height: "200px",
                    border: "3px solid black",
                  }}
                ></div>
              </div>
            </div>

            <p style={{ textAlign: "right", fontWeight: 700, margin: 20 }}>
              Auth. Signature
            </p>
          </div>
        </div>
      </div>
      <Pdf targetRef={ref} filename={name + " admit card"}>
        {({ toPdf }) => (
          <button className="btn-outline-success btn-lg" onClick={toPdf}>
            Print your Admit Card
          </button>
        )}
      </Pdf>
    </>
  );
};

export default PDF;
