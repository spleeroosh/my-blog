import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { PostHeader } from './post_header';

const Post = ({ post, user, onDeletePost }) => {
  
  const { id, title, content, date } = post;

  return (
    <div className="post col-12">
      <PostHeader title={ReactHtmlParser(title)[0]} date={date}  id={id} onDeletePost={onDeletePost} user={user}/>
      <div className="post__body">
        <p className="post__paragraph">
          <SyntaxHighlighter language="javascript" style={duotoneDark}>{content}</ SyntaxHighlighter>
        </p>
      </div>
    </div>
  );
};

Post.propTypes = {
  onDeletePost: PropTypes.func,
  post: PropTypes.object,
  user: PropTypes.object
};

export default Post;