import React, { Component } from "react";
import { PopularPostMain, PostMicroCard } from "../../itemsConfig";

class PopularPost extends Component {
  render() {
    return (
      <div className="row post-column">

        <div className="card" style={{ width: "22rem" }}>
          <div className="card-body">

            {PopularPostMain.map(item => {
              return (
                <div key={item.id}>
                <h2 className="card-title">{item.heading}</h2>
                  <img
                    className="card-img-top"
                    src={item.backgroundImage}
                    alt="Sample"
                  />
                  <div className="card-img-overlay post-details-wrapper">
                
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
              );
            })}

            {/* Micro Columns */}
              <ul className="card-text post-micro">
                {PostMicroCard.map(item => {
                  return (
                    <li key={item.id} className="micro-col celeb-micro-col">
                      <img className="micro-img" src={item.photo} alt="" />
                      <div className="micro-desc-wrapper">
                        <p className="micro-desc">{item.description}</p>
                        <span className="micro-author common-author">
                          {item.authorDetails}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
          
          </div>
        </div>
      </div>
    );
  }
}

export default PopularPost;
