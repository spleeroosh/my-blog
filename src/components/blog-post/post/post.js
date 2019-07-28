import React from 'react';

import './post.css';

import removeButton from './../../../images/remove-button.svg';

const Post = ({ newPost, onDeletePost }) => {
  
  const { id, title, post } = newPost;
  
  return (
    <div className="card mg-auto post">
      <div className="card-header bg-primary post__header">
        <h4 className="post__heading text-white">{title}</h4>
        <div className="remove-btn"
              onClick={() => onDeletePost(id)}>
          <img src={removeButton} alt="remove button" className="remove-btn__image"/>
        </div>
      </div>
      <div className="card-body post__body">
        <p className="post__paragraph text-primary">{post}</p>
      </div>
    </div>
  );
};

export default Post;