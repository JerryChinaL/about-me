import React from 'react';
import './Courses.css';

const Courses = () => {
  return (
    <div className='Courses'>
      <h2>Courses Taken</h2>
      <h3>Computer Science (CMSC):</h3>
      <ul>
        <li>15400 Introduction to Computer Systems</li>
        <li>27100 Discrete Math</li>
        <li>27200 Theory of Algorithms</li>
        <li>23700 Introduction to Computer Graphics</li>
        <li>23500 Introduction to Database Systems</li>
        <li>31230 Fundamentals of Deep Learning (Autumn 23)</li>
      </ul>
      <h3>Math and Statistics:</h3>
      <ul>
        <li>MATH 16300 Honors Calculus I-III</li>
        <li>MATH 20500 Analysis in Rn I-III</li>
        <li>MATH 20250 Abstract Linear Algebra</li>
        <li>STAT 22400 Applied Regression Analysis</li>
        <li>STAT 25100 Mathematical Probability</li>
        <li>STAT 24400 Statistical Theory and Methods I</li>
        <li>STAT 30900 Mathematical Computation I: Matrix Computation (Autumn 23)</li>
      </ul>
      <h3>Core Curriculum:</h3>
      <ul>
        <li>SOSC: Self, Culture and Society I-II-III</li>
        <li>HUMA: Readings in World Literature I-II</li>
        <li>MUSC: Introduction to Western Art Music</li>
        <li>MUSC: Analysis and Criticism of Music</li>
        <lI>HIST: Russian Civilization: I-II (Autumn 2023)</lI>
      </ul>
      <h3>Others ...</h3>
    </div>
  );
};

export default Courses;
