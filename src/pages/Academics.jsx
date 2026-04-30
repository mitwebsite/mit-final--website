import Programs from '../components/Programs';
import { Lightbulb, Handshake, MessageSquare } from 'lucide-react';
import calendar5th from '../assets/academics/6th.jpeg';
import calendar8th from '../assets/academics/8th.jpeg';


const Academics = () => {
    return (
        <div className="page-wrapper academics-page">
            <div className="academics-hero">
                <h1 className="section-title section-title-white">Academic <span>Excellence</span></h1>
                <p className="section-sub section-sub-white">
                    Explore our diverse range of undergraduate and postgraduate programs designed to
                    equip you with future-ready skills.
                </p>
            </div>

            <Programs />

            {/* Academic Calendar Section */}
            <section className="section academics-calendar-section">
                <div className="container">
                    <div className="section-chip" style={{ justifyContent: 'center', marginBottom: '1rem' }}><span className="chip-dot"></span>Plan Your Year</div>
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Academic <span>Calendar</span></h2>
                    
                    <div className="calendar-grid" style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', 
                        gap: '1.5rem',
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}>
                        {[
                            { title: 'Academic Calendar - 8th Semester', image: calendar5th },
                            { title: 'Academic Calendar - 5th Semester', image: calendar8th }
                        ].map((item, i) => (
                            <div key={i} className="calendar-card" style={{ 
                                background: '#fff', 
                                padding: '1rem', 
                                borderRadius: '16px', 
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                border: '1px solid var(--border-light)'
                            }}>
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    style={{ 
                                        width: '100%', 
                                        height: 'auto', 
                                        borderRadius: '8px', 
                                        display: 'block',
                                        transition: 'transform 0.3s ease'
                                    }}
                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
                                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                    onError={(e) => {
                                        e.target.closest('.calendar-card').style.display = 'none';
                                    }}
                                />
                                <p style={{ textAlign: 'center', marginTop: '1rem', fontWeight: '600', color: 'var(--navy)' }}>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Video */}
            <section className="section academics-video-section">
                <div className="container academics-video-container">
                    <h2 className="section-title">Experience <span>MIT</span></h2>
                    <div className="video-wrapper">
                        <iframe
                            src="https://www.youtube.com/embed/lyUCDXrMgz0?si=gFv9PkL8n6StKvPH"
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Curriculum Highlights */}
            <section className="section section-alt academics-curriculum-section">
                <div className="container">
                    <div className="section-chip" style={{ justifyContent: 'center', marginBottom: '1rem' }}><span className="chip-dot"></span>Discover Our Edge</div>
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Why Study <span>Here?</span></h2>

                    <div className="why-study-grid">
                        {[
                            {
                                icon: <Lightbulb size={28} />,
                                title: 'Project-Based Learning',
                                highlight: 'Real-world application from day one.',
                                text: 'We believe learning extends beyond the classroom. From your very first semester, you will be immersed in hands-on projects that challenge you to apply theoretical knowledge to solve genuine, real-world problems. This practical approach builds portfolio-ready experience before you graduate.',
                                color: '#eef2ff',
                                iconColor: '#4f46e5'
                            },
                            {
                                icon: <Handshake size={28} />,
                                title: 'Industry-Aligned Curriculum',
                                highlight: 'Stay ahead of the technological curve.',
                                text: 'Our syllabi are continuously refined and updated in direct consultation with leading industry experts and tech pioneers. We ensure that you are mastering the exact tools, languages, and methodologies that top-tier companies are actively seeking in the modern global landscape.',
                                color: '#f0fdf4',
                                iconColor: '#16a34a'
                            },
                            {
                                icon: <MessageSquare size={28} />,
                                title: 'Holistic Soft Skills Training',
                                highlight: 'Communication is your superpower.',
                                text: 'Technical brilliance requires the voice to match it. Our dedicated training modules go far beyond engineering, focusing heavily on leadership, articulate communication, confident public speaking, and rigorous interview preparation to help you stand out in any boardroom.',
                                color: '#fefce8',
                                iconColor: '#ca8a04'
                            }
                        ].map((item, i) => (
                            <div key={i} className="why-study-card">
                                <div style={{ background: item.color, color: item.iconColor, boxShadow: `0 4px 15px ${item.color}` }} className="card-icon-wrap">
                                    {item.icon}
                                </div>
                                <h4>{item.title}</h4>
                                <p className="card-highlight" style={{ color: item.iconColor }}>{item.highlight}</p>
                                <p>{item.text}</p>
                                <div className="card-glow" style={{ border: `2px solid ${item.iconColor}` }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Academics;
