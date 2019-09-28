import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link className="navbar__link" to='/login'>Вход</Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to='/news'>Новости</Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to='/blog'>Блог</Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to='/counter'>Счетчик</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
