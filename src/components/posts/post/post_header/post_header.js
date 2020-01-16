import React from 'react';
import PropTypes from 'prop-types';

import { RemoveBtn } from './../../../buttons/remove_btn';

const PostHeader = ({ title, id, date, onDeletePost, user }) => {
  const postDate = date.toDate ? date.toDate() : date,
    removeButton = user.id ? <RemoveBtn onDeletePost={onDeletePost} id={id}/> : null;

  return (
    <div className="post__header">
      <div className="post__content">
        <h4 className="post__heading">{title}</h4>
        <h6 className="post__date">{postDate.toTimeString()}</h6>
      </div>
      {removeButton}
    </div>
  );
};

PostHeader.propTypes = {
  onDeletePost: PropTypes.func,
  title: PropTypes.string,
  id: PropTypes.string,
  date: PropTypes.object,
  user: PropTypes.object
};

export {
  PostHeader
};