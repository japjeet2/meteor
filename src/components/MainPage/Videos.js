import React, { Component } from "react";
import { Navbar, Nav, Card } from "react-bootstrap";
import { VideosData, VideoSmallCardCol1, VideoSmallCardCol2 } from "../../itemsConfig";

class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: VideosData,
      smallDataCol1: VideoSmallCardCol1,
      smallDataCol2: VideoSmallCardCol2
    };
  }
  render() {
    const { data, smallDataCol1, smallDataCol2 } = this.state;
    return (
      <div>
        {/* Video Header */}
        <Navbar className="top-section-div">
          <Navbar.Brand href="#home" className="videos-heading">
            Videos
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

        {/* Videos Bigger Container */}

        {data.map(item => {
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
                {/* <Card.Text className="card-text">{item.description}</Card.Text> */}
              </Card.Body>
            </Card>
          );
        })}

        <div className="row micro-row">
          <ul className="col-sm-6">
            {smallDataCol1.map(item => {
              return (
                <li key={item.id} className="micro-col">
                  <img className="micro-img" src={item.photo} alt="" />
                  <div className="micro-desc-wrapper">
                    <p className="micro-desc">{item.description}</p>
                    <span className="micro-author">{item.authorDetails}</span>
                  </div>
                </li>
              );
            })}
          </ul>

          <ul className="col-sm-6">
            {smallDataCol2.map(item => {
              return (
                <li key={item.id} className="micro-col">
                  <img className="micro-img" src={item.photo} alt="" />
                  <div className="micro-desc-wrapper">
                    <p className="micro-desc">{item.description}</p>
                    <span className="micro-author">{item.authorDetails}</span>
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

export default Videos;
