import React, { Component } from 'react';

class Textarea extends Component {

  render() {
    const {
      content,
      text_area,
      onTabDown, 
      onPostChange,
      placeholder,
      rows,
      class_name,
      id,
      label 
    } = this.props;

    const textarea_label = <label htmlFor={id} className="textarea-form__label">{label}</label>;
  
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
    )
  }
}

export {
  Textarea
}