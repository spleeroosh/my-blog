import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import { connect } from 'react-redux';
import { addPost } from './../../actions/index';

import { Input } from './../custom_fields/input';
import { Textarea } from './../custom_fields/textarea';

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
    this.onTabDown = this.onTabDown.bind(this);
  }
  
  text_area = React.createRef();

  onTitleChange(e) {
    this.setState({
      title: e.target.value.toUpperCase()
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

  /**
   * Получаем заголовок и текст из состояния,
   * форматируем и диспатчим статью,
   * после чего очищаем форму
   * @param {*} e 
   */
  addPost(e) {
    e.preventDefault();
    const id = uuid(),
        { title, content } = this.state,
        { dispatch } = this.props,
        { posts } = this.props,
        { formattedTitle, formattedContent } = this.formattedText(title, content),
        oldPosts = posts.map((post) => {
          return { ...post };
        });
    
    dispatch(addPost(oldPosts, id, formattedTitle, formattedContent));
    this.clearForm();
  };

  /**
   * Форматируем заголовок, и текст, добавляя пробелы, и переносы строк
   * @param {String} title заголовок статьи
   * @param {String} content текст статьи
   * @returns {Object} Возвращаем объект с отформатированным заголовком, и текстом
   */
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

  /**
   * Функция, добавляющая табуляцию в textarea
   * @param {*} e event 
   */
  onTabDown(e) {
    if (e.keyCode === 9) {
      e.preventDefault();
      let value = this.state.content;
      let start = this.text_area.current.selectionStart;
      let end = this.text_area.current.selectionEnd;
      this.setState(() => {
        return {
          content: value.substring(0, start) + '\t' + value.substring(end)
        };
      });
    };
  };

  render() {

    const { title, content } = this.state;
    const { user } = this.props;
    const { onTitleChange, addPost, onPostChange, onTabDown, text_area } = this;
    
    const add_posts = <form action="submit" className="container col-9 add-form">
                        <fieldset>
                          <Input type={'text'} 
                            placeholder={'Введите название статьи'}
                            title={title}
                            small_text={''}
                            label={''}
                            class_name={'add-form__input'}
                            onInputChange={onTitleChange}/>

                          <Textarea onPostChange={onPostChange}
                                    onTabDown={onTabDown}
                                    text_area={text_area}
                                    content={content}
                                    rows={'7'}
                                    placeholder={'Введите текст статьи'}
                                    class_name={'add-form__textarea'}
                                    id={'add-form__textarea'}/>
                        </fieldset>
                        <button type="button" className="btn"
                                onClick={addPost}>+
                        </button>
                      </form>;
    return (
      user.id ? add_posts : null
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
    posts: state.posts,
    user: state.user
  }
};

AddPost.propTypes = {
  dispatch: PropTypes.func,
  posts: PropTypes.array,
  user: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);