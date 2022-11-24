import React, {Component} from "react";

export default class NavBar extends Component {

    render() {
        return (
            <nav className="navbar nav content">
                <div><i className="fab fa-brands fa-4x fa-hacker-news"></i></div>
                <div><a className="navbar-brand nav-heading" href="."><h1>Hacker News</h1></a></div>

            </nav>
        )
    }


}

