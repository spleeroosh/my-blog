import React, { Component } from 'react';
import './add-post.css';
import uuid from 'uuid';
import { withMyBlogService } from './../hoc-helpers';
import { connect } from 'react-redux';
import { addPost } from './../../actions/index';

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
    const title = this.state.title;
    const post = this.state.post;

    const newPost = {
      id,
      title,
      post
    };

    const oldPosts = this.props.posts.map((post) => {
      return { ...post };
    });

    const newPosts = [
      ...oldPosts,
      newPost
    ];
    
    this.props.dispatch(addPost(newPosts));
    this.props.myBlogService.addPost(id, title, post);
    this.clearForm();
  };

  render() {
    return (
      <form action="submit" className="container">
      <fieldset>
        <div className="form-group">
          <label className="col-form-label col-form-label-lg" htmlFor="titleForm">Название статьи</label>
          <input className="form-control form-control-lg" 
                 type="text" 
                 placeholder="Введите название статьи" 
                 value={this.state.title}
                 onChange={this.onTitleChange} 
                 id="titleForm"/>
        </div>
        <div className="form-group">
          <label htmlFor="postForm" 
                 className="col-form-label col-form-label-lg">Текст для статьи</label>
          <textarea className="form-control form-control-lg" 
                    id="postForm" 
                    rows="7"
                    placeholder="Введите текст статьи" 
                    value={this.state.post}
                    onChange={this.onPostChange}>
          </textarea>
        </div>
      </fieldset>
      <button type="button" className="btn btn-primary"
              onClick={this.addPost}>+
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withMyBlogService()(AddPost));