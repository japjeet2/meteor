import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

class LowerHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Meteor</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#Fashion">Fashion</Nav.Link>
              <Nav.Link href="#style-hunter">Style Hunter</Nav.Link>
              <NavDropdown title="Lifestyle" id="basic-nav-dropdown">
                <NavDropdown.Item href="#life/3.1">Life</NavDropdown.Item>
                <NavDropdown.Item href="#culture/3.2">Culture</NavDropdown.Item>
                <NavDropdown.Item href="#youth/3.3">Youth</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="#energy/3.4">Energy</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">Celebrities</Nav.Link>
              <NavDropdown title="Videos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#life/5.1">Life</NavDropdown.Item>
                <NavDropdown.Item href="#culture/5.2">Culture</NavDropdown.Item>
                <NavDropdown.Item href="#youth/5.3">Youth</NavDropdown.Item>
                <NavDropdown.Item href="#energy/5.4">Energy</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#interviews">Interview</Nav.Link>
            </Nav>
            <Nav className="mr-auto"><i class="fas fa-search"></i></Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}
export default LowerHeader;
