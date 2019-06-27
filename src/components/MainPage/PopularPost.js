import React, { Component } from "react";
import { PopularPostMain, PostMicroCard } from "../../itemsConfig";

class PopularPost extends Component {

  render() {
    return (
      <div className="row post-column">
        {/* Popular Post Main Section Column */}
        <div className="post-upper-wrapper">
          {PopularPostMain.map(item => {
            return (
              <div key={item.id} className="post-inner-wrapper">
                <h1 className="post-heading">{item.heading}</h1>
                <div
                  className="post-image"
                  style={{
                    background: `url(${item.backgroundImage})`,
                    height: "220px",
                    width: "330px"
                  }}
                >
                  <div className="post-details-wrapper">
                    <span
                      className="post-style"
                      style={{ backgroundColor: `${item.backgroundColor}` }}
                    >
                      {item.style}
                    </span>
                    <span className="post-view">
                      <i className="fas fa-eye eye-icon" />
                      {item.view}
                    </span>
                    <p className="post-description">{item.description}</p>
                    <span className="post-author">{item.authorDetails}</span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Popular Post Micro Column */}
          
          <ul className="post-micro">
            {PostMicroCard.map(item => {
              return (
                <li key={item.id} className="micro-col celeb-micro-col">
                  <img className="micro-img" src={item.photo} alt="" />
                  <div className="micro-desc-wrapper">
                    <p className="micro-desc">{item.description}</p>
                    <span className="micro-author common-author">{item.authorDetails}</span>
                  </div>
                </li>
              );
            })}
          </ul>

        </div>

        
      </div>
    );
  }
}

export default PopularPost;
