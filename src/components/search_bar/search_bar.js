import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// animation
import { useSpring, animated } from 'react-spring';

import loupeSVG from './../../images/search.svg';

import { Input } from './../custom_fields/input';
import { filteredPosts, showSearchBar } from './../../actions';

const SearchBar = () => {
  const dispatch = useDispatch(),
    is_searchbar = useSelector(state => state.is_searchbar);

  let props = useSpring({ 
    config: { duration: 600 }, 
    width: is_searchbar ? 230 : 0, 
    opacity: is_searchbar ? 1 : 0,
    display: is_searchbar ? 'block' : 'none',
    from: {width: 0, opacity: 0, display: 'none'}
  });

  const onSearchPost = (event) => {  
    dispatch(filteredPosts(event.target.value));
  };

  const toggleSearchBar = () => {
    dispatch(showSearchBar(is_searchbar));
  };

  return (
    <div className="search-bar">
      <animated.div style={props} className="search-bar__input">
        <Input 
          type='text'
          onInputChange={onSearchPost}
        />
      </animated.div>
      <img className="search-bar__icon" src={loupeSVG} onClick={toggleSearchBar}/>
    </div>
  );
};

export default SearchBar;