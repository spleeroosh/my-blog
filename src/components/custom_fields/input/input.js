import React, { Component } from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

class Input extends Component {
  render() {
    let { type, 
        placeholder, 
        title,
        small_text, 
        label, 
        class_name, 
        onInputChange } = this.props,

      input_label,
      input_small_text;

    type = type ? type : 'text';

    input_label = <label htmlFor={`input__${type}`}>{label}</label>;
    input_small_text = <small id={`input__${type}`} className="form-text text-muted">{small_text}</small>;
  
    return(
      <div className="input-form">
        { label ? input_label : null }

        <input  type={type}
          className={`${class_name} input-form__input input__${type}`}
          value={title}
          // id={`input__${type}`}
          aria-describedby={`input__${type}`}
          placeholder={placeholder ? placeholder : 'введите данные'}
          onChange={onInputChange}
        />

        { _.isString(small_text) ? input_small_text : null }
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string, 
  placeholder: PropTypes.string, 
  title: PropTypes.string,
  small_text: PropTypes.string, 
  label: PropTypes.string, 
  class_name: PropTypes.string,  
  onInputChange: PropTypes.func,
};

export {
  Input
};