import React from 'react';
import _ from 'lodash';

const Description = ({ description, description_list }) => {
  let Description_list = null;
  if (description_list) {
    Description_list = <ul className='about__description-list'>
      { _.map(description_list, (desc, key) => {
        if (_.isObject(desc)) {
          const { description_title, description } = desc;

          return <li className={ key }>
            <h5 className='about__description-title'>{ description_title }</h5>
            <p className='about__description'>{ description }</p>
          </li>;
        } else {
          return <li className={ key }>{ desc }</li>;
        }
      }) }
    </ul>;
  }
  
  return (<React.Fragment>
    <div className='about__description'>{ description }</div>
    {Description_list}
  </React.Fragment>);
};

export default Description;