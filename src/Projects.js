import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <div className="Projects">
            <h2>Projects & Achivements</h2>
            <h3>Software</h3>
            <ul>
                <li>Project 1: Email sending application</li>
                <li>Project 2: Database Management System</li>
                <li>Project 3: Terminal execution using parallelism</li>
            </ul>
            <h3>Data Science & Research</h3>
            <ul>
                <li>Project 1: Kaggle House Price Prediction</li>
                <li>Project 2: Predicting particle distribution in collider @ Fermilab</li>
                <li>Project 3: Research on the effect of COVID-19 on the US stock market</li>
            </ul>
            <h3>Trading</h3>
            <ul>
                <li>Project 1: IMC Trading Competition top 2.5%</li>
                <li>Project 2: Citadel Securities Trading Challenge #1 (@uchicago)</li>
                <li>Project 2: Backtesting of equity trading strategy @ CITIC Capital</li>
            </ul>
        </div>
    );
}

export default Projects;
