import React, {Component} from "react";
import ToggleTheme from "./ToggleTheme";

export default class NavBar extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.props.handleClick.bind(this);

    }





    render() {
        return (

            <nav className={`nav content ${this.props.theme === 'dark' ? "dark" : "light"}`}>
                <div><i className="fab fa-brands fa-4x fa-hacker-news"></i></div>
                <div><a className="navbar-brand nav-heading" href="."><h1>Hacker News</h1></a></div>
                <ToggleTheme theme={this.props.theme} toggleTheme={this.props.toggleTheme} handleClick={this.handleClick}/>

            </nav>

        )
    }


}

