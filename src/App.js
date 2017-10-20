import React, { Component } from 'react';
import './App.css';
import Body from './Body';
import { Navbar, NavItem } from 'react-materialize';
class App extends Component {

  // site routing here

  render() {
    return (
      <div>
        <Navbar fixed='true' className='purple darken-4' brand='costuME' right>
          <NavItem href='#approved-list'>Approved Costumes</NavItem>
          <NavItem href='#rejected-list'>Rejected Costumes</NavItem>
        </Navbar>
        <Body />
      </div>
    );
  }
}

export default App;
