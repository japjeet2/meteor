import React, { Component } from "react";
import { BannerData } from "../../itemsConfig";

class Banner extends Component {

  render() {
 
    return (
      <ul className="row upper-banner-wrapper">
        {BannerData.map(item => {
          return (
            <li
              key={item.id}
              className="col-sm-4 upper-banner"
              style={{
                background: `url(${item.image}),${item.gradient}`,
                width: "100%",
                padding:'0px'
              }}
            >
              <div
                className="bannercontentwrapper"
                style={{ background: `${item.gradient}`, height: "550px"   }}
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
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Banner;
