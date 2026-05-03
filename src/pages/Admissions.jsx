import { useState, useRef, useEffect } from 'react';
import { FileText, Award, CheckCircle, Calendar, GraduationCap, BarChart, Briefcase, Zap } from 'lucide-react';
import CallToAction from '../components/CallToAction';
import EnquiryForm from '../components/EnquiryForm';
import campus2 from '../assets/campus2.webp';
import SEO from '../components/SEO';

// ── Eligibility data ───────────────────────────────────────────────────────────
const programs = [
    {
        id: 'btech',
        label: 'B.Tech',
        badge: '4 Years',
        criteria: [
            { icon: <FileText size={16} />, text: 'Passed 10+2 with Physics, Chemistry & Mathematics (PCM) from a recognized board.' },
            { icon: <Award size={16} />, text: 'Minimum 45% aggregate marks in PCM (40% for reserved categories).' },
            { icon: <CheckCircle size={16} />, text: 'Valid JEE Mains score or State Level Engineering Entrance Exam.' },
            // { icon: <Calendar size={16} />, text: 'Age limit: Born on or after October 1, 2004.' },
        ],
        // accent: 'var(--crimson)',
    },
    {
        id: 'mtech',
        label: 'M.Tech',
        badge: '2 Years',
        criteria: [
            { icon: <GraduationCap size={16} />, text: 'B.E. / B.Tech in relevant engineering branch from a recognized institution.' },
            { icon: <BarChart size={16} />, text: 'Minimum 55% aggregate (50% for reserved categories).' },
            { icon: <CheckCircle size={16} />, text: 'Valid GATE score mandatory for regular admission.' },
            { icon: <Briefcase size={16} />, text: 'Working professionals with 2+ years experience may apply under Sponsored category.' },
        ],
        accent: '#1565c0',
    },
    {
        id: 'mba',
        label: 'MBA',
        badge: '2 Years',
        criteria: [
            { icon: <GraduationCap size={16} />, text: 'Bachelor\'s degree (any discipline) with minimum 50% aggregate marks.' },
            { icon: <BarChart size={16} />, text: 'Valid CAT / MAT / CMAT / ATMA score required.' },
            { icon: <CheckCircle size={16} />, text: 'Group Discussion and Personal Interview as part of selection process.' },
            { icon: <Briefcase size={16} />, text: 'Relevant work experience preferred but not mandatory.' },
        ],
        accent: '#2e7d32',
    },
];

// ── Process steps ──────────────────────────────────────────────────────────────
const steps = [
    {
        num: '01',
        title: 'Online Registration',
        desc: 'Complete the official registration from the given form with your academic details.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                <path d="M9 14h6" /><path d="M9 18h6" /><path d="M9 10h6" />
            </svg>
        ),
    },
    {
        num: '02',
        title: 'Counseling Session',
        desc: 'Attend a one-on-one counseling session at campus or online with our admissions advisor.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        num: '03',
        title: 'Document Verification',
        desc: 'Submit marksheets, entrance score card, ID proof, and passport photos for verification.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <polyline points="9 15 11 17 15 13" />
            </svg>
        ),
    },
    {
        num: '04',
        title: 'Fee Payment & Confirm',
        desc: 'Complete fee payment online or at campus to secure your seat in the program.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
        ),
    },
];

// ── Page ───────────────────────────────────────────────────────────────────────
const Admissions = () => {
    const [activeTab, setActiveTab] = useState('btech');
    const sectionRef = useRef(null);
    const [vis, setVis] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
            { threshold: 0.1 }
        );
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    const active = programs.find(p => p.id === activeTab);

    return (
        <div className="page-wrapper adm-page" style={{ paddingTop: '80px' }}>
            <SEO 
                title="Admissions 2026"
                description="Secure your future at MIT Indore. Admissions are open for B.Tech, M.Tech, and MBA for the 2026-27 batch. Apply now and join our community of innovators."
                keywords="MIT Indore Admissions, B.Tech Admission 2026, MBA Admission Indore, Engineering College Application, Direct Admission Indore"
            />

            {/* ── Hero Banner ── */}
            <div className="adm-hero" style={{ position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundImage: `url(${campus2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.15,
                    pointerEvents: 'none'
                }} />
                <div className="adm-hero-bg" />
                <div className="adm-hero-content container">
                    <div className="section-chip" style={{ margin: '0 auto 1.5rem', display: 'inline-flex', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                        <span className="chip-dot" style={{ background: '#fff' }} />
                        Admissions Open — Batch 2026–27
                    </div>
                    <h1 className="adm-hero-title">Admissions <span>2026</span></h1>
                    <p className="adm-hero-sub">
                        Join the legacy of excellence. Applications are now open for B.Tech, M.Tech, and MBA programs.
                    </p>
                    <div className="adm-hero-actions">
                        <a 
                            href="https://forms.zohopublic.in/lakshya2025miti1/form/CollegeRegistrationForm/formperma/bW1CsY15bWQWYeLV6_DHEHzn6lVy8u5-7K8zOwu42Es" 
                            className="btn btn-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Apply Now — Batch 2026–27
                        </a>
                    </div>
                    <div className="adm-hero-pills">

                    </div>
                </div>
            </div>

            {/* ── Main Section ── */}
            <div className="adm-main" ref={sectionRef}>
                <div className="container adm-grid">

                    {/* ── LEFT COLUMN ── */}
                    <div className="adm-left">

                        {/* Eligibility Tabs */}
                        <div className={`adm-block anim-left ${vis ? 'visible' : ''}`}>
                            <div className="adm-block-label">Eligibility Criteria</div>
                            <h2 className="adm-block-title">Who Should Apply?</h2>

                            {/* Tab buttons */}
                            <div className="adm-tabs">
                                {programs.map(p => (
                                    <button
                                        key={p.id}
                                        className={`adm-tab ${activeTab === p.id ? 'active' : ''}`}
                                        style={{ '--tab-color': p.accent }}
                                        onClick={() => setActiveTab(p.id)}
                                    >
                                        {p.label}
                                        <span className="adm-tab-badge">{p.badge}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Tab content card */}
                            <div className="adm-elig-card" key={active.id}>
                                <div className="adm-elig-criteria">
                                    {active.criteria.map((c, i) => (
                                        <div key={i} className="adm-elig-row">
                                            <span className="adm-elig-icon">{c.icon}</span>
                                            <span className="adm-elig-text">{c.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Vertical Timeline */}
                        <div className={`adm-block anim-left ${vis ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
                            <div className="adm-block-label">How To Apply</div>
                            <h2 className="adm-block-title">Application Process</h2>

                            <div className="adm-timeline">
                                {steps.map((step, i) => (
                                    <div key={i} className="adm-step">
                                        <div className="adm-step-left">
                                            <div className="adm-step-icon">{step.icon}</div>
                                            {i < steps.length - 1 && <div className="adm-step-line" />}
                                        </div>
                                        <div className="adm-step-body">
                                            <div className="adm-step-num">{step.num}</div>
                                            <h4 className="adm-step-title">{step.title}</h4>
                                            <p className="adm-step-desc">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <a href="/brochure.pdf" className="btn btn-outline" style={{ marginTop: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} download>
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Download Brochure
                            </a>
                        </div>
                    </div>

                    {/* ── RIGHT COLUMN — Form ── */}
                    <div className={`adm-form-col anim-right ${vis ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
                        <EnquiryForm variant="full" />
                    </div>

                </div>
            </div>

            <CallToAction />
        </div>
    );
};

export default Admissions;
