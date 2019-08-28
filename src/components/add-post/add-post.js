import React, { Component } from 'react';
import './add-post.css';
import uuid from 'uuid';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { addPost } from './../../actions/index';

import TitleForm from './title-form';
import PostForm from './post-form';

class AddPost extends Component {

  state = {
    id: null,
    title: '',
    post: ''
  }

  textArea = React.createRef()

  onTitleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  };

  onPostChange = (e) => {
    this.setState({
      post:  e.target.value
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
    const { title, post } = this.state;
    const { posts, dispatch, firestore } = this.props;
    const { formattedTitle, formattedPost } = this.formattedText(title, post);

    const newPost = {
      id,
      title: formattedTitle,
      post: formattedPost
    };

    const oldPosts = posts.map((post) => {
      return { ...post };
    });

    const newPosts = [
      newPost,
      ...oldPosts      
    ];
    
    dispatch(addPost(newPosts, newPost, firestore));
    //myBlogService.addPost(id, formattedTitle, formattedPost);
    this.clearForm();
  };

  formattedText = (title, post) => {
    const formattedTitle = title.replace(/ /g, '&nbsp;');
    const formattedPost = post.replace(/ /g, '&nbsp;').replace(/\n/g, "<br />").replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;'); 
    return {
      formattedTitle,
      formattedPost
    }
  };

  onTabDown = (e) => {
    
    if (e.keyCode === 9) {
      e.preventDefault();
      let value = this.state.post;
      let start = this.textArea.current.selectionStart;
      let end = this.textArea.current.selectionEnd;
      this.setState(() => {
        return {
          post: value.substring(0, start) + '\t' + value.substring(end)
        };
      });
    };
  };

  render() {

    const { title, post } = this.state;
    const { onTitleChange, addPost, onPostChange, onTabDown, textArea } = this;

    return (
      <form action="submit" className="container">
        <fieldset>
          <TitleForm title={title} onTitleChange={onTitleChange} />
          <PostForm post={post} onPostChange={onPostChange} onTabDown={onTabDown} textArea={textArea}/>
        </fieldset>
        <button type="button" className="btn btn-primary"
                onClick={addPost}>+
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

const mapStateToProps = ( state ) => {
  return {
    posts: state.firestore.ordered.posts
  }
};

export default compose(
  firestoreConnect(() => ['posts']), // or { collection: 'todos' }
  connect(mapStateToProps)
 )(AddPost)