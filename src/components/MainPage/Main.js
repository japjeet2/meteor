import React from "react";
import StyleHunter from "./StyleHunter";
import LifeStyle from "./LifeStyle";
import { Container } from "react-bootstrap";

function Main() {
  return (
    <div className="main-section">
      <Container>
        <div className="row">
          <div className="col-lg-8">
            <StyleHunter />
            <LifeStyle />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Main;
