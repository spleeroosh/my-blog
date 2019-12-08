import React, { Component } from 'react';

import NavBar from './../nav-bar';

class Header extends Component {
  constructor() {
    super();
    this.headerRef = React.createRef();
  }

  componentDidMount() {
    this.headerRef.current.lastChild.style.width = `${this.headerRef.current.clientWidth}px`;
    window.addEventListener('resize', () => {
      this.headerRef.current.lastChild.style.width = `${this.headerRef.current.clientWidth}px`;
    });
  }
  render() {
    return (
      <header ref={this.headerRef}>
        <NavBar />
      </header>
    );
  }
}
  

export default Header;