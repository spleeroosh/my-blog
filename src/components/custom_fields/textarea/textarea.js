import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Textarea extends Component {
  render() {
    const {
      content,
      text_area,
      placeholder,
      rows,
      class_name,
      id,
      label,
      onTabDown, 
      onPostChange
    } = this.props,

      textarea_label = <label htmlFor={id} className="textarea-form__label">{label}</label>;
  
    return(
      <div className={`${class_name} textarea-form`}>
        {label ? textarea_label : null}
        <textarea className="textarea-form__input" 
          id={id} 
          rows={rows}
          placeholder={placeholder}
          value={content}
          onChange={onPostChange}
          onKeyDown={e => onTabDown(e)}
          ref={text_area}>
        </textarea>
      </div>
    );
  }
}

Textarea.propTypes = {
  content: PropTypes.string, 
  text_area: PropTypes.object,
  placeholder: PropTypes.string, 
  rows: PropTypes.string,
  class_name: PropTypes.string,
  id: PropTypes.string, 
  label: PropTypes.string,   
  onTabDown: PropTypes.func,
  onPostChange: PropTypes.func,
};

export {
  Textarea
};