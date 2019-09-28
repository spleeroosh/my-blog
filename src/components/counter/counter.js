import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './counter.css';

import { inc, dec } from './../../actions';

const Counter = () => {
  const count = useSelector(store => store.project.count);
  const dispatch = useDispatch();
  
  return (
    <div className="jumbotron">
      <div className="container">
        <div className='count'><span>{ count }</span></div>
          <button className="btn btn-primary" onClick={() => dispatch(inc())}>+</button>
          <button className="btn btn-primary" onClick={() => dispatch(dec())}>-</button>
        </div>
    </div>
  );
}

export default Counter;