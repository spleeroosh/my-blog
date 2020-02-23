import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// animation
import { useSpring, animated } from 'react-spring';

import loupeSVG from './../../images/search.svg';

import { Input } from './../custom_fields/input';

const SearchBar = () => {
  const dispatch = useDispatch(),
    is_searchbar = useSelector(state => state.is_searchbar);

  let props = useSpring({ 
    config: { duration: 600 }, 
    width: is_searchbar ? 500 : 0, 
    opacity: is_searchbar ? 1 : 0,
    from: {width: 0, opacity: 0}
  });

  const onSearchPost = (event) => {  
    dispatch({
      type: 'POSTS_FILTERED',
      payload: event.target.value
    });
  };

  const toggleSearchBar = () => {
    dispatch({
      type: 'SHOW_SEARCH_BAR',
      payload: !is_searchbar
    });
  };

  return (
    <React.Fragment>
      <animated.div style={props} className="search-bar">
        <Input 
          type='text'
          onInputChange={onSearchPost}
        />
      </animated.div>
      <img className="search-bar__icon" src={loupeSVG} onClick={toggleSearchBar}/>
    </React.Fragment>
  );
};

export default SearchBar;