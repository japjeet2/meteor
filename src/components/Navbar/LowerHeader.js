import React, { Component } from "react";
import {HeaderData} from "./../../itemsConfig"

class LowerHeader extends Component {
  render() {
    return (
      <div className="lower-header">
        <nav
          className="navbar navbar-expand-lg"
          style={{ width: "80%", margin: "auto", padding: "0px" }}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="fas fa-bars fa-x" />
            </span>
          </button>
          <a className="navbar-brand" href="1">
          {
            HeaderData.map(item => {
              return(
                <img key ={item.id} src={item.logo} alt="logo" style={{ height: "30px" }} />
              )
            })
          }
            
          </a>

          <div
            className="collapse navbar-collapse navbardata"
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Fashion
                  <span className="sr-only" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  stylehunter
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" tabIndex="-1">
                  Lifestyle
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" tabIndex="-1">
                  Celebrity
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" tabIndex="-1">
                  Videos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" tabIndex="-1">
                  Interview
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                style={{ border: "none" }}
                aria-label="Search"
              />
              <i className="fas fa-search" style={{ color: "#020202" }} />
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
export default LowerHeader;
