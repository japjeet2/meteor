import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class UpperHeader extends Component {
  render() {
    return (
      <div className="upper-header">
        <Navbar bg="dark" variant="dark">
          <div className="container">
            <Nav className="mr-auto">
              <Nav.Link href="#home">-5 C</Nav.Link>
              <Nav.Link href="#">New York</Nav.Link>
              <Nav.Link href="#">Monday, 6 March</Nav.Link>
              <Nav.Link href="#">Blog</Nav.Link>
              <Nav.Link href="#">Fo{/* <Nav.Link href="#search" className="mr-auto">
                <i className="fas fa-search" />
              </Nav.Link> */}rum</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
              <Nav.Link href="#">Buy Now !</Nav.Link>
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
