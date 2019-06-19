import React from "react";
import TopSection from "./TopSection";
import { Container } from "react-bootstrap";

function Main() {
  return (
    <div className="main-section">
      <Container>
        <div className="row">
          <div className="col-lg-8">
            <TopSection />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Main;
