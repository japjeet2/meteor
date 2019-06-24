import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class UpperHeader extends Component {
  render() {
    return (
      <div className="upper-header">
        <Navbar bg="dark" variant="dark">
          <div className="container">
            <Nav className="mr-auto">
              <Nav.Link className="upper-header-links" href="#home">-5 C</Nav.Link>
              <Nav.Link className="upper-header-links" href="#">New York</Nav.Link>
              <Nav.Link className="upper-header-links" href="#">Monday, 6 March</Nav.Link>
              <Nav.Link className="upper-header-links" href="#">Blog</Nav.Link>
              <Nav.Link className="upper-header-links" href="#">Forum</Nav.Link>
              <Nav.Link className="upper-header-links" href="#">Contact</Nav.Link>
              <Nav.Link className="upper-header-links" href="#">Buy Now !</Nav.Link>
            </Nav>

            <Nav className="mr-auto">
              <Nav.Link href="#">
                <i className="fab fa-pinterest" />
              </Nav.Link>
              <Nav.Link href="#">
                <i className="fab fa-facebook-square" />
              </Nav.Link>
              <Nav.Link href="#">
                <i className="fab fa-instagram" />
              </Nav.Link>
              <Nav.Link href="#">
                <i className="fab fa-google" />
              </Nav.Link>
              <Nav.Link href="#">
                <i className="fas fa-sign-in-alt" />
              </Nav.Link>
              <Nav.Link href="#">Sign in</Nav.Link>
            </Nav>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default UpperHeader;
