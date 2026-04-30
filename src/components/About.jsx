import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Microscope, Globe } from 'lucide-react';
import aboutImg from '../assets/image_3.webp';

const features = [
    { icon: <Award className="feat-icon" />, text: '22+ Years of Academic Leadership' },
    { icon: <Users className="feat-icon" />, text: 'Expert  Faculty' },
    { icon: <Microscope className="feat-icon" />, text: 'State-of-the-Art Labs & Infrastructure' },
    // { icon: <Globe className="feat-icon" />, text: 'Collaborations & MoUs' },
];

const About = () => {
    const ref = useRef(null);
    const [vis, setVis] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setVis(true); obs.disconnect(); }
        }, { threshold: 0.15 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section className="section section-alt" id="about" ref={ref}>
            <div className="about-layout">
                {/* Image side */}
                <div className={`about-image-side anim-left ${vis ? 'visible' : ''}`}>
                    <div className="about-img-frame">
                        <img src={aboutImg} alt="MIT Indore Campus" />
                        <div className="about-img-overlay" />
                    </div>
                    <div className="about-badge">
                        <div className="about-badge-num">22+</div>
                        <div className="about-badge-text">Years of Excellence</div>
                    </div>
                    <div className="about-corner" />
                </div>

                {/* Text side */}
                <div className={`about-text-side anim-right ${vis ? 'visible' : ''}`}>
                    <div className="section-chip">
                        <span className="chip-dot" />
                        About MIT Indore
                    </div>
                    <h2 className="section-title">
                        A Legacy Built on <span>Excellence</span>
                    </h2>
                    <p className="section-sub">
                        Established in 2004, Malwa Institute of Technology, Indore has been shaping the
                        engineering leaders of tomorrow. Affiliated to RGPV Bhopal and DAVV Indore, we blend
                        rigorous academics with real-world industrial exposure to produce future-ready graduates.
                    </p>

                    <ul className="about-list">
                        {features.map((f, i) => (
                            <li
                                key={i}
                                className={`about-list-item anim-fade ${vis ? 'visible' : ''}`}
                                style={{ transitionDelay: `${200 + i * 100}ms` }}
                            >
                                <span className="about-list-icon">{f.icon}</span>
                                <span className="about-list-text">{f.text}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="about-actions" style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
                        <Link
                            to="/about"
                            className="btn btn-outline"
                        >
                            Our Story &#8594;
                        </Link>
                        <a 
                            href="https://forms.zohopublic.in/lakshya2025miti1/form/EmployeeApplication/formperma/xepBEE-CErsdUFxYy1_A4twfOhrmUOlqUBo-br7k4lY" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-career"
                            style={{ flexDirection: 'column', padding: '0.6rem 2.2rem', gap: '2px' }}
                        >
                            <span style={{ fontSize: '1rem', fontWeight: '800', letterSpacing: '0.05em' }}>CAREER</span>
                            <span style={{ fontSize: '0.6rem', opacity: '0.85', fontWeight: '600', textTransform: 'uppercase' }}>(Work With Us)</span>
                        </a>
                    </div>
                </div>
            </div>
            <style>{`
                .feat-icon { width: 1.25rem; height: 1.25rem; color: var(--crimson); }
                .about-list-icon { 
                    display: grid; 
                    place-items: center; 
                    width: 32px; 
                    height: 32px; 
                    background: rgba(198,40,40,0.08); 
                    border-radius: 8px; 
                }
                .btn-career {
                    background: linear-gradient(135deg, var(--crimson) 0%, #E53935 100%);
                    box-shadow: 0 10px 25px rgba(198, 40, 40, 0.3);
                    position: relative;
                    overflow: hidden;
                }
                .btn-career::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(255, 255, 255, 0.2),
                        transparent
                    );
                    transition: 0.5s;
                }
                .btn-career:hover::before {
                    left: 100%;
                }
                .btn-career:hover {
                    transform: translateY(-3px) scale(1.02);
                    box-shadow: 0 15px 30px rgba(198, 40, 40, 0.4);
                }
            `}</style>
        </section>
    );
};

export default About;
