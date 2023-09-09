import { React, useEffect } from 'react';
import './App.css';
import PersonalInfo from './PersonalInfo';
import Projects from './Projects.js';
import Courses from './Courses.js';
import CompaniesWorkedWith from './Companies';
import logo from './logojl.png';
import me from './img/me.png';
function App() {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  const toggleDropdown = () => {
    document.getElementById('dropdown-content').classList.toggle('open');
  }
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const backToTopButton = document.querySelector('.back-to-top');
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          backToTopButton.classList.remove('visible');
        } else {
          backToTopButton.classList.add('visible');
        }
      });
    });

    const target = document.querySelector('.top-section');
    observer.observe(target);

    // Cleanup observer on component unmount
    return () => observer.unobserve(target);
  }, []);
  return (
    <div className="App">
      {/* <canvas id="canvas"></canvas> */}
      {/* <div className="Header">
        <img src={logo} className="Logo" alt="logo" />
      </div> */}
      <div className='top'>
        <div className='top-section'>
          <canvas id="canvas"></canvas>
          <canvas id="sunCanvas" className='sun' onClick={toggleDropdown}></canvas>
          <button className='back-to-top' onClick={() => handleScroll('canvas')}><div className='arrow-up'></div></button>
          <div id='menu'>Menu </div>
          <div id="dropdown" className="dropdown">
            <div id="dropdown-content" className="dropdown-content">
              <button className='dropdown-buttons' onClick={() => handleScroll('personalinfo')}><span className="button-text">About Me</span><span className="cdot">•</span></button>
              <button className='dropdown-buttons' onClick={() => handleScroll('projects')}><span className="button-text">Projects</span><span className="cdot">•</span></button>
              <button className='dropdown-buttons' onClick={() => handleScroll('courses')}><span className="button-text">Courses</span><span className="cdot">•</span></button>
              <button className='dropdown-buttons' onClick={() => handleScroll('companies')}><span className="button-text">Worked At</span><span className="cdot">•</span></button>

            </div>
          </div>
          <div className="Header">
            <img src={logo} className="Logo" alt="logo" />
          </div>
          <h1 className="Title">Hello</h1>
          <h1 className="Title">I'm Jerry,</h1>
          <h1 className="sub-Title">Third Year Undergrad @UChicago</h1>
          <p className="Intro">Welcome to my homepage. I am  majoring in Computer Science, Math, and Statistics. I've explored data analysis, AI, trading and software engineering. My goal is to keep contributing to the <b>tech</b> community, by being kind, thoughtful, and cool.</p>
          <p className='contact'>Contact Me via: <a href='https://linkedin.com/in/jerryliucn'>LinkedIn</a> , <a href='https://drive.google.com/drive/folders/1RCk1Or4wxFAisri7K-BrT8NfZ99CWTzX?usp=sharing'>Resume</a> , <a href='https://github.com/JerryChinaL'>Github</a> , <a href='lhy0518@uchicago.edu'>lhy0518@uchicago.edu</a> </p>
          <div className='arrow-container'>
            <div className='arrow-down'></div>
          </div>

        </div>
      </div>


      <div id="personalinfo" className='section'>
        <div className="text">
          <PersonalInfo />
        </div>
        <div className='me-photo'>
          <img src={me} alt="Me" />
        </div>
      </div>

      <div id="projects" className='section'>
        <Projects />
      </div>

      <div id="courses" className='section'>
        <Courses />
      </div>

      <div id="companies" className='section'>
        <CompaniesWorkedWith />
      </div>

      <div className='footer'>
        <h4>© Jerry Liu 2023</h4>
        <h4>Designed by Jerry Liu</h4>
      </div>
    </div>
  );
}

export default App;
