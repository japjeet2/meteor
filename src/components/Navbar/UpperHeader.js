import React, { Component } from "react";

class UpperHeader extends Component {
  render() {
    return (
      <div className="primarynav" style={{ background: "#1A0E36" }}>
        <nav
          className="navbar navbar-expand-lg"
          style={{ width: "80%", margin: "auto", padding: "0px" }}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="fas fa-bars fa-x" />
            </span>
          </button>

          <div
            className="collapse navbar-collapse navbardata"
            id="navbarTogglerDemo03"
          >
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  -5C New York<span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Monday,March 6
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" tabIndex="-1">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" tabIndex="-1">
                  Forum
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" tabIndex="-1">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" tabIndex="-1">
                  Buy Now!
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <i className="fab fa-instagram mr-2" />
              <i className="fab fa-facebook mr-2" />
              <i className="fab fa-linkedin mr-4" />
              <i className="far fa-user-circle mr-2" />
              <span>Sign in</span>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default UpperHeader;
