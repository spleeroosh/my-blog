import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import removeButton from './../../../images/remove-button.svg';

const Post = ({ post, onDeletePost }) => {
  
  const { id, title, content } = post;

  return (
    <div className="post col-12">
      <div className="post__header">
        <h4 className="post__heading">{ReactHtmlParser(title)}</h4>
      <div className="remove-btn"
            onClick={() => onDeletePost(id)}>
        <img src={removeButton} alt="remove button" className="remove-btn__image"/>
      </div>
      </div>
      <div className="post__body">
        <p className="post__paragraph">{ReactHtmlParser(content)}</p>
      </div>
    </div>    
  );
};

export default Post;