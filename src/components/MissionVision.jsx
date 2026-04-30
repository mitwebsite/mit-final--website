import { useRef, useEffect, useState } from 'react';
import { Target, Landmark } from 'lucide-react';
import campusImg from '../assets/campus1.webp';

const missionPoints = [
    'Imbibe leadership qualities which will guide and direct are students to effective accomplishment of their goals and objectives throughout their lives.',
    'Foster the attitude of outstanding service and satisfaction.',
    'Continuously refine our vision to leverage human, technical and financial resources effectively to achieve strategic goals.',
    'Instill an atmosphere of professional and technical excellence, capitalizing diversity.',
    'Promote a commitment to outstanding performance, quality, innovation and pursuit of excellence.',
    "Maintain a 'people-come-first environment' where students, faculty and staff all are integral components.",
];

const MissionVision = () => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="mv-section" ref={sectionRef}>
            <div className="mv-container">
                {/* Left — Content */}
                <div className={`mv-content ${visible ? 'mv-visible' : ''}`}>
                    <h2 className="mv-title">Our Mission & Vision</h2>

                    <p className="mv-intro-text">
                        Malwa Institute of Technology is committed to provide value based quality technical
                        education to the youth of India, leading to the creation of Nation Builders armed with the
                        tools for dedicated service, growth and career enhancement.
                    </p>

                    <p className="mv-driving-force">
                        Our multi-faced mission is our driving force. We will:-
                    </p>

                    <ul className="mv-list">
                        {missionPoints.map((point, index) => (
                            <li
                                key={index}
                                className={`mv-list-item ${visible ? 'mv-visible' : ''}`}
                                style={{ transitionDelay: `${300 + index * 120}ms` }}
                            >
                                <span className="mv-list-marker" />
                                <span className="mv-list-text">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right — Image */}
                <div className={`mv-image-side ${visible ? 'mv-visible' : ''}`}>
                    <img src={campusImg} alt="MIT Indore Campus" className="mv-image" />
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
