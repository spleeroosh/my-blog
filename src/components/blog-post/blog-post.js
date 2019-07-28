import React from 'react';

import './blog-post.css';

import AddPost from './../add-post'
import Post from './post';

const BlogPost = ({data, onDeletePost}) => {
  
  return (
    <section className="container bg-secondary posts">
      {data.map((post) => {
        return (
          <Post newPost={post} onDeletePost={onDeletePost} key={post['id']}/>
        );
      })}
      <AddPost />
    </section>
  );
};

export default BlogPost;
