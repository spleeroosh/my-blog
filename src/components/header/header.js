import React, { Component } from 'react';
import './header.css';

import NavBar from './../nav-bar';

class Header extends Component {

  headerRef = React.createRef();

  componentDidMount() {
    this.headerRef.current.lastChild.style.width = `${this.headerRef.current.clientWidth}px`;
    window.addEventListener('resize', (e) => {
      this.headerRef.current.lastChild.style.width = `${this.headerRef.current.clientWidth}px`;
    })
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