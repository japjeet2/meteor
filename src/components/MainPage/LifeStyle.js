import React, { Component } from "react";
import { Navbar, Nav, Card } from "react-bootstrap";
import {
  LifeStyleData,
  LifeStyleSmallCardCol1,
  LifeStyleSmallCardCol2
} from "../../itemsConfig";

class LifeStyle extends Component {

  render() {
    return (
      <div className="main-page-wrapper">
        {/* Life Style Header */}
        <Navbar className="top-section-div">
          <Navbar.Brand href="#home" className="life-style-heading">
            Life Style
          </Navbar.Brand>
          <Nav className="mr-auto top-section-nav">
            <Nav.Link className="top-section-links life-style-hover" href="#world">
              WORLD
            </Nav.Link>
            <Nav.Link className="top-section-links life-style-hover" href="#people">
              PEOPLE
            </Nav.Link>
            <Nav.Link className="top-section-links life-style-hover" href="#food">
              FOOD
            </Nav.Link>
            <Nav.Link className="top-section-links life-style-hover" href="#animal">
              ANIMAL
            </Nav.Link>
          </Nav>
        </Navbar>

        {/* Life Style Bigger Container */}

        {LifeStyleData.map(item => {
          return (
            <Card key={item.id}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body className="card-description card-description-2">
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

        {/* Life Style Smaller Container */}

        <div className="row micro-row">
          <ul className="col-sm-6">
            {LifeStyleSmallCardCol1.map(item => {
              return (
                <li key={item.id} className="micro-col">
                  <img className="micro-img" src={item.photo} alt="" />
                  <div className="micro-desc-wrapper">
                    <p className="micro-desc common-desc">{item.description}</p>
                    <span className="micro-author common-author">{item.authorDetails}</span>
                  </div>
                </li>
              );
            })}
          </ul>

          <ul className="col-sm-6">
            {LifeStyleSmallCardCol2.map(item => {
              return (
                <li key={item.id} className="micro-col">
                  <img className="micro-img" src={item.photo} alt="" />
                  <div className="micro-desc-wrapper">
                    <p className="micro-desc common-desc">{item.description}</p>
                    <span className="micro-author common-author">{item.authorDetails}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default LifeStyle;
