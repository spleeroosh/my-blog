import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postsLoaded, removePost } from './../../actions';
import { db } from './../../firebase';

const withData = (Wrapped, getData) => {
  return connect(mapStateToProps, mapDispatchToProps)(
    class extends Component {
  
      componentDidMount() {
        getData().then((data) => {
          this.props.dispatch(postsLoaded(data));
        });
      };

      onDeletePost = (id) => {
        let removedPost = {};
        const oldPosts = this.props.posts.map((post) => {
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
        
        this.props.dispatch(removePost(newPosts));

        db.collection("posts").doc(removedPost['id']).delete().then(() => {
          console.log('deleted');
        });

      }
  
      render() {
        const { posts } = this.props;
        if (posts) {
          return <Wrapped {...this.props} data={posts} onDeletePost={this.onDeletePost}/>
        } else {
          return <div>!</div>
        };
      };
    }
  )
};

const mapStateToProps = ( {posts} ) => {
  return {
    posts
  }
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    dispatch
  }
};





export default withData;