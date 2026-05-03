import About from '../components/About';
import MissionVision from '../components/MissionVision';
import Affiliations from '../components/Affiliations';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';
import campus1 from '../assets/campus1.webp';

const AboutPage = () => {
    return (
        <div className="page-wrapper" style={{ paddingTop: '80px' }}>
            <SEO 
                title="About Us"
                description="Learn about the legacy of Malwa Institute of Technology (MIT) Indore. Established in 2004, our mission is to provide world-class engineering education."
                keywords="About MIT Indore, Mission Vision MIT, Engineering Excellence, MIT History"
            />
            {/* Hero-like header */}
            <div style={{
                position: 'relative',
                background: 'var(--navy)',
                color: '#fff',
                padding: 'clamp(3rem, 6vw, 6rem) 5% clamp(2rem, 4vw, 4rem)',
                textAlign: 'center',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundImage: `url(${campus1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.2,
                    zIndex: 0
                }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <h1 className="section-title section-title-white" style={{ marginBottom: '1rem' }}>About <span>Us</span></h1>
                    <p className="section-sub section-sub-white" style={{ margin: '0 auto', maxWidth: '700px' }}>
                        Since 2004, we have been committed to engineering excellence, fostering innovation,
                        and building leaders of tomorrow.
                    </p>
                </div>
            </div>

            <About />

            <MissionVision />

            <Affiliations />

            <Testimonials />
        </div>
    );
};

export default AboutPage;
