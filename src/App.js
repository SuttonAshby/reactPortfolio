import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import Landing from './components/Landing.js';
import About from './components/About.js';
import Home from './pages/Home.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />

      </div>
    );
  }
}

export default App;
