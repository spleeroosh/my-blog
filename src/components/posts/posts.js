import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Switch,  Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { removePost, postsLoaded, updateUser } from './../../actions';

import AddPost from '../add-post';
import Post from './post';
import { PostsList } from './posts_list';
import { Loader } from './../loader';
import { Welcome } from './../welcome';
import getPropsHoc from './../hoc-helpers/get_props_hoc';

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
          let title = this.prepareText({ text: post.title, to_link: false });

          return _.includes(
            _.toLower(title),
            _.toLower(posts_filter)
          );
        }
      );
  }

  prepareText = ({ text, to_link }) => {
    return to_link ? 
      text.replace(/&nbsp;/g, '-').toLowerCase() : 
      text.replace(/&nbsp;/g, ' ');
  }

  render() {
    const { posts, user, posts_filter } = this.props,
      { onDeletePost, prepareText } = this,
      Spinner = () => (
        <React.Fragment>
          <Welcome />
          <Loader />
          <AddPost />
        </React.Fragment>
      );
    let PostsListComponent,
      PostSwitcher,
      filtered_posts;

    if (!_.isEmpty(posts)) {
      filtered_posts = this.filterPosts(posts, posts_filter);

      PostsListComponent = () => (
        <React.Fragment>
          <Welcome />
          <PostsList filtered_posts={filtered_posts} 
            prepareText={prepareText} 
            onDeletePost={onDeletePost} 
            user={user} />
          <AddPost />
        </React.Fragment>
      );
    }

    PostSwitcher = () => {
      return (
        <Switch>
          <Route exact path='/blog' component={posts.length ? PostsListComponent : Spinner} /> 
          {posts.length ? _.map(filtered_posts, post => {
            const props = {
              post,
              user,
              onDeletePost,
              key: post.id,
              setClassName: 'post__item'
            };
            
            return <Route exact path={`/blog/${prepareText({ text: post.title, to_link: true })}`} component={getPropsHoc(Post)(props)}></Route>;
          }) : null }
        </Switch>
      );
    };

    return (
      <React.Fragment>
        <section className="posts container">
          <PostSwitcher />
        </section>
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
