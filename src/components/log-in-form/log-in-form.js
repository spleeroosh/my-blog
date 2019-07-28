import React from 'react';
import './log-in-form.scss';

const LogInForm = () => {
  return (
    <div className="container log-in">
      <div className="card text-white bg-primary mb-3 log-in__card">
        <div className="card-header">Введите почту и пароль для входа</div>
        <div className="card-body bg-secondary">
          <form className="log-in__form">
            <fieldset>
              <div className="form-group">
                <label for="exampleInputEmail1">Почта</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите почту"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Пароль</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Пароль"/>
              </div>
              <button type="submit" className="btn btn-primary btn-sm">Войти</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;