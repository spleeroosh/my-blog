import React from 'react';
import { useLocation } from 'react-router-dom';

import { NavLinks } from './nav-links';
import SearchBar from './../search_bar/search_bar';

import { LINKS } from './../../constants/routes';

const NavBar = () => {
  const location = useLocation(),
    { BLOG } = LINKS;

  return (
    <nav className="navbar navbar-expand-lg">
      <NavLinks />
      { location.pathname === BLOG.ROUTE ? <SearchBar /> : null }
    </nav>
  );
};

export default NavBar;
