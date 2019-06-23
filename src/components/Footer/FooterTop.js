import React, { Component } from "react";

class FooterTop extends Component {
  render() {
    return (
      <div className="row foot-top-wrapper">
        <h1 className="col-sm-3 foot-top-heading">
          <button>Meteor</button>
        </h1>
        <div className="col-sm-9">
        <ul className="row foot-top-list">
          <li className="col-sm-2"><a href="/">Business</a></li>
          <li className="col-sm-2"><a href="/">Investing</a></li>
          <li className="col-sm-2"><a href="/">Technology</a></li>
          <li className="col-sm-2"><a href="/">Entrepreneurs</a></li>
          <li className="col-sm-2"><a href="/">Op/ed</a></li>
          <li className="col-sm-2"><a href="/">Leadership</a></li>


        </ul>
        </div>
      </div>
    );
  }
}

export default FooterTop;
