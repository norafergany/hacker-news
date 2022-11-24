import React, {Component} from "react";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import styled from "styled-components"


export default class ToggleTheme extends Component {

    render() {
        return (
            <button src={sun} onClick={this.state}></button>
        )
    }

}