import React, { Component } from 'react';

import { connect } from 'react-redux';
import './posts.scss';

import postLoaded from './../../actions';

import AddPost from '../add-post'
import Post from './post';

class Posts extends Component {
  onDeletePost = (id) => {
    console.log(id);
  }
  render() {
    console.log(this.props);
    const { onDeletePost } = this;
    return (
      <React.Fragment>
        <section className="container row posts">
          {/* {this.props.data.posts.map((post) => {
            return (
              <Post newPost={post} onDeletePost={onDeletePost} key={post['id']}/>
            );
          })} */}
          <div className="notifications col-3">Notifications</div>
        </section>
        
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
