import React from "react";
import StyleHunter from "./StyleHunter";
import LifeStyle from "./LifeStyle";
import Celebrity from "./Celebrity";
import Videos from "./Videos";
import Social from "./Social";
import { Container } from "react-bootstrap";

function Main() {
  return (
    <div className="main-section">
      <Container>
        <div className="row">
          <div className="col-lg-8">
            <StyleHunter />
            <LifeStyle />
            <Celebrity />
            <Videos />
          </div>
          <div className="col-lg-4">
            <Social />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Main;
