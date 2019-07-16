import React from 'react';

import './blog-post.css';

import AddPost from './../add-post'
import Post from './post';

const BlogPost = ({data, onDeletePost}) => {
  
  return (
    <section className="container bg-dark posts">
      {data.map((post) => {
        return (
          <Post newPost={post} onDeletePost={onDeletePost} />
        );
      })}
      <AddPost />
    </section>
  );
};

export default BlogPost;
