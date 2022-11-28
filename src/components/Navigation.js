import React from "react";
import {Navbar} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import ToggleTheme from "./ToggleTheme";


const Navigation = (props) => {

    const {theme, handleClick} = props;

    return (
        <header>
            <Navbar expand="lg" className="my-3">
                <Container fluid>
                    <Navbar.Brand href=".">
                        <i className="fa-brands fa-hacker-news fa-2x logo me-2"></i>
                        <span className={`h1 ${theme === 'light' ? "link-dark" : "link-light"}`}>Hacker News</span>
                    </Navbar.Brand>

                    <ToggleTheme theme={theme} toggleTheme={handleClick}/>
                </Container>
            </Navbar>

        </header>
    )
}

export default Navigation;

