import React, { Component } from "react";
import { AmazingShotsData } from "../../itemsConfig";

class AmazingShots extends Component {

  render() {
    return (
      <ul className="shots-section">
        {AmazingShotsData.map(item => {
          return (
            <li
              key={item.id}
              className="shots-wrapper"
              style={{
                backgroundImage: `url(${item.backgroundImage})`,
                height: "440px"
              }}
            >
              <div className="shots-details">
                <h1 className="shots-title">{item.title}</h1>
                <p className="shots-desc">{item.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default AmazingShots;
