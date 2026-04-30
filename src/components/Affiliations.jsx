import React from 'react';

import rgpvLogo from '../assets/logos/rgpv logo.jpeg';
import mpGovtLogo from '../assets/logos/mpfovt logo.jpeg';
import davvLogo from '../assets/logos/davv logo.jpeg';
import aicteLogo from '../assets/logos/aicte logo.jpeg';

const affiliations = [
    { name: 'RGPV Bhopal', logo: rgpvLogo }, 
    { name: 'Govt. of MP', logo: mpGovtLogo }, 
    { name: 'DAVV Indore', logo: davvLogo }, 
    { name: 'AICTE', logo: aicteLogo }, 
];

const Affiliations = () => {
    return (
        <section className="affiliations-section">
            <h2 className="affiliations-title">Affiliation & Accreditation</h2>
            <div className="affiliations-grid">
                {affiliations.map((item, index) => (
                    <div key={index} className="affiliation-card">
                        <img src={item.logo} alt={item.name} className="affiliation-logo" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Affiliations;
