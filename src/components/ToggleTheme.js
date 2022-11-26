import React, {Component} from "react";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import styled from "styled-components"


export default class ToggleTheme extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.props.handleClick.bind(this);
    }

    render() {

        if (this.props.theme === 'light') {

            return (

                    <button className="theme-button " onClick={this.handleClick}><i className="fa-solid fa-moon fa-3x"></i></button>

            )
        } else if (this.props.theme === 'dark') {
            return (
                    <button className="theme-button" onClick={this.handleClick}><i className="fa-regular fa-sun fa-3x"></i></button>

            )
        }

    }

}