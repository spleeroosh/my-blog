import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link className="navbar__link" to='/'>HOME</Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to='/login'>LOG IN</Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to='/about'>ABOUT</Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to='/blog'>BLOG</Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to='/counter'>COUNT</Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to='/test'>TEST</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
