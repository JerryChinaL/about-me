import {React, useEffect} from 'react';
import './Companies.css';
import fermi from './img/fermi.png';
import tcr from './img/tcr.png';
import springer from './img/springer.png';
import zx from './img/zx.png';
import cs from './img/cs.jpeg';
import propaga from './img/propaga.jpeg';

function CompaniesWorkedWith() {

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        });

        const targets = document.querySelectorAll('.company-item');
        targets.forEach(target => observer.observe(target));

        // Cleanup observer on component unmount
        return () => targets.forEach(target => observer.unobserve(target));
    }, []);
    

    return (
        <div className="CompaniesWorkedWith">
            <h1>Companies Worked With</h1>
            <div className="companies">
                <div className="company-item">
                    <a href="https://www.fnal.gov/">
                        <img src={fermi} alt="Company 1" />
                        <p>Fermilab</p>
                    </a>
                </div>
                <div className="company-item">
                    <a href="http://www.cs.ecitic.com/newsite/en/">
                        <img src={zx} alt="Company 2" />
                        <p>CITIC Securities</p>
                    </a>
                </div>
                <div className="company-item">
                    <a href="https://cs.uchicago.edu/">
                        <img src={cs} alt="Company 3" />
                        <p>UChicago CS</p>
                    </a>
                </div>

                <div className="company-item">
                    <a href="https://propaga.mx/">
                        <img src={propaga} alt="Company 4" />
                        <p>Propaga</p>
                    </a>
                </div>
                <div className="company-item">
                    <a href="https://www.tcrinc.com/">
                        <img src={tcr} alt="Company 5" />
                        <p>TCR</p>
                    </a>
                </div>

                <div className="company-item">
                    <a href="https://www.springer.capital/">
                        <img src={springer} alt="Company 6" />
                        <p>Springer Capital</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CompaniesWorkedWith;
