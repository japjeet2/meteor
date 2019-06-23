import React, { Component } from "react";

class FooterTop extends Component {
  render() {
    return (
      <div className="row foot-top-wrapper">
        <h1 className="col-sm-3 foot-top-heading">
          <button>Meteor</button>
        </h1>
        <ul className="col-sm-9 foot-top-list">
          <li>Business</li>
          <li>Investing</li>
          <li>Technology</li>
          <li>Entrepreneurs</li>
          <li>Op/ed</li>
          <li>LeaderShip</li>
          <li>Lifestyle</li>
          <li>List</li>
        </ul>
      </div>
    );
  }
}

export default FooterTop;
