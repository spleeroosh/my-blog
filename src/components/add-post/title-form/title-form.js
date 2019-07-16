import React from 'react';

import './title-form.css';

const TitleForm = ({ title, onTitleChange }) => {
  return (
    <div className="form-group">
      <label className="col-form-label col-form-label-lg" htmlFor="titleForm">Название статьи</label>
      <input className="form-control form-control-lg" 
              type="text" 
              placeholder="Введите название статьи" 
              value={title}
              onChange={onTitleChange} 
              id="titleForm"/>
    </div>
  );
};

export default TitleForm;