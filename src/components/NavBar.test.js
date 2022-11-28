import React from "react";
import ReactDOM from 'react-dom';
import {render, screen} from '@testing-library/react';
import renderer from 'react-test-renderer';
import NavBar from "./Navigation";

test('displays the Hacker News Nav', () => {
    const handleClick = jest.fn();
    render(<NavBar theme={'light'} handleClick={handleClick}/>);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toHaveTextContent('Hacker News');
})