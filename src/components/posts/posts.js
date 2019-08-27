import React from 'react';

import './posts.scss';

import AddPost from '../add-post'
import Post from './post';

const Posts = ({data, onDeletePost}) => {
  
  return (
    <React.Fragment>
      <section className="container row posts">
        {data.map((post) => {
          return (
            <Post newPost={post} onDeletePost={onDeletePost} key={post['id']}/>
          );
        })}
      </section>
      <AddPost />
    </React.Fragment>    
  );
};

export default Posts;
