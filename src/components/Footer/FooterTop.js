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
            <li className="col-sm-2 foot-nav">
              <a href="/">Business</a>
            </li>
            <li className="col-sm-2 foot-nav">
              <a href="/">Investing</a>
            </li>
            <li className="col-sm-2 foot-nav">
              <a href="/">Technology</a>
            </li>
            <li className="col-sm-2 foot-nav">
              <a href="/">Entrepreneurs</a>
            </li>
            <li className="col-sm-2 foot-nav">
              <a href="/">Operations</a>
            </li>
            <li className="col-sm-2 foot-nav">
              <a href="/">Leadership</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FooterTop;
