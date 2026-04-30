import { useParams, Link } from 'react-router-dom';
import { departmentsData } from '../data/departmentsData';
import { useEffect } from 'react';
import { Check, User, ArrowRight } from 'lucide-react';

const DepartmentDetail = () => {
    const { id } = useParams();
    const dept = id ? departmentsData[id] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!dept) {
        return (
            <div className="section" style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh' }}>
                <div className="container">
                    <div className="section-chip"><span className="chip-dot"></span>Not Found</div>
                    <h1 className="section-title">Department <span>Coming Soon</span></h1>
                    <p className="section-sub" style={{ margin: '2rem auto' }}>
                        We are currently updating the detailed information for this department. 
                        Please check back shortly or contact the admissions office for details.
                    </p>
                    <Link to="/academics" className="btn btn-primary">Back to Academics</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="page-wrapper" style={{ paddingTop: '80px' }}>
            {/* Hero Section */}
            <div className="dept-hero">
                <div className="hero-grid" style={{ opacity: 0.1 }}></div>
                <div className="hero-blob hero-blob-1" style={{ opacity: 0.1 }}></div>
                
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="section-chip dept-chip">
                        <span className="chip-dot" style={{ background: '#fff' }}></span> Department Profile
                    </div>
                    <h1 className="section-title section-title-white dept-hero-title">
                        {dept.title.split(' ').map((word, i) => (
                            i === dept.title.split(' ').length - 1 ? <span key={i}> {word}</span> : <span key={i} style={{color: 'inherit'}}> {word}</span>
                        ))}
                    </h1>
                    <div className="dept-hero-meta">
                        <div className="dept-hero-meta-item">
                            <span className="dept-hero-icon">{dept.icon}</span>
                            <span className="dept-hero-degrees">{dept.degrees}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <section className="section dept-content-section">
                <div className="container">
                    <div className="dept-grid">
                        {/* Overview */}
                        <div className="anim-fade-up dept-overview">
                            <div className="section-chip"><span className="chip-dot"></span>Overview</div>
                            <h2 className="section-title dept-section-title">Academic <span>Insight</span></h2>
                            <p className="dept-overview-text">
                                {dept.overview}
                            </p>
                            
                            <div className="dept-highlights-card">
                                <h4>Program Highlights</h4>
                                <ul>
                                    {['Industry-ready curriculum', 'Advanced Lab Facilities', 'Experienced Faculty', 'Placement Assistance'].map((item, i) => (
                                        <li key={i}>
                                            <Check size={16} /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* HOD Section */}
                        <div className="anim-fade-up dept-hod-section">
                            <div className="section-chip hod-label-chip">
                                <span className="chip-dot"></span> From HOD's Desk
                            </div>
                            <div className="dept-hod-card">
                                <div className="dept-hod-card-inner">
                                    <div className="dept-hod-img-wrap">
                                        {dept.hod.image ? (
                                            <img 
                                                src={dept.hod.image} 
                                                alt={dept.hod.name} 
                                                style={{ 
                                                    objectPosition: dept.hod.objectPosition || 'center'
                                                }} 
                                            />
                                        ) : (
                                            <User size={80} strokeWidth={1} />
                                        )}
                                    </div>
                                    <h3 className="dept-hod-name">{dept.hod.name}</h3>
                                    <p className="dept-hod-meta">
                                        {dept.hod.qualification} | {dept.hod.experience} Exp.
                                    </p>
                                    
                                    <div className="dept-hod-divider" />
                                    
                                    <p className="dept-hod-message">
                                        &quot;{dept.hod.message.substring(0, 300)}...&quot;
                                    </p>
                                    
                                    <div className="dept-hod-research">
                                        <p className="research-label">Research Interests</p>
                                        <p className="research-text">{dept.hod.researchInterest}</p>
                                    </div>
                                </div>
                                <div className="dept-hod-quote-icon">&quot;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Full HOD Message Modal/Section if needed, but for now we keep it integrated */}
            {dept.hod.message.length > 300 && (
                <section className="section section-alt">
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <h3 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center' }}>Complete <span>Message</span></h3>
                        <p style={{ lineHeight: '1.8', color: 'var(--text-muted)' }}>
                            {dept.hod.message}
                        </p>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="section section-dark" style={{ textAlign: 'center' }}>
                <div className="container">
                    <h2 className="section-title section-title-white">Ready to join <span>{dept.title}?</span></h2>
                    <p className="section-sub section-sub-white" style={{ margin: '1.5rem auto 3rem' }}>
                        Kickstart your career in engineering with MIT Indore. Applications are now open for the current academic session.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a 
                            href="https://forms.zohopublic.in/lakshya2025miti1/form/CollegeRegistrationForm/formperma/bW1CsY15bWQWYeLV6_DHEHzn6lVy8u5-7K8zOwu42Es" 
                            className="btn btn-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Apply Now
                        </a>
                        <Link to="/contact" className="btn btn-ghost">Inquiry</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DepartmentDetail;
