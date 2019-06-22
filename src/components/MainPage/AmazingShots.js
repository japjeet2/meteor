import React, { Component } from "react";
import { AmazingShotsData } from "../../itemsConfig";

class AmazingShots extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: AmazingShotsData
    };
  }
  render() {
    const { data } = this.state;

    return (
      <ul className="shots-section">
        {data.map(item => {
          return (
            <li
              key={item.id}
              className="shots-wrapper"
              style={{
                backgroundColor: `${item.backgroundColor}`,
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
