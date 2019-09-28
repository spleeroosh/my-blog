import React, { Component } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import './posts.scss';

import {postsLoaded, removePost} from './../../actions';

import AddPost from '../add-post';
import Post from './post';

class Posts extends Component {
  onDeletePost = (id) => {
    const { posts, firestore, dispatch } = this.props;
    const newPosts = posts.filter(post => post.id !== id);
    const removedPost = posts.filter(post => post.id === id)[0];
    dispatch(removePost(newPosts, removedPost, firestore));
  }

  componentDidUpdate() {
    const { posts, dispatch } = this.props;
    if (posts) dispatch(postsLoaded(posts));
  }

  render() {
    const { posts } = this.props;
    const { onDeletePost } = this;

    if (!posts) return <div>loading...</div>;
    
    return (
      <React.Fragment>
        <section className="container row posts">
          {posts.map(post => <Post post={post} onDeletePost={onDeletePost} key={post['id']}/>)}
        </section>
        <AddPost />
      </React.Fragment>    
    );
  }
};

const mapStateToProps = ( state ) => {
  return {
    posts: state.firestore.ordered.posts
  }
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    dispatch
  }
};

export default compose(
  firestoreConnect(() => ['posts']), 
  connect(mapStateToProps, mapDispatchToProps)
 )(Posts);
