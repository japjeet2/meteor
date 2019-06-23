import React, { Component } from "react";
import { FooterData } from "../../itemsConfig";

class FooterMiddle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: FooterData
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div className="row foot-mid-main">
        <div className="col-sm-4 foot-left-col">

        {/* Footer Description */}
          {data.map(item => {
            return <p key={item.id} className="footer-description">{item.description}</p>;
          })}

          {/* Footer Social Icons */}

          <ul className="foot-social-icons">
            <li style={{ backgroundColor: "#31aae2" }}>
              <i className="fab fa-twitter" />
            </li>
            <li style={{ backgroundColor: "#0b5fa6" }}>
              <i className="fab fa-instagram" />
            </li>
            <li style={{ backgroundColor: "#e11396" }}>
              <i className="fab fa-google" />
            </li>
            <li style={{ backgroundColor: "#dd4c39" }}>
              <i className="fab fa-pinterest" />
            </li>
            <li style={{ backgroundColor: "#f52450" }}>
              <i className="fab fa-youtube" />
            </li>
        
          </ul>
        </div>

          {/* Footer Lists */}

        <div className="col-sm-8">
          <ul className="row foot-mid-list-wrapper">
            <li className="col-sm-3">
              <ul>
                <li>Business</li>
                <li>Culture</li>
                <li>Gadget</li>
                <li>Future</li>
                <li>Startups</li>
              </ul>
            </li>

            <li className="col-sm-3">
              <ul>
                <li>Stars</li>
                <li>Screen</li>
                <li>Binge</li>
                <li>Culture</li>
                <li>Media</li>
              </ul>
            </li>

            <li className="col-sm-3">
              <ul>
                <li>45</li>
                <li>Congress</li>
                <li>SecruityT</li>
                <li>he Nine</li>
                <li>Trumpmerica</li>
              </ul>
            </li>

            <li className="col-sm-3">
              <ul>
                <li>Video</li>
                <li>Video News</li>
                <li>Feature Shows</li>
                <li>HLN</li>
                <li>TV Shows</li>
                <li>TV Schedule</li>
                <li>Faces of CNN Worldwide</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FooterMiddle;
