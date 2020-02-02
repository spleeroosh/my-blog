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
    <ul className="navbar__list">
      {_.map(LINKS, (link) => 
          <NavLink key={uuid()}
            link_name={link.NAME} 
            link_route={link.ROUTE} 
          />
        )}
    </ul>
  );
};

export {
  NavLinks
};