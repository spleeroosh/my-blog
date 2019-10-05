import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import firebaseApp from './../../../firebase';

import buttonSVG from './../../../images/remove-button.svg';

const Post = ({ post, onDeletePost }) => {
  
  const { id, title, content } = post;
  const removeButton = firebaseApp.auth().currentUser ? <div className="remove-btn" onClick={() => onDeletePost(id)}><img src={buttonSVG} alt="remove button" className="remove-btn__image"/></div> : null;
  return (
    <div className="post col-12">
      <div className="post__header">
        <h4 className="post__heading">{ReactHtmlParser(title)}</h4>
        {removeButton}
      </div>
      <div className="post__body">
        <p className="post__paragraph">{ReactHtmlParser(content)}</p>
      </div>
    </div>    
  );
};

export default Post;