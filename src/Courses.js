import React from 'react';
import './Courses.css';

const Courses = () => {
  return (
    <div className='Courses'>
      <h1>Courses</h1>
      <div className='course-section-divider'>
        <div className='course-container'>
          <h3>MIT MFin (Current):</h3>
          <ul>
            <li>Options and Futures</li>
            <li>Fixed Income Securities and Derivatives</li>
            <li>Alphanomics</li>
            <li>Quantitative Investment</li>
            <li>Discrete Probability and Stochastic Processes</li>
            <li>Financial Markets</li>
            <li>Advanced Analytics for Finance</li>
          </ul>
        </div>
        <div className='course-container'>
          <h3>Computer Science (CMSC):</h3>
          <ul>
            <li>15400 Intro to Computer Systems</li>
            <li>27100 Discrete Math</li>
            <li>27200 Theory of Algorithms</li>
            <li>23200 Intro to Computer Security</li>
            <li>25040 Intro to Computer Vision</li>
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
            <li>HIST: Russian Civilization: I-II</li>
            <li>BUSN 20100 Financial Accounting</li>
          </ul>
        </div>
        <div className='course-container'>
          <h3>Math and Statistics:</h3>
          <ul>
            <li>MATH 16300 Honors Calculus I-III</li>
            <li>MATH 20500 Analysis in Rn I-III</li>
            <li>MATH 20250 Abstract Linear Algebra</li>
            <li>MATH 24500 Abstract Algebra I-II</li>
            <li>MATH 23500 Stochastic Processes</li>
            <li>STAT 22400 Applied Regression Analysis</li>
            <li>STAT 25100 Mathematical Probability</li>
            <li>STAT 24400 Statistical Theory and Methods I</li>
            <li>STAT 30900 Mathematical Computation I: Matrix Computation</li>
          </ul>
        </div>
        <div className='course-container'>
          <h3>Courses I Was a Grader For:</h3>
          <ul>
            <li>CMSC 14300 Systems Programming I</li>
            <li>CMSC 27100 Discrete Math</li>
            <li>STAT 24400 Statistical Theory and Methods I</li>
            <li>MPCS 53111 Machine Learning</li>
            <li>TTIC 31230 Deep Learning</li>
          </ul>
        </div>
      </div>
      <div className='course-container-etc'>
        <h3>etc ...</h3>
      </div>
    </div>
  );
};

export default Courses;