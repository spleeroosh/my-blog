import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { removePost, postsLoaded } from './../../actions';

import AddPost from '../add-post';
import Post from './post';

class Posts extends Component {

  /**
   * @param {Number} id Получаем id статьи,
   * удаляем статью из массива, и диспатчим новый массив со статьями
   */
  onDeletePost = (id) => {
    const { dispatch } = this.props;
    const { posts } = this.props;
    const newPosts = posts.filter(post => post.id !== id);
    const removedPost = posts.reduce((removed_post, post) => removed_post.id === id ? removed_post : post, {});

    dispatch(removePost(newPosts, removedPost));
  }

  /**
   * Загружаем данные по статьям, когда компонент отрисовался
   */
  componentDidMount() {
    const { dispatch } = this.props;
    
    dispatch(postsLoaded());
  }

  render() {
    const { posts, user } = this.props;
    const { onDeletePost } = this;
    const loading = <div className="sign-out loader">loading...</div>;
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
}

const mapStateToProps = ( state ) => {
  return {
    posts: state.posts,
    user: state.user
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    dispatch
  };
};

Posts.propTypes = {
  dispatch: PropTypes.func,
  posts: PropTypes.array,
  user: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
