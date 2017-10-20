import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Body from './Body';

class App extends Component {

  // site routing here

  render() {
    return (
      <div>
        <Navbar />
        <Body />
      </div>
    );
  }
}

export default App;
