import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({ link_name, link_route, onToggleNav }) => {
  return (
    <li className="navbar__item">
      <Link className="navbar__link" to={link_route} onClick={onToggleNav}>{link_name}</Link>
    </li>
  );
};

NavLink.propTypes = {
  link_name: PropTypes.string,
  link_route: PropTypes.string,
};

export {
  NavLink
};