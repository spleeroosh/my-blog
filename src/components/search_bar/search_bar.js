import React from 'react';
import { useDispatch } from 'react-redux';

import { Input } from './../custom_fields/input';

const SearchBar = () => {
  const dispatch = useDispatch();

  const onSearchPost = (event) => {  
    dispatch({
      type: 'POSTS_FILTERED',
      payload: event.target.value
    });
  };

  return (
    <div className="search-bar">
      <Input 
        type='text'
        onInputChange={onSearchPost}/>
    </div>
  );
};

export default SearchBar;