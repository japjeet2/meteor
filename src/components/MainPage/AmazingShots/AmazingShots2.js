import React, { Component } from "react";
import { AmazingShotsData2 } from "../../../itemsConfig";

class AmazingShots2 extends Component {
  render() {
    return (
      <div className="shots-section amazing-2">
        {AmazingShotsData2.map(item => {
          return (
            <div
              key={item.id}
              className="shots-wrapper"
              style={{
                backgroundImage: `url(${item.backgroundImage})`,
                height: "440px"
              }}
            >
              <div className="overlay">
                <div className="shots-details">
                  <h1 className="shots-title">{item.title}</h1>
                  <p className="shots-desc">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AmazingShots2;
