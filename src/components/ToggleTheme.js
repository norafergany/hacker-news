import React from "react";
import styled from "styled-components"

export const ToggleTheme = (props) => {

    const {theme, toggleTheme} = props;

    const Button = styled.button`
      background: ${({theme}) => theme.background};
      border: 2px solid ${({theme}) => theme.toggleBorder};
      color: ${({theme}) => theme.text};
      border-radius: 30px;
      cursor: pointer;
      font-size: 0.8rem;
      padding: 0.6rem;
      position: absolute;
      right: 2em;

      

    `;

    const iconClass = props.theme === 'light' ? 'fa-solid fa-moon fa-3x' : 'fa-regular fa-sun fa-3x';
    const ariaLabel = props.theme === 'light' ? 'light-display-icon' : 'dark-display-icon';

    return (
        <Button className="theme-button " onClick={toggleTheme}>
            <i aria-label={ariaLabel} className={iconClass}></i>
        </Button>
        // <button className="theme-button " onClick={props.handleClick}><i aria-label={ariaLabel} className={iconClass}></i></button>
    )
}

export default ToggleTheme;