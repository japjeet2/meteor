import React, { Component } from "react";
import { SocialData } from "../../itemsConfig";

class Social extends Component {
  render() {
    return (
      
      <ul className="row social-col">
        {SocialData.map(item => {
          return (
            <li
              key={item.id}
              className="col-lg-4 social-wrapper"
              style={{ backgroundColor: `${item.backgroundColor}` }}
            >
              <span className="icon">
                <i className={`${item.socialIcon}`} />
              </span>
              <span className="view">{item.view}</span>
              <span className="title">{item.title}</span>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Social;
