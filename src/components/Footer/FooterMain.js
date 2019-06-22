import React, { Component } from "react";
import FooterTop from "./FooterTop";
import FooterMiddle from "./FooterMiddle";
import FooterBottom from "./FooterBottom";
class FooterMain extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="container">
          <FooterTop />
          <FooterMiddle />
          <FooterBottom />
        </div>
      </div>
    );
  }
}

export default FooterMain;
