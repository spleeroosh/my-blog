import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'uuid';
import _ from 'lodash';

import { NavLink } from './../nav-link';
import { LINKS } from './../../../constants/routes';
import { showNavBar } from './../../../actions/';


/**
 * Итерируемся по объекту с именами и роутами линков,
 * и инициализируем компонент линк для каждой итерации
 */
const NavLinks = () => {
  const dispatch = useDispatch(),
    is_shownav = useSelector(state => state.is_shownav),
    onToggleNav = () => {
      dispatch(showNavBar(is_shownav));
    };

  return (
    <React.Fragment>
      <input type="checkbox" className="navbar__checkbox" id="navbar-toggle" checked={is_shownav} onChange={onToggleNav}/>
      <label htmlFor="navbar-toggle" className="navbar__button">
        <div className="navbar__button-burger"></div>
      </label>
      <div className="navbar__background">&nbsp;</div>

      <ul className="navbar__list">
        {_.map(LINKS, (link) => 
          <NavLink key={uuid()}
            link_name={link.NAME} 
            link_route={link.ROUTE}
            onToggleNav={onToggleNav}
          />
        )}
      </ul>
    </React.Fragment>
  );
};

export {
  NavLinks
};