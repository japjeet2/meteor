import React from "react";
import StyleHunter from "./StyleHunter";
import LifeStyle from "./LifeStyle";
import Celebrity from "./Celebrity";
import Videos from "./Videos";
import Social from "./Social";
import PopularPost from "./PopularPost";
import AmazingShots1 from "./AmazingShots/AmazingShots1";
import AmazingShots2 from "./AmazingShots/AmazingShots2.js";
import AmazingShots3 from "./AmazingShots/AmazingShots3.js";
import AmazingShots4 from "./AmazingShots/AmazingShots4.js";
import AmazingShots5 from "./AmazingShots/AmazingShots5.js";

function Main() {
  return (
    <div className="main-section">
      <div className="container">

        {/* ------------------Row 1----------------- */}
        <div className="row row-common">
          <div className="col-sm-8 col-common">
            <StyleHunter />
          </div>
          <div className="col-sm-4 col-common">
            <Social />
            <PopularPost />
          </div>
        </div>

        {/* ------------------Row 2----------------- */}
        <div className="row row-common">
          <div className="col-sm-8 col-common">
          <LifeStyle />            
          </div>
          <div className="col-sm-4 col-common">
          <AmazingShots1 />
          <AmazingShots2 />
          </div>
        </div>

        {/* ------------------Row 3----------------- */}
        <div className="row row-common">
          <div className="col-sm-8 col-common">
          <Celebrity />            
          </div>
          <div className="col-sm-4 col-common">
          <AmazingShots3 />
          <AmazingShots4 />
          </div>
        </div>


        {/* ------------------Row 4----------------- */}
        <div className="row row-common">
          <div className="col-sm-8 col-common">
          <Videos />            
          </div>
          <div className="col-sm-4 col-common">
          <AmazingShots5 />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Main;
