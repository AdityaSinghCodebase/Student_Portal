import React, { Component } from "react";
import PDF from "./PDF";

class Post extends Component {
  state = {
    name: "",
    dateOfBirth: "",
    image:
      "https://www.clipartmax.com/png/middle/127-1276121_logo-soldier-clip-art.png",
    standard: "",
    aadharNumber: "",

    postSubmitted: false,
  };

  onChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  sunmitPost = (e) => {
    if (!this.state.name || !this.state.standard) {
      alert("All fields are required!");
      e.preventDefault();
    } else {
      this.setState({
        postSubmitted: true,
      });
    }
  };

  render() {
    return (
      <>
        {!this.state.postSubmitted ? (
          <div className="container">
            <div className="jumbotron mt-3">
              <div className="row">
                <div className="col-md-12">
                  <div className="well well-sm">
                    <form className="form-horizontal" method="post">
                      <fieldset>
                        <legend
                          className="text-center header"
                          style={{ color: "blueviolet" }}
                        >
                          SARASWATI SAMAJ SEWA SAMITI
                        </legend>
                        <legend
                          className="text-center header"
                          style={{ color: "orange" }}
                        >
                          SRI NIVASH MEDHA KHOJ PRATIYOGITA 2021
                        </legend>
                        <legend className="text-center header">
                          Enter Your Data Here
                        </legend>
                        <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                          <input
                            onChange={this.onChange("name")}
                            name="title"
                            type="text"
                            placeholder="Student Name :"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                          <input
                            onChange={this.onChange("dateOfBirth")}
                            name="title"
                            type="text"
                            placeholder="Date Of Birth : dd/mm/yyyy"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                          <input
                            onChange={this.onChange("aadharNumber")}
                            name="title"
                            type="text"
                            placeholder="Aadhar Number :"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <span className="col-md-1 col-md-offset-2 text-center">
                            <i className="fa fa-user bigicon"></i>
                          </span>
                          <input
                            onChange={this.onChange("standard")}
                            name="title"
                            type="text"
                            placeholder="Class :"
                            className="form-control"
                          />
                        </div>

                        <div className="form-group">
                          <button
                            type="button"
                            onClick={this.sunmitPost}
                            className="btn btn-primary btn-lg"
                          >
                            Submit
                          </button>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <PDF
            name={this.state.name}
            dateOfBirth={this.state.dateOfBirth}
            image={this.state.image}
            standard={this.state.standard}
            aadharNumber={this.state.aadharNumber}
          />
        )}
      </>
    );
  }
}

export default Post;
