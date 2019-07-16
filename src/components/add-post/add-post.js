import React, { Component } from 'react';
import './add-post.css';
import uuid from 'uuid';
import { withMyBlogService } from './../hoc-helpers';
import { connect } from 'react-redux';
import { addPost } from './../../actions/index';

import TitleForm from './title-form';
import PostForm from './post-form';

class AddPost extends Component {

  state = {
    id: null,
    title: '',
    post: ''
  }

  onTitleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  };

  onPostChange = (e) => {
    this.setState({
      post: e.target.value
    });
  };

  clearForm = () => {
    this.setState({
      id: '',
      title: '',
      post: ''
    });
  };

  addPost = (e) => {
    e.preventDefault();
    const id = uuid();
    const { title, post } = this.state;
    const { posts, dispatch, myBlogService } = this.props;

    const newPost = {
      id,
      title,
      post
    };

    const oldPosts = posts.map((post) => {
      return { ...post };
    });

    const newPosts = [
      ...oldPosts,
      newPost
    ];
    
    dispatch(addPost(newPosts));
    myBlogService.addPost(id, title, post);
    this.clearForm();
  };

  render() {

    const { title, post } = this.state;
    const { onTitleChange, addPost, onPostChange } = this;

    return (
      <form action="submit" className="container">
        <fieldset>
          <TitleForm title={title} onTitleChange={onTitleChange} />
          <PostForm post={post} onPostChange={onPostChange} />
        </fieldset>
        <button type="button" className="btn btn-primary"
                onClick={addPost}>+
        </button>
      </form>
    );
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    dispatch
  };
};

const mapStateToProps = ( { posts } ) => {
  return {
    posts
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withMyBlogService()(AddPost));