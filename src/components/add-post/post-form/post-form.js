import React from 'react';

import './post-form.css';

const PostForm = ({ content, onPostChange, onTabDown, textArea }) => {
  return (
    <div className="form-group add-form__post">
      <label htmlFor="postForm" 
              className="col-form-label col-form-label-lg">Текст для статьи</label>
      <textarea className="form-control form-control-lg add-form__area" 
                id="postForm" 
                rows="7"
                placeholder="Введите текст статьи" 
                value={content}
                onChange={onPostChange}
                onKeyDown={e => onTabDown(e)}
                ref={textArea}>
      </textarea>
    </div>
  );
};

export default PostForm;