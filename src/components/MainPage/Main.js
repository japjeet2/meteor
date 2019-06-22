import React from "react";
import StyleHunter from "./StyleHunter";
import LifeStyle from "./LifeStyle";
import Celebrity from "./Celebrity";
import Videos from "./Videos";
import Social from "./Social";
import PopularPost from "./PopularPost";
import AmazingShots from "./AmazingShots";

function Main() {
  return (
    <div className="main-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <StyleHunter />
            <LifeStyle />
            <Celebrity />
            <Videos />
          </div>
          <div className="col-sm-4">
            <Social />
            <PopularPost />
            <AmazingShots />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
