import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import _ from 'lodash';

import { PostHeader } from '../post/post_header';

const Post = ({ post, user, onDeletePost, setClassName }) => {
  
  const { id, title, description, date } = post,
    postClassName = _.isString(setClassName) ? setClassName : '';

  return (
    <li className={postClassName}>
      <PostHeader title={ReactHtmlParser(title)[0]} date={date}  id={id} onDeletePost={onDeletePost} user={user}/>
      <p className={`${postClassName}-description`}>
        {ReactHtmlParser(description)}
      </p>
    </li>
  );
};

Post.propTypes = {
  onDeletePost: PropTypes.func,
  post: PropTypes.object,
  user: PropTypes.object
};

export default Post;