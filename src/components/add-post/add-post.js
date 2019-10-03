import React, { Component } from 'react';
import uuid from 'uuid';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { addPost } from './../../actions/index';

import TitleForm from './title-form';
import PostForm from './post-form';

class AddPost extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      title: '',
      content: ''
    }

    this.addPost = this.addPost.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onPostChange = this.onPostChange.bind(this);
  }
  

  textArea = React.createRef();

  onTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  };

  onPostChange(e) {
    this.setState({
      content:  e.target.value
    });
  };

  clearForm() {
    this.setState({
      id: '',
      title: '',
      content: ''
    });
  };

  addPost(e) {
    e.preventDefault();
    const id = uuid();
    const { title, content } = this.state;
    const { posts, dispatch, firestore } = this.props;
    const { formattedTitle, formattedContent } = this.formattedText(title, content);

    const newPost = {
      id,
      title: formattedTitle,
      content: formattedContent
    };

    const oldPosts = posts.map((post) => {
      return { ...post };
    });

    const newPosts = [
      newPost,
      ...oldPosts      
    ];
    
    dispatch(addPost(newPosts, newPost, firestore));
    this.clearForm();
  };

  formattedText(title, content) {
    const formattedTitle = title.replace(/ /g, '&nbsp;');
    const formattedContent = content.replace(/ /g, '&nbsp;')
                                    .replace(/\n/g, "<br />")
                                    .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;'); 
    return {
      formattedTitle,
      formattedContent
    }
  };

  onTabDown(e) {
    if (e.keyCode === 9) {
      e.preventDefault();
      let value = this.state.content;
      let start = this.textArea.current.selectionStart;
      let end = this.textArea.current.selectionEnd;
      this.setState(() => {
        return {
          content: value.substring(0, start) + '\t' + value.substring(end)
        };
      });
    };
  };

  render() {

    const { title, content } = this.state;
    const { onTitleChange, addPost, onPostChange, onTabDown, textArea } = this;

    return (
      <form action="submit" className="container col-9 add-form">
        <fieldset>
          <TitleForm title={title} 
                     onTitleChange={onTitleChange} />
          <PostForm content={content} 
                    onPostChange={onPostChange} 
                    onTabDown={onTabDown} 
                    textArea={textArea}/>
        </fieldset>
        <button type="button" className="btn"
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
  connect(mapStateToProps, mapDispatchToProps)
 )(AddPost);