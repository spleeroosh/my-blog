import React from 'react';
import { NavLinks } from './nav-links';
import SearchBar from './../search_bar/search_bar';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <NavLinks />
      <SearchBar />
    </nav>
  );
};

export default NavBar;
