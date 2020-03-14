import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import _ from 'lodash';

import { aboutLoaded } from './../../actions';

import { AboutItem } from './item';
import { Loader } from './../loader';

//import PropTypes from 'prop-types';
//import _ from 'lodash';

const About = () => {
  const dispatch = useDispatch();
  let about_data = useSelector(state => state.about)[0];

  if (_.isEmpty(about_data)) {
    dispatch(aboutLoaded());
    return <Loader />;
  } 
  return(
    <section className="about">
      { _.map(about_data, (data, key) => {
        return <AboutItem data={data} key={key} item_id={key}/>;
      })}
    </section>
  );
  
};

export default About;