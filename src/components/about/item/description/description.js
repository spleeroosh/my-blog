import React from 'react';
import _ from 'lodash';

const Description = ({ description, description_list }) => {
  let Description_list = null;
  if (description_list) {
    Description_list = <ul className='about__description-list'>
      { _.map(description_list, (desc, key) => <li className={ key }>{ desc }</li>) }
    </ul>;
  }
  
  return <React.Fragment>
    <div className='about__description'>{ description }</div>
    {Description_list}
  </React.Fragment>;
};

export default Description;