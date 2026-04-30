import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Cpu, Zap, FlaskConical, Network, Brain, Settings, Car, Briefcase, Construction } from 'lucide-react';
import { departmentsData } from '../data/departmentsData';

const programs = [
    { icon: <Monitor />, title: 'Computer Science and Engineering', desc: 'AI, Machine Learning, Cloud Computing, Cybersecurity, and full-stack development with cutting-edge lab facilities.' },
    { icon: <Network />, title: 'Information Technology', desc: 'Software Engineering, Database Management, Network Security, and Web Technologies for the digital age.' },
    { icon: <Brain />, title: 'Artificial Intelligence/Machine Learning', desc: 'Deep Learning, Data Science, Natural Language Processing, and advanced algorithms for future tech.' },
    { icon: <Cpu />, title: 'Electronics and Communication', desc: 'IoT, VLSI, Signal Processing, Wireless Communication, and next-gen Antenna Design laboratories.' },
    { icon: <Zap />, title: 'Electrical and Electronics', desc: 'Power Systems, Control Engineering, Embedded Systems, VLSI Design, and Renewable Energy technologies.' },
    { icon: <Settings />, title: 'Mechanical Engineering', desc: 'Robotics, Manufacturing, CAD/CAM, Thermodynamics, and Automotive Design with industry-standard workshops.' },
    { icon: <Car />, title: 'Automobile Engineering', desc: 'Vehicle Dynamics, Electric Vehicles, Engine Design, and Automotive Electronics for modern transportation.' },
    { icon: <Construction />, title: 'Civil Engineering', desc: 'Structural Analysis, Environmental Engineering, Smart Urban Planning, and Construction Management.' },
    { icon: <FlaskConical />, title: 'Applied Sciences and Humanities', desc: 'Foundational courses in Mathematics, Physics, Chemistry, and Communication Skills for engineering.' },
    { icon: <Briefcase />, title: 'MBA', desc: 'Finance, Marketing, HR, Operations, and Technology Management with industry exposure and placements.' },
];

const Programs = () => {
    const ref = useRef(null);
    const [vis, setVis] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setVis(true); obs.disconnect(); }
        }, { threshold: 0.1 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    const getSlug = (title) => {
        return title.toLowerCase().replace(/ & /g, '-and-').replace(/[/]/g, '-').replace(/ /g, '-').replace(/[()]/g, '');
    };

    return (
        <section className="section" id="programs" ref={ref}>
            <div className="programs-header">
                <div>
                    <div className="section-chip">
                        <span className="chip-dot" />Academic Programs
                    </div>
                    <h2 className="section-title">Our <span>Departments</span></h2>
                </div>
                <Link to="/academics" className="link-red">All Departments &#8594;</Link>
            </div>

            <div className="programs-grid">
                {programs.map((p, i) => {
                    const slug = getSlug(p.title);
                    const hodName = departmentsData[slug]?.hod?.name || '';
                    
                    return (
                        <Link
                            key={i}
                            to={`/department/${slug}`}
                            className={`prog-card anim-fade ${vis ? 'visible' : ''}`}
                            style={{ transitionDelay: `${i * 90}ms`, textDecoration: 'none', display: 'block' }}
                        >
                            <div className="prog-card-top" />
                            <div className="prog-card-body">
                                <div className="prog-icon">{p.icon}</div>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                            </div>
                            <div className="prog-card-footer">
                                <span className="prog-degree">HOD: {hodName}</span>
                                <span className="view-details" style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--crimson)', opacity: 0.8 }}>View Details →</span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default Programs;

