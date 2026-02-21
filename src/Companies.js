import { React, useEffect } from 'react';
import './Companies.css';
import fermi from './img/fermi.png';
import tcr from './img/tcr.png';
import springer from './img/springer.png';
import zx from './img/zx.png';
import cs from './img/cs.jpeg';
import propaga from './img/propaga.jpeg';
import denali from './img/denali.png';
import trex from './img/trex.png';

function CompaniesWorkedWith() {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return undefined;
    }

    const targets = document.querySelectorAll('.company-item');
    if (!targets.length) {
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    });

    targets.forEach((target) => observer.observe(target));

    return () => targets.forEach((target) => observer.unobserve(target));
  }, []);

  return (
    <div className="CompaniesWorkedWith">
      <h1>Companies Worked With</h1>
      <div className="companies">
        <div className="company-item">
          <a href="https://www.trexquant.com/">
            <div className='companyhh'>
              <img src={trex} alt="Trexquant" className="trex-logo" />
            </div>
            <p>Trexquant</p>
          </a>
        </div>
        <div className="company-item">
          <a href="https://denaliadvisors.com/">
            <div className='companyhh'>
              <img src={denali} alt="Denali Advisors" style={{ width: '100px', height: 'auto' }} />
            </div>
            <p>Denali Advisors</p>
          </a>
        </div>
        <div className="company-item">
          <a href="https://www.fnal.gov/">
            <img src={fermi} alt="Fermilab" />
            <p>Fermilab</p>
          </a>
        </div>
        <div className="company-item">
          <a href="http://www.cs.ecitic.com/newsite/en/">
            <img src={zx} alt="CITIC Securities" />
            <p>CITIC Securities</p>
          </a>
        </div>
        <div className="company-item">
          <a href="https://cs.uchicago.edu/">
            <img src={cs} alt="UChicago CS" />
            <p>UChicago CS</p>
          </a>
        </div>
        <div className="company-item">
          <a href="https://propaga.mx/">
            <img src={propaga} alt="Propaga" />
            <p>Propaga</p>
          </a>
        </div>
        <div className="company-item">
          <a href="https://www.tcrinc.com/">
            <img src={tcr} alt="TCR" />
            <p>TCR</p>
          </a>
        </div>
        <div className="company-item">
          <a href="https://www.springer.capital/">
            <img src={springer} alt="Springer Capital" />
            <p>Springer Capital</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CompaniesWorkedWith;

