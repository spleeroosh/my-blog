import React from 'react';

import _ from 'lodash';

import { Description } from './description';

const AboutItem = ({ data, item_id }) => {  
  const { title, description } = data,
    description_list = _.has(data, 'description-list') ? data['description-list'] : null;
    
  return (
    <div className={`about__item-${ item_id } about__item`}>
      <h3 className='about__title'>{ title }</h3>
      <Description description={description} description_list={description_list}/>
    </div>
  );
};

export default AboutItem;