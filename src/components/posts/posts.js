import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { connect } from 'react-redux';
import { removePost, postsLoaded, updateUser } from './../../actions';

import AddPost from '../add-post';
import Post from './post';
import SearchBar from './../search_bar/search_bar';

class Posts extends Component {
  /**
   * @param {Number} id Получаем id статьи,
   * удаляем статью из массива, и диспатчим новый массив со статьями
   */
  onDeletePost = id => {
    const { dispatch } = this.props,
      { posts } = this.props,
      new_posts = _.filter(posts, post => post.id !== id),
      removed_post = _.find(posts, (post) => post.id === id);

    dispatch(removePost(new_posts, removed_post));
  };

  /**
   * Загружаем данные по статьям, когда компонент отрисовался
   */
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(updateUser());

    dispatch(postsLoaded());
  }

  UNSAFE_componentWillMount() {
    const { dispatch } = this.props;

    dispatch({
      type: 'POSTS_FILTERED',
      payload: null
    });
  }

  filterPosts = (posts, posts_filter) => {
    return _.isNull(posts_filter) ? 
      posts : 
      _.filter(
        posts, 
        (post) => {
          let title = post.title.replace(/&nbsp;/g, ' ');

          return _.includes(
            _.toLower(title),
            _.toLower(posts_filter)
          );
        }
      );
  }

  render() {
    const { posts, user, posts_filter } = this.props,
      { onDeletePost } = this,
      loading = <div className="sign-out loader">loading...</div>;
    let PostsComponent,
      filtered_posts;
    
    if (!_.isEmpty(posts)) {
      filtered_posts = this.filterPosts(posts, posts_filter);

      PostsComponent = (
        <section className="posts container">
          {_.map(filtered_posts, post => (
            <Post
              post={post}
              user={user}
              onDeletePost={onDeletePost}
              key={post['id']}
            />
          ))}
        </section>
      );
    }

    return (
      <React.Fragment>
        <SearchBar />
        {posts.length ? PostsComponent : loading}
        <AddPost />

      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts_filter: state.posts_filter,
    posts: state.posts,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

Posts.propTypes = {
  posts_filter: PropTypes.string,
  dispatch: PropTypes.func,
  posts: PropTypes.array,
  user: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
