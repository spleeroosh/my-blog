import React from 'react';

import './post-form.css';

const PostForm = ({ post, onPostChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="postForm" 
              className="col-form-label col-form-label-lg">Текст для статьи</label>
      <textarea className="form-control form-control-lg" 
                id="postForm" 
                rows="7"
                placeholder="Введите текст статьи" 
                value={post}
                onChange={onPostChange}>
      </textarea>
    </div>
  );
};

export default PostForm;