import React, { Component } from 'react';
import './App.css';
import Body from './Body';
import { Navbar, NavItem } from 'react-materialize';
class App extends Component {

  // site routing here

  render() {
    return (
      <div>
        <Navbar brand='logo' right>
          <NavItem href='#'>Approved Costumes</NavItem>
          <NavItem href='#'>Rejected Costumes</NavItem>
        </Navbar>
        <Body />
      </div>
    );
  }
}

export default App;
