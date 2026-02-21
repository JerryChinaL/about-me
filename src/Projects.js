import React from 'react';
import './Projects.css';
import springer from './img/springer1.png';
import dbms from './img/dbms.png';
import panda from './img/accuracy.png';
import house from './img/hp.png';
import calor from './img/calor.png';
import auth0 from './img/auth0.png';
import ff5 from './img/ff5.png';
import llama from './img/llama.png';

function Projects() {
  return (
    <div className="Projects">
      <h1>Projects</h1>

      <h2>Science & Research</h2>
      <div className="software-projects">
        <div className="project-item">
          <div className='abox'><img src={llama} alt="LLM for Stock Return Prediction" /></div>
          <h4>LLM for Stock Return Prediction</h4>
          <ul>
            <li>Worked in Prof. Dacheng Xiu's group at UChicago Booth.</li>
            <li>Used Large Language Models (LLM) to classify news sentiments and predict stock returns.</li>
            <li>Generated Llama model vector embeddings, evaluated model behavior, and submitted many jobs on HPC clusters.</li>
            <li>Wrote code to parallelize execution for CPU and GPU.</li>
          </ul>
        </div>
        <div className="project-item">
          <a href="https://github.com/JerryChinaL/Fama_French" >
            <div className='abox'><img src={ff5} alt="Fama French Replication" /></div>
            <h4>Fama French Replication</h4>
          </a>
          <ul>
            <li>Replicated Fama French and q-Factor models (along with their variants) with CRSP and Compustat data as part of my work at Denali Advisors.</li>
            <li>Produced 5 tables for evaluation of the models, with output formatted to both Latex and Excel.</li>
            <li>Code available on GitHub.</li>
          </ul>
        </div>
        <div className="project-item">
          <img src={calor} alt="Data Analysis of High-granularity Calorimeters @ Fermilab" />
          <h4>Data Analysis of High-granularity Calorimeters @ Fermilab</h4>
          <ul>
            <li>Worked with experimental particle physicists to improve calorimeter data analysis for future colliders.</li>
            <li>Used gradient-boosted trees and neural networks to predict true particle distribution based on calorimeter detections, improving detector resolution by 50% compared to existing clustering method.</li>
          </ul>
        </div>
        <div className="project-item">
          <a href="https://github.com/JerryChinaL/Portfolio/blob/main/Adversarial%20Attack%20Paper.pdf">
            <img src={panda} alt="Adversarial Training on CNN" />
            <h4>Adversarial Training on CNN</h4>
          </a>
          <ul>
            <li>Researched performance of adversarial training on a CNN that identifies banknote images for visually impaired. Paper published in an ACM Journal.</li>
            <li>Learned about different types of adversarial attacks and defense mechanisms that improve model robustness against malicious adversarial attacks.</li>
          </ul>
        </div>
        <div className="project-item">
          <a href="https://github.com/JerryChinaL/Portfolio/blob/main/House_Price_paper.pdf">
            <img src={house} alt="Kaggle House Price Prediction" />
            <h4>Kaggle House Price Prediction</h4>
          </a>
          <ul>
            <li>Wrote detailed solution of using kernel ridge, gradient boosting, lasso, and other relevant algorithms to predict house prices, based on 50+ house features.</li>
            <li>Performed feature engineering, data normalization, grid search of parameters, etc. Ranked in the top 4%.</li>
          </ul>
        </div>
      </div>

      <h2>Programming</h2>
      <div className="software-projects">
        <div className="project-item">
          <img src={dbms} alt="Database Management System" />
          <h4>Database Management System</h4>
          <ul>
            <li>Developed key components of a database management system in Rust, including heap-store for reduced I/O cost and operators such as hash join and aggregate for efficient query processing.</li>
            <li>Showcased proficiency in relational databases, query optimization, and executing SQL queries with Python.</li>
          </ul>
        </div>
        <div className="project-item">
          <img src={auth0} alt="User Authentication and Access with Auth0" />
          <h4>User Authentication and Access with Auth0</h4>
          <ul>
            <li>Developed three web app prototypes featuring multi-factor authentication (MFA), biometric login, and role-based access controls using React and Auth0.</li>
            <li>Enhanced security and user experience, and facilitated complex integration with institutions like schools and hospitals.</li>
          </ul>
        </div>
        <div className="project-item">
          <a href="https://www.springer.capital">
            <img src={springer} alt="Website for Springer Capital" />
            <h4>Website for Springer Capital</h4>
          </a>
          <ul>
            <li>Developed the full website for Springer Capital during internship with HTML/CSS and published to a GoDaddy domain.</li>
            <li>Managed shared GitHub repository, virtual machines, cloud backup, and Amazon AWS instances.</li>
          </ul>
        </div>
      </div>

      <h2>Trading</h2>
      <ul>
        <li>Project 1: IMC Trading Competition top 2.5%</li>
        <li>Project 2: Citadel Securities Trading Challenge #1 (@uchicago)</li>
        <li>Project 3: Backtesting of equity trading strategy @ CITIC Securities</li>
      </ul>
    </div>
  );
}

export default Projects;
