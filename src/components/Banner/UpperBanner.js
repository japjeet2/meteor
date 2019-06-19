import React, { Component } from "react";
import { bannerData } from "./../../itemsConfig";

class UpperBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: bannerData
    };
  }
  render() {
    const { data } = this.state;
    return (
      <ul className="upper-banner-wrapper">
        {data.map(item => {
          return (
            <li
              key={item.id}
              className="upper-banner"
              style={{ background: `url(${item.image})` }}
            >
              <div className="details-wrapper">
                <span className="style-type">{item.style}</span>
                <span className="views">
                  <i className="fas fa-eye eye-icon" />
                  {item.view}
                </span>
                <p className="description">{item.description}</p>
                <div className="author-wrapper">
                  <span className="author-details">{item.authorDetails}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default UpperBanner;
