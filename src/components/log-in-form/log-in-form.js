import React from 'react';

const LogInForm = () => {
  return (
      <div className="card mb-3 login">
        <div className="card-header login__header">Введите почту и пароль для входа</div>
        <div className="card-body">
          <form className="login__form">
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
              <button type="submit" className="btn">Войти</button>
            </fieldset>
          </form>
        </div>
      </div>
  );
};

export default LogInForm;