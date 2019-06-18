import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

class UpperHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="mr-auto">
              <Nav.Link href="#home">-5 C</Nav.Link>
              <Nav.Link href="#">New York</Nav.Link>
              <Nav.Link href="#">Monday, 6 March</Nav.Link>
              <Nav.Link href="#">Blog</Nav.Link>
              <Nav.Link href="#">Forum</Nav.Link>
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
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default UpperHeader;
