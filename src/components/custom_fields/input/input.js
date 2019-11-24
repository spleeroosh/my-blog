import React, { Component } from 'react';

class Input extends Component {
  render() {
    let { type, 
      placeholder, 
      title,
      small_text, 
      label, 
      class_name, 
      onInputChange } = this.props;

    let input_label,
        input_small_text;

    type = type ? type : 'text';

    input_label = <label htmlFor={`input__${type}`}>{label}</label>;
    input_small_text = <small id={`input__${type}`} className="form-text text-muted">{small_text}</small>;
  
    return(
      <div className="input-form">
        { label.length ? input_label : null }

        <input  type={type}
                className={`${class_name} input-form__input input__${type}`}
                value={title}
                id={`input__${type}`}
                aria-describedby={`input__${type}`}
                placeholder={placeholder ? placeholder : 'введите данные'}
                onChange={onInputChange}/>

        { small_text.length ? input_small_text : null }
      </div>
    )
  }
}

export {
  Input
}