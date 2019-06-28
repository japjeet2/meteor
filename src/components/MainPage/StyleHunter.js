import React, { Component } from "react";
import { Navbar, Nav, Card } from "react-bootstrap";
import { StyleData, StyleSmallCard } from "../../itemsConfig";

class StyleHunter extends Component {

  render() {

    return (
      <div className="main-page-wrapper style-hunter-specific">
        {/* Style Hunter Header */}

        <Navbar className="top-section-div">
          <Navbar.Brand href="#home" className="style-hunter-heading">
            Style Hunter
          </Navbar.Brand>

          <Nav className="mr-auto top-section-nav">
            <Nav.Link className="top-section-links style-hunter-hover" href="#world">
              WORLD
            </Nav.Link>
            <Nav.Link className="top-section-links style-hunter-hover" href="#people">
              PEOPLE
            </Nav.Link>
            <Nav.Link className="top-section-links style-hunter-hover" href="#food">
              FOOD
            </Nav.Link>
            <Nav.Link className="top-section-links style-hunter-hover" href="#animal">
              ANIMAL
            </Nav.Link>
          </Nav>
        </Navbar>

        {/* Bigger Container */}

        {StyleData.map(item => {
          return (
            <Card key={item.id}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body className="card-description">
                <span
                  className="style-box"
                  style={{ backgroundColor: `${item.backgroundColor}` }}
                >
                  {item.style}
                </span>
                <span className="view-style">
                  <i className="fas fa-eye" />
                  {item.view}
                </span>
                <Card.Title className="heading-style">
                  {item.heading}
                </Card.Title>
                <span className="card-author-details">
                  {item.authorDetails}
                </span>
                <Card.Text className="card-text">{item.description}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}

        {/* Smaller Containers */}

        <ul className="row row-wrapper">
          {StyleSmallCard.map(item => {
            return (
              <li key={item.id} className="col-sm-6">
                <Card className="small-cards" key={item.id} >
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body className="card-description">
                    <span className="style-box" style={{ backgroundColor: `${item.backgroundColor}` }}>{item.style}</span>
                    <span className="view-style">
                      <i className="fas fa-eye" />
                      {item.view}
                    </span>
                    <Card.Title className="heading-style">
                      {item.heading}
                    </Card.Title>
                    <span className="card-author-details">
                      {item.authorDetails}
                    </span>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default StyleHunter;
