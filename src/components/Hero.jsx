import { useEffect } from 'react';
import { Award, Building2, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
    { num: '22+', label: 'Years of Academic Excellence', icon: <Award size={20} /> },
    { label: 'Extensive Recruiter Network', icon: <Building2 size={20} /> },
    { label: 'Successful Student Placements', icon: <Users size={20} /> },
    { label: 'Consistently Strong Placement Outcomes', icon: <TrendingUp size={20} /> },
];

// ── Individual stat card ──
function StatPill({ stat }) {
    return (
        <div className="hero-stat-pill">
            <div className="hero-stat-num">
                {stat.num ? stat.num : stat.icon}
            </div>
            <div className="hero-stat-label">{stat.label}</div>
        </div>
    );
}

const Hero = () => {

    return (
        <section className="hero" id="hero">
            {/* Background Video */}
            <div className="hero-bg-video">
                <iframe
                    src="https://www.youtube.com/embed/kL8IpxB5v8s?si=a2fOijDtOz2KLnh_&autoplay=1&mute=1&controls=0&loop=1&playlist=kL8IpxB5v8s&playsinline=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&vq=hd1080"
                    title="Hero Background Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </div>
            <div className="hero-overlay" />
            <div className="hero-grid" />
            <div className="hero-blob hero-blob-1" />
            <div className="hero-blob hero-blob-2" />

            {/* Main Content */}
            <div className="hero-content" style={{ paddingTop: '9rem', paddingBottom: '4rem' }}>
                <div className="hero-badge">
                    <span className="hero-badge-dot" />
                    Admissions Open — Batch 2026–27
                </div>

                <h1>
                    Empowering <span className="highlight">Engineers</span><br />
                    Shaping the Future
                </h1>

                <p className="hero-sub">
                    Malwa Institute of Technology, Indore — where world-class academics meet
                    real-world opportunities. Build your career with 200+ industry partners and
                    a legacy of excellence.
                </p>

                <div className="hero-actions">
                    <a
                        href="https://forms.zohopublic.in/lakshya2025miti1/form/CollegeRegistrationForm/formperma/bW1CsY15bWQWYeLV6_DHEHzn6lVy8u5-7K8zOwu42Es"
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Apply Now for Admission
                        <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <button
                        className="btn btn-ghost hero-btn-discover"
                        onClick={() => document.getElementById('why-choose-us')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Discover More
                    </button>
                </div>
            </div>

            {/* Floating Stats */}
            <div className="hero-stats">
                {stats.map((s, i) => (
                    <StatPill key={i} stat={s} />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="hero-scroll">
                <div className="scroll-line" />
                <span>Scroll</span>
            </div>
        </section>
    );
};

export default Hero;
