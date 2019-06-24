import React, { Component } from "react";

class FooterBottom extends Component {
  render() {
    return (
      <div>
        <div className="row foot-bottom">
          <h1 className="col-sm-2 foot-bottom-title">
            <span>
              <a href="/">meteor</a>
            </span>{" "}
            International Edition+
          </h1>
          <div className="col-sm-6" />
          <p className="col-sm-4 foot-bottom-detail">
            Congress Is About To Hand Over Your Personal Browsing Data. Congress
            Is Aboout to reach higher.
          </p>
        </div>
      </div>
    );
  }
}

export default FooterBottom;
