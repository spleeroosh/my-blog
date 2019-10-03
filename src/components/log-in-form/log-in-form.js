import React, { Component } from 'react';
import { authUser } from './../../actions';

import firebaseApp from "./../../firebase";

import { connect } from 'react-redux';


class LogInForm extends Component {
  constructor() {
    super();

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  state = {
    email: '',
    password: ''
  }

  onEmailChange(e) {
    this.setState({
      email: e.target.value
    })
  }
  
  onPasswordChange(e) {
    this.setState({
      password: e.target.value
    })
  }

  onClick(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const { email, password } = this.state;
    dispatch(authUser(email, password, firebaseApp));
  }

  render() {
    console.log(this.props.state.project.user);

    if (this.props.state.project.user) {
      return <div className="singout">SING OUT</div>
    }

    return (
      <div className="card mb-3 login">
        <div className="card-header login__header">Введите почту и пароль для входа</div>
        <div className="card-body">
          <form className="login__form">
            <fieldset>
              <div className="form-group">
                <label for="exampleInputEmail1">Почта</label>
                <input type="email" 
                       className="form-control" 
                       id="exampleInputEmail1" 
                       aria-describedby="emailHelp" 
                       placeholder="Введите почту"
                       onChange={this.onEmailChange}/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Пароль</label>
                <input type="password" 
                       className="form-control" 
                       id="exampleInputPassword1" 
                       placeholder="Пароль"
                       onChange={this.onPasswordChange}/>
              </div>
              <button type="submit" className="btn" onClick={(e) => this.onClick(e)}>Войти</button>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    dispatch
  };
};

const mapStateToProps = ( state ) => {
  return {
    state
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
