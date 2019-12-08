import React from 'react';

import { NavLink } from './../nav-link';
import { LINKS } from './../../../constants/routes';
import uuid from 'uuid';

/**
 * Итерируемся по объекту с именами и роутами линков,
 * и инициализируем компонент линк для каждой итерации
 */
const NavLinks = () => {
  return (
    <ul className="navbar__list">
      {Object.keys(LINKS)
        .map((key) => 
          <NavLink key={uuid()}
            link_name={LINKS[key].NAME} 
            link_route={LINKS[key].ROUTE} 
          />
        )}
    </ul>
  );
};

export {
  NavLinks
};