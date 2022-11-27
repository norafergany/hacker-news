import React from "react";
import ToggleTheme from "./ToggleTheme";

function NavBar(props) {

    const {theme, handleClick} = props;

    // const NavBar = styled.nav`
    //
    // `

        return (
            <header>
                <nav className={`nav content`}>
                    <div><i className="fab fa-brands fa-4x fa-hacker-news"></i></div>
                    <div><a className="navbar-brand nav-heading" href="."><h1>Hacker News</h1></a></div>
                    <ToggleTheme theme={theme} toggleTheme={handleClick}/>
                </nav>
            </header>
        )
}

export default NavBar;

