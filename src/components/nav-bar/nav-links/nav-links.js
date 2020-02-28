import React from 'react';

import { NavLink } from './../nav-link';
import { LINKS } from './../../../constants/routes';
import uuid from 'uuid';
import _ from 'lodash';

/**
 * Итерируемся по объекту с именами и роутами линков,
 * и инициализируем компонент линк для каждой итерации
 */
const NavLinks = () => {
  return (
    <React.Fragment>
      <input type="checkbox" className="navbar__checkbox" id="navbar-toggle"></input>
      <label htmlFor="navbar-toggle" className="navbar__button"></label>
      <div className="navbar__background">&nbsp;</div>

      <ul className="navbar__list">
        {_.map(LINKS, (link) => 
          <NavLink key={uuid()}
            link_name={link.NAME} 
            link_route={link.ROUTE}
          />
        )}
      </ul>
    </React.Fragment>
  );
};

export {
  NavLinks
};