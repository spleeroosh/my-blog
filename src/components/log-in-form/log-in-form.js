import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { authUser, signOut, updateUser } from './../../actions';

import { connect } from 'react-redux';

import { Input } from './../custom_fields/input';

class LogInForm extends Component {
  constructor() {
    super();
    
    this.state = {
      email: '',
      password: ''
    };
    
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onClick = this.singIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(updateUser());
  }

  onEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }
  
  onPasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  singIn(e) {
    e.preventDefault();
    const { dispatch } = this.props,
      { email, password } = this.state;

    dispatch(authUser(email, password));
  }

  signOut() {
    const { dispatch } = this.props;
    dispatch(signOut());
  }

  render() {
    const { user } = this.props;
    
    // Если пользователь авторизован, заменяем форму логина на возможность выхода
    if (!_.isEmpty(user)) {
      return <section className="sign-out">
        <button className="sign-out-btn btn" onClick={this.signOut}>ВЫЙТИ</button>
      </section>;
    }
 
    return (
      <div className="card mb-3 log-in">
        <div className="card-header log-in__header">Введите почту и пароль для входа</div>
        <div className="card-body">
          <form className="log-in__form">
            <fieldset>

              <Input type={'email'} 
                placeholder={'Введите почту'}
                small_text={''}
                label={''}
                class_name={'log-in__input'}
                onInputChange={this.onEmailChange}/>

              <Input type={'password'} 
                placeholder={'Введите пароль'}
                small_text={''}
                label={''}
                class_name={'log-in__input'}
                onInputChange={this.onPasswordChange}/>

              <button type="submit" className="log-in__enter-button btn" onClick={(e) => this.singIn(e)}>ЗАЙТИ</button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    dispatch
  };
};

const mapStateToProps = ( state ) => {
  return {
    user: state.user
  };
};


LogInForm.propTypes = {
  dispatch: PropTypes.func,
  user: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
