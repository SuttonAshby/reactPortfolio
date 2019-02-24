import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import Landing from './components/Landing.js';
import About from './components/About.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <About />
      </div>
    );
  }
}

export default App;
