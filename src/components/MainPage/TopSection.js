import React, { Component } from "react";
import { Navbar, Nav, Card } from "react-bootstrap";
import { Style, StyleSmallCard } from "./../../itemsConfig";

class TopSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Style,
      smallData: StyleSmallCard
    };
  }
  render() {
    const { data, smallData } = this.state;
    return (
      <>
        <Navbar className="top-section-div">
          <Navbar.Brand href="#home" className="main-heading">
            Style Hunter
          </Navbar.Brand>

          <Nav className="mr-auto top-section-nav">
            <Nav.Link className="top-section-links" href="#world">
              WORLD
            </Nav.Link>
            <Nav.Link className="top-section-links" href="#people">
              PEOPLE
            </Nav.Link>
            <Nav.Link className="top-section-links" href="#food">
              FOOD
            </Nav.Link>
            <Nav.Link className="top-section-links" href="#animal">
              ANIMAL
            </Nav.Link>
          </Nav>
        </Navbar>

        {/* Bigger Container */}

        {data.map(item => {
          return (
            <Card>
              <Card.Img variant="top" src={item.image} />
              <Card.Body className="card-description">
                <span className="style-box">{item.style}</span>
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

        <div className="small-card-wrapper">
          {smallData.map(item => {
            return (
              <Card style={{ width: "22rem" }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body className="card-description">
                  <span className="style-box">{item.style}</span>
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
            );
          })}
        </div>
      </>
    );
  }
}

export default TopSection;
