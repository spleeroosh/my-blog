import React, { Component } from 'react';

import { connect } from 'react-redux';
import { removePost, postsLoaded } from './../../actions';

import AddPost from '../add-post';
import Post from './post';

class Posts extends Component {
  onDeletePost = (id) => {
    const { dispatch } = this.props;
    const { posts } = this.props.state;
    const newPosts = posts.filter(post => post.id !== id);
    const removedPost = posts.filter(post => post.id === id)[0];
    
    dispatch(removePost(newPosts, removedPost));
  }

  componentDidMount() {

    const { dispatch } = this.props;
    
    dispatch(postsLoaded()).then(() => console.log(this.props));
  }

  render() {
    const { posts, user } = this.props.state;
    const { onDeletePost } = this;
    const loading = <div className="sign-out">loading...</div>
    const postsComponent = <section className="posts container">
                             {posts.map(post => <Post post={post} user={user} onDeletePost={onDeletePost} key={post['id']}/>)}
                           </section>;
    return (
      <React.Fragment>
        { posts.length ? postsComponent : loading }
        <AddPost />
      </React.Fragment>
    );
  }
};

const mapStateToProps = ( state ) => {
  return {
    state
  }
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
