import React from 'react';
import './Courses.css';

const Courses = () => {
  return (
    <div className='Courses'>
      <h1>Courses Taken</h1>
      <div className='course-section-divider'>
        <div className='course-container'>
          <h3>Computer Science (CMSC):</h3>
          <ul>
            <li>15400 Intro to Computer Systems</li>
            <li>27100 Discrete Math</li>
            <li>27200 Theory of Algorithms</li>
            <li>23700 Intro to Computer Graphics</li>
            <li>23500 Intro to Database Systems</li>
            <li>31230 Fundamentals of Deep Learning</li>
          </ul>
        </div>
        <div className='course-container'>
          <h3>Core Curriculum:</h3>
          <ul>
            <li>SOSC: Self, Culture and Society I-II-III</li>
            <li>HUMA: Readings in World Literature I-II</li>
            <li>MUSC: Introduction to Western Art Music</li>
            <li>MUSC: Analysis and Criticism of Music</li>
            <lI>HIST: Russian Civilization: I-II</lI>
          </ul>
        </div>
        <div className='course-container'>
          <h3>Math and Statistics:</h3>
          <ul>
            <li>MATH 16300 Honors Calculus I-III</li>
            <li>MATH 20500 Analysis in Rn I-III</li>
            <li>MATH 20250 Abstract Linear Algebra</li>
            <li>STAT 22400 Applied Regression Analysis</li>
            <li>STAT 25100 Mathematical Probability</li>
            <li>STAT 24400 Statistical Theory and Methods I</li>
            <li>STAT 30900 Mathematical Computation I: Matrix Computation</li>
          </ul>
        </div>
      </div>
      <div className='course-container-etc'>
        <h3>etc ...</h3>
      </div>
    </div >
  );
};

export default Courses;
