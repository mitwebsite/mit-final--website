import Hero from '../components/Hero';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import AlumniGallery from '../components/AlumniGallery';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

import campus2 from '../assets/campus2.webp';

const Home = () => {
    return (
        <main>
            <Hero />
            <CallToAction />

            
            {/* Admissions / Enquiry Section */}
            <div className="container" style={{ maxWidth: '1200px', margin: '4rem auto' }}>
                <div className="enquiry-grid">
                    <div className="enquiry-content">
                        <div className="section-chip"><span className="chip-dot"></span>Admissions 2026</div>
                        <h2 className="section-title" style={{ marginBottom: '1.5rem', fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>Your Future Starts <span style={{ color: 'var(--crimson)' }}>Here</span></h2>
                        <p className="section-sub" style={{ marginBottom: '3rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
                            Join a community of innovators, leaders, and problem solvers.
                            Our industry-aligned curriculum ensures you are ready for the global workforce from day one.
                        </p>
                        <Link to="/admissions" className="btn btn-primary">
                            Explore Admissions <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="enquiry-image-wrapper">
                        <div className="blob-bg"></div>
                        <div className="dots-bg"></div>
                        <img src={campus2} alt="MIT Indore Campus Life" className="enquiry-img" />
                    </div>
                </div>
            </div>

            {/* Full About Section */}
            <About />

            {/* Single Department Redirect Section */}
            <section className="section" style={{ background: 'var(--navy)', color: '#fff', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div className="hero-grid" style={{ opacity: 0.1 }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="section-chip section-chip-white" style={{ background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>
                        <span className="chip-dot" style={{ background: '#fff' }}></span>Academic Excellence
                    </div>
                    <h2 className="section-title section-title-white" style={{ marginBottom: '1.5rem' }}>Our <span>Departments</span></h2>
                    <p className="section-sub section-sub-white" style={{ margin: '0 auto 2.5rem', maxWidth: '600px' }}>
                        From Computer Science to Mechanical Engineering, discover our wide range of 
                        undergraduate and postgraduate programs designed for the modern world.
                    </p>
                    <Link to="/academics" className="btn btn-white">
                        <BookOpen size={20} /> View All Departments
                    </Link>
                </div>
            </section>

            <WhyChooseUs />
            <Gallery />
            <AlumniGallery />
            <Testimonials />

        </main>
    );
};

export default Home;
