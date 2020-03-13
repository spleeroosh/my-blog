import React from 'react';
import _ from 'lodash';

import { SOCIAL_MEDIA } from './../../constants/social';

const SocialMedia = () => {
  return(
    <div className="social-media">
      <ul className="social-media__list">
        {_.map(SOCIAL_MEDIA, ({ Icon, HREF }, key) => {          
          return <li className={`social-media__item social-media__item-${key}`} key={key}>
            <a className="social-media__link" href={HREF} target="_blank" rel="noopener noreferrer">
              <Icon />
            </a>
          </li>;
        })}
      </ul>
    </div>
  );
};

export { SocialMedia };