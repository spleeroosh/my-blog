/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavLink } from './nav-link';
describe('Counter', () => {
  const link_name = 'HOME';
  const link_route = '/';

  test('snapshot renders', () => {
    const component = renderer.create(
      <Router>
        <NavLink 
          link_name={link_name}
          link_route={link_route}
        />
      </Router>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});