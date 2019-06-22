import React, { Component } from "react";
import { SocialData } from "../../itemsConfig";

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: SocialData
    };
  }
  render() {
    const { data } = this.state;
    return (
      <ul className="row social-row">
        {data.map(item => {
          return (
            <li key={item.id} className="col-sm-4 social-wrapper">
              <div
                className="social-col"
                style={{ backgroundColor: `${item.backgroundColor}` }}
              >
                <div className="social-details-wrapper">
                  <span className="social-icon">
                    <i className={`${item.socialIcon}`} />
                  </span>
                  <span className="social-view">{item.view}</span>
                  <span className="social-title">{item.title}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Social;
