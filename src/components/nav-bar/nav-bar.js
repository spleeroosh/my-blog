import React from 'react';
import { Link } from 'react-router-dom';

import './nav-bar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active-warning">
          <Link className="nav-link" to='/login'>Вход</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/news'>Новости</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/blog'>Блог</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/counter'>Счетчик</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
