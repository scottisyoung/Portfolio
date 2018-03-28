import React, { Component } from 'react';
import './App.css';

// import ScrollableAnchor from 'react-scrollable-anchor';
import {configureAnchors} from 'react-scrollable-anchor';

// COMPONENTS 

import Navbar from '../src/components/navbar/navbar.js';
import Home from '../src/components/home/home.js';
import About from '../src/components/about/about.js';
import Projects from '../src/components/projects/projects.js';
import Skills from '../src/components/skills/skills.js';
import Contact from '../src/components/contact/contact.js';
import Footer from '../src/components/footer/footer.js';

configureAnchors({offset: -110, scrollDuration: 1000})

class App extends Component {



  render() {

    return (
      <div>
          <Navbar/>
          <Home/>
          <About/>
          <Projects/>
          <Skills/>
          <Contact/>
          <Footer/>
      </div>
    );
  }
}

export default App;
