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

    let removedPost = {};
    const oldPosts = posts.map((post) => {
      return { ...post };
    });

    const newPosts = oldPosts.filter((post) => {
      if(post.id !== id) {
        return post;
      } else {
        removedPost = post;
        return null;
      }
    });
    
  
    firestore.collection("posts").doc(removedPost['id']).delete().then(() => {
      dispatch(removePost(newPosts));
    });
  }

  componentDidMount() {
    const { posts, dispatch } = this.props;
    if(posts) {
      dispatch(postsLoaded(posts));
    }
  }

  componentWillReceiveProps(){
    const { posts, dispatch } = this.props;
    if(posts) {
      dispatch(postsLoaded(posts));
    }
  }

  render() {
    const { posts } = this.props;
    const { onDeletePost } = this;

    if(!posts) {
      return <div>loading...</div>
    }
    return (
      <React.Fragment>
        <section className="container row posts">
          {posts.map((post) => {
            return (
              <Post newPost={post} onDeletePost={onDeletePost} key={post['id']}/>
            );
          })}
          <div className="notifications col-3">Notifications</div>
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
  firestoreConnect(() => ['posts']), // or { collection: 'todos' }
  connect(mapStateToProps)
 )(Posts)
