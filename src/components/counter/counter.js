import React, { Component } from 'react';
import { connect } from 'react-redux';
import './counter.css';

import { inc, dec } from './../../actions';

class Counter extends Component {
  componentDidMount() {

  }
  render() {
    const { count, dispatch } = this.props;
    return (
      <div className="jumbotron">
        <div className="container">
          <div className='count'><span>{ count }</span></div>
            <button className="btn btn-primary" onClick={() => dispatch(inc())}>+</button>
            <button className="btn btn-primary" onClick={() => dispatch(dec())}>-</button>
          </div>
      </div>
    );
  };
};

const MapStateToProps = (state) => {
  return {
    count: state['count']
  }
};

const MapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(Counter);