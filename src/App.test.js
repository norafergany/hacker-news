import React from "react";
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import { createRoot } from 'react-dom/client';



import App from './App';
import MatchMediaMock from "jest-matchmedia-mock";

let matchMedia;
/**
 * @jest-environment jsdom
 */
describe('App module', () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  })

  it('renders without crashing', () => {
    render(<App />);
  });

})


it('matches the snapshot', () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})