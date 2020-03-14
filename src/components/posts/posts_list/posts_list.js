import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import { Link } from 'react-router-dom';

import { PostItem } from './../post_item';

const PostsList = ({ filtered_posts, prepareText, onDeletePost, user }) => (
  <React.Fragment>
    <ul className="posts__list">
      {map(filtered_posts, post => (
        <Link to={`/blog/${prepareText({ text: post.title, to_link: true })}`}>
          <PostItem
            post={post}
            user={user}
            onDeletePost={onDeletePost}
            key={post['id']}
            setClassName={'posts__item'}
          />
        </Link>
      ))}
    </ul>
  </React.Fragment>
);

PostsList.propTypes = {
  filtered_posts: PropTypes.string,
  prepareText: PropTypes.func,
  onDeletePost: PropTypes.func,
  user: PropTypes.object
};

export default PostsList;