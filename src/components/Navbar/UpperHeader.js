import React, {Component} from "react";

class UpperHeader extends Component {
    render() {
        return (
            <div className="upper-header">
                <div className="upper-header-wrapper">
                    <ul className="upper-header-content">
                        <li>-5 C</li>
                        <li>New York</li>
                        <li>Monday, March 6</li>
                        <li>Blog</li>
                        <li>Forum</li>
                        <li>Contact</li>
                        <li>Buy Now !</li>
                    </ul>


                    <ul className="social-icons">
                        <li><i className="fab fa-facebook-square"></i></li>
                        <li><i className="fab fa-pinterest"></i></li>
                        <li><i className="fab fa-instagram"></i></li>
                        <li><i className="fab fa-google"></i></li>
                        <li><i className="fas fa-sign-in-alt"></i> Sign in</li>
                    </ul>
                </div>
            </div>

        );
    }
}

export default UpperHeader;