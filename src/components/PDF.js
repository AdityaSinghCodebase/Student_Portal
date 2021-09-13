import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      <div className="Post" ref={ref}>
        <div>
          <h1>Student Admit Card 2021</h1>
          <br />

          <table class="table">
            <tr>
              <th scope="row">Name</th>
              <td>{props.name}</td>
            </tr>
            <tr>
              <th scope="row">Father Name</th>
              <td>{props.fatherName}</td>
            </tr>
            <tr>
              <th scope="row">Mobile Number</th>
              <td>{props.fatherMobile}</td>
            </tr>
            <tr>
              <th scope="row">Class</th>
              <td>{props.class}</td>
            </tr>
            <tr>
              <th scope="row">School</th>
              <td>{props.schoolName}</td>
            </tr>
            <tr>
              <th scope="row">Address</th>
              <td>{props.address}</td>
            </tr>
          </table>

          <br />
          <br />

          <p style={{ textAlign: "right" }}>Auth. Signature</p>
        </div>
      </div>
      <Pdf targetRef={ref} filename="admitCard.pdf">
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
