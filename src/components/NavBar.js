import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/icon-website.svg'
import {NavLink} from "react-router-dom";
import React from "react";

function NavBar() {
    return (
        <nav className="navbar nav">
            <div><i className="fab fa-brands fa-4x fa-hacker-news"></i></div>
            <div><a className="navbar-brand nav-heading" href="#"><h1>Hacker News</h1></a></div>

        </nav>
    )

}

export default NavBar;