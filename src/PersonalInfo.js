import React from 'react';
import './PersonalInfo.css';

function PersonalInfo() {
  return (
    <div className="PersonalInfo">
      <h1>About Me</h1>
      <p>
        My work is increasingly focused on quantitative finance, especially in mid-frequency equity signal research using machine learning.
        I enjoy building models, testing ideas against real data, and turning research workflows into reliable systems.
      </p>
      <p>
        I am most interested in the intersection of AI, technology, and investing, and I like projects that combine statistical rigor with practical implementation speed.
      </p>
      <h2>Hands-On Experience</h2>
      <ul>
        <li>Machine learning and AI models</li>
        <li>Alpha research and factor modeling</li>
        <li>Data analysis and large-scale backtesting</li>
        <li>Software development for research and production systems</li>
      </ul>
    </div>
  );
}

export default PersonalInfo;
