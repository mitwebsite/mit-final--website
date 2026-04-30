import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    const ref = useRef(null);
    const [vis, setVis] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setVis(true); obs.disconnect(); }
        }, { threshold: 0.2 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section className="cta-section" ref={ref}>
            <div className="cta-mesh" />
            <div className="cta-glow" />
            <div className={`cta-inner anim-fade ${vis ? 'visible' : ''}`}>
                <div className="section-chip" style={{ margin: '0 auto 1.5rem', display: 'inline-flex' }}>
                    <span className="chip-dot" />Admissions Open
                </div>
                <h2>Begin Your Engineering Journey at MIT Indore</h2>
                <p>
                    Join 10,000+ alumni shaping the world. Admissions open for
                    Batch 2026–27. Apply now and secure your future.
                </p>
                <div className="cta-actions">
                    <a 
                        href="https://forms.zohopublic.in/lakshya2025miti1/form/CollegeRegistrationForm/formperma/bW1CsY15bWQWYeLV6_DHEHzn6lVy8u5-7K8zOwu42Es" 
                        className="btn btn-white"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Apply Now &#8594;
                    </a>
                    <Link to="/academics" className="btn btn-ghost">View Programs</Link>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
