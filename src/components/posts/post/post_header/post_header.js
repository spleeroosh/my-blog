import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { RemoveBtn } from './../../../buttons/remove_btn';

const PostHeader = ({ title, id, date, onDeletePost, user }) => {
  const postDate = date.toDate ? date.toDate() : date,
        remove_button = !_.isEmpty(user) ? <RemoveBtn onDeletePost={onDeletePost} id={id}/> : null;

  return (
    <div className="post__header">
      <div className="post__content">
        <h4 className="post__heading">{title}</h4>
        <h6 className="post__date">{postDate.toTimeString()}</h6>
      </div>
      {remove_button}
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