import React from 'react';

import './blog-post.css';
import removeButton from './../../images/remove-button.svg';

import AddPost from './../add-post'

const BlogPost = ({data, onDeletePost}) => {
  
  return (
    <section className="container bg-dark posts">
      {data.map(({title, post, id}) => {
        return (
          <div className="card bg-white mg-auto post" key={id}>
            <div className="card-header post__header">
              <h4 className="post__heading">{title}</h4>
              <div className="remove-btn"
                   onClick={() => onDeletePost(id)}>
                <img src={removeButton} alt="remove button" className="remove-btn__image"/>
              </div>
            </div>
            <div className="card-body post__body">
              <p className="post__paragraph text-dark">{post}</p>
            </div>
          </div>
        )
      })}
      <AddPost />
    </section>
  );
};

export default BlogPost;
