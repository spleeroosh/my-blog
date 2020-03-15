import React from 'react';
import avatar from './../../images/avatar.jpeg';

export default class Welcome extends React.Component {
  render() {
    return (
      <section className="welcome">
        <div className="avatar">
          <img className="avatar__image" src={avatar}></img>
        </div>
        <div className="welcome__message">
          <h4 className="welcome__title">Роговин Павел</h4>
          <p className="welcome__text">
            Персональный блог, в котором пишу на темы продуктивности, саморазвития, разработки.
            Постараюсь затронуть проблемы, с которыми часто сталкиваюсь, и поделиться своими мыслями.
          </p>
        </div>
      </section>
    );
  }
}