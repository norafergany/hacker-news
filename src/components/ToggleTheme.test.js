import ToggleTheme from "./ToggleTheme";
import {render, screen, waitFor} from "@testing-library/react";
import React from "react";
import axios from 'axios';
import userEvent from "@testing-library/user-event";


it("changes theme icon when theme is changed ", () => {

    const handleClick = jest.fn();
    const button = screen.queryByRole("button");

    let currentTheme = 'light';

    const {rerender} = render(<ToggleTheme theme={currentTheme} handleClick={handleClick}/>);
    expect(button).toBeDefined();
    let themeIcon = screen.getByLabelText('light-display-icon');
    expect(themeIcon).toBeDefined();

    currentTheme = 'dark';

    rerender(<ToggleTheme theme={currentTheme} handleClick={handleClick}/>)
    expect(button).toBeDefined();
    themeIcon = screen.getByLabelText('dark-display-icon');
    expect(themeIcon).toBeDefined();

})
