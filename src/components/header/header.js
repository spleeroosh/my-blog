import React, { Component } from 'react';

import NavBar from './../nav-bar';

class Header extends Component {
  constructor() {
    super();
    this.headerRef = React.createRef();
  }

  onHeaderResize = () => {
    this.headerRef.current.lastChild.style.width = `${this.headerRef.current.clientWidth}px`;
    window.addEventListener('resize', () => {
      this.headerRef.current.lastChild.style.width = `${this.headerRef.current.clientWidth}px`;
    });
  }
  
  componentDidMount() {
    this.onHeaderResize();
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