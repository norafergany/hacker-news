import React from "react";
import styled from "styled-components"

export const ToggleTheme = (props) => {

    const {theme, toggleTheme} = props;

    const Button = styled.button`
      background: ${({theme}) => theme.background};
      color: ${({theme}) => theme.text};
      border:none;
      border-radius: 30px;
      cursor: pointer;
      font-size: 1.5rem;
      
    `;

    const iconClass = theme === 'light' ? 'fa-solid fa-moon' : 'fa-regular fa-sun';
    const ariaLabel = theme === 'light' ? 'light-display-icon' : 'dark-display-icon';

    return (
        <Button className="theme-button ms-auto me-1" onClick={toggleTheme}>

            <i aria-label={ariaLabel} className={iconClass}></i>
        </Button>

    )
}

export default ToggleTheme;