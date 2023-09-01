import React from 'react';
import './App.css';
import PersonalInfo from './PersonalInfo';
import Projects from './Projects.js';
import Courses from './Courses.js';
import logo from './logojl.png';
function App() {
  return (
    <div className="App">
      {/* <canvas id="canvas"></canvas> */}
      <div className="Header">
        <img src={logo} className="Logo" alt="logo" />
      </div>
      <div className='top-section'>
        <canvas id="canvas"></canvas>
        <h1 className="Title">Hi,</h1>
        <h1 className="Title">I'm Jerry,</h1>
        <h1 className="sub-Title">Third Year @UChicago</h1>
        <p className="Intro">Welcome to my homepage. I am  majoring in Computer Science, Math, and Statistics. I've explored data analysis, AI, trading and software engineering. My goal is to keep contributing to the <b>tech</b> community, by being kind, thoughtful, and cool.</p>
      </div>

      <div id="personalinfo" className='section'>
        <PersonalInfo />
      </div>

      <div id="projects" className='section'>
        <Projects />
      </div>

      <div id="courses" className='section'>
        <Courses />
      </div>

      <div className='footer'>
        <h4>© Jerry Liu 2021</h4>
        <h4>Designed by Jerry Liu</h4>
      </div>
    </div>
  );
}

export default App;
