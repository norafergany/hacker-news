import React from "react";
import ReactDOM from 'react-dom';
import {render, screen} from '@testing-library/react';
import renderer from 'react-test-renderer';
import NavBar from "./NavBar";

test('displays the Hacker News Nav', () => {
    render(<NavBar/>);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toHaveTextContent('Hacker News');
})