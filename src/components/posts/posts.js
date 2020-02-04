import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from 'lodash';

import { connect } from "react-redux";
import { removePost, postsLoaded, updateUser } from "./../../actions";

import AddPost from "../add-post";
import Post from "./post";

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

  render() {
    const { posts, user } = this.props,
          { onDeletePost } = this,
          loading = <div className="sign-out loader">loading...</div>,
          PostsComponent = (
            <section className="posts container">
              {_.map(posts, post => (
                <Post
                  post={post}
                  user={user}
                  onDeletePost={onDeletePost}
                  key={post['id']}
                />
              ))}
            </section>
          );

    return (
      <React.Fragment>
        {posts.length ? PostsComponent : loading}
        <AddPost />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
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
  dispatch: PropTypes.func,
  posts: PropTypes.array,
  user: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
