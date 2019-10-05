import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { inc, dec } from './../../actions';

const Counter = () => {
  const count = useSelector(store => store.project.count);
  const dispatch = useDispatch();
  
  return (
    <div className="jumbotron counter">
      <div className="container">
        <div className='count'><span>{ count }</span></div>
        <button className="btn counter__btn" onClick={() => dispatch(inc())}>+</button>
        <button className="btn counter__btn" onClick={() => dispatch(dec())}>-</button>
      </div>
    </div>
  );
}

export default Counter;