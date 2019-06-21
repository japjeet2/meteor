import React, { Component } from "react";
import { BannerData } from "../../itemsConfig";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: BannerData
    };
  }
  render() {
    const { data } = this.state;
    return (
      <ul className="row upper-banner-wrapper">
        {data.map(item => {
          return (
            <li
              key={item.id}
              className="col-lg-4 upper-banner"
              style={{ background: `url(${item.image})` }}
            >
              <div className="details-wrapper">
                <span
                  className="upper-banner-style-type"
                  style={{ backgroundColor: `${item.backgroundColor}` }}
                >
                  {item.style}
                </span>
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

export default Banner;
