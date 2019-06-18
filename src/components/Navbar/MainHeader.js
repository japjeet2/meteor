import React, { Component } from "react";
import UpperHeader from "./UpperHeader"
import LowerHeader from "./LowerHeader"

class MainHeader extends Component {
    render () {
        return (
            <div>
                <UpperHeader />
                <LowerHeader />

            </div>
        )
    }
}

export default MainHeader