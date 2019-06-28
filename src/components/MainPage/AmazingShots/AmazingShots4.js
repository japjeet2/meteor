import React, { Component } from "react";
import { AmazingShotsData4 } from "../../../itemsConfig";

class AmazingShots4 extends Component {
  render() {
    return (
      <ul className="shots-section  amazing-4">
        {AmazingShotsData4.map(item => {
          return (
            <li
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
            </li>
          );
        })}
      </ul>
    );
  }
}

export default AmazingShots4;
