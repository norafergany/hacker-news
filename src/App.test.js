import {getByTestId, getByText, render, screen} from '@testing-library/react';
import React from "react";
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';


import App from './App';

/**
 * @jest-environment jsdom
 */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// TODO test asynchronous code
it('matches the snapshot', () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})