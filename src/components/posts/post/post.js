import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import buttonSVG from './../../../images/remove-button.svg';

const Post = ({ post, user, onDeletePost }) => {
  
  const { id, title, content, date } = post,
    postDate = date.toDate ? date.toDate() : date,
    removeButton =  user ? <div className="post__remove-btn" onClick={() => onDeletePost(id)}>
                          <img src={buttonSVG} alt="remove button" className="post__remove-btn-image"/>
                        </div> : null;

  return (
    <div className="post col-12">
      <div className="post__header">
        <div className="post__content">
          <h4 className="post__heading">{ReactHtmlParser(title)}</h4>
          <h6 className="post__date">{postDate.toTimeString()}</h6>
        </div>
        {removeButton}
      </div>
      <div className="post__body">
        <p className="post__paragraph">{ReactHtmlParser(content)}</p>
      </div>
    </div>    
  );
};

Post.propTypes = {
  onDeletePost: PropTypes.func,
  post: PropTypes.object,
  user: PropTypes.object
}

export default Post;