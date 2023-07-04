import React from 'react';
import './App.css';

import Nav from './components/Nav/Nav.js'
import Home from './components/Home/Home.js'
import About from './components/About/About.js'
import Projects from './components/Projects/Projects.js'
import Resume from './components/Resume/Resume.js'
import Contact from './components/Contact/Contact.js'

function App() {
  return (
    <>
    <Nav/>
    <div className='scroll-container'>
      <Home/>
      <About/>
      <Projects/>
      <Resume/>
      <Contact/>
    </div>
    </> 
  ) 
};

export default App;
