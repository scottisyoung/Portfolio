import React, { Component } from 'react';
import './App.css';

import ScrollableAnchor from 'react-scrollable-anchor';
import {configureAnchors} from 'react-scrollable-anchor';

// COMPONENTS 

import Navbar from '../src/components/navbar/navbar.js';
import Home from '../src/components/home/home.js';
import About from '../src/components/about/about.js';

configureAnchors({offset: -135, scrollDuration: 1500})

class App extends Component {



  render() {

    return (
      <div>
          <Navbar/>
          <Home/>
          <About/>
      </div>
    );
  }
}

export default App;
