import ThumbnailCarousel from '../components/ui/thumbnail-carousel';
import VideoPlayer from '../components/VideoPlayer';
import SEO from '../components/SEO';
import { Book, Trophy, Mic2, Bus } from 'lucide-react';
import campus5 from '../assets/campus5.webp';
import camp1 from '../assets/mit-gallery/campus/camp1.webp';
import libraryImg from '../assets/amenities/library.webp';
import sportsImg from '../assets/amenities/sports.webp';
import auditoriumImg from '../assets/amenities/auditorium.jpeg';
import busImg from '../assets/amenities/campus-transport.webp';

const CampusLife = () => {
    return (
        <div className="page-wrapper" style={{ paddingTop: '80px', overflowX: 'hidden' }}>
            <SEO 
                title="Campus Life"
                description="Experience the vibrant life at MIT Indore. From sports and cultural festivals to state-of-the-art infrastructure and clubs."
                keywords="Campus Life MIT, Student Activities, College Infrastructure, Sports MIT Indore, Cultural Events"
            />
            <div style={{
                background: `linear-gradient(rgba(5, 10, 20, 0.8), rgba(5, 10, 20, 0.8)), url(${camp1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff', padding: 'clamp(5rem, 10vw, 10rem) 5% clamp(4rem, 8vw, 8rem)', textAlign: 'center'
            }}>
                <h1 className="section-title section-title-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>Campus <span>Life</span></h1>
                <p className="section-sub section-sub-white" style={{ margin: '0 auto', maxWidth: '700px' }}>
                    A vibrant ecosystem of learning, sports, culture, and innovation. Experience the best years of your life at MIT Indore.
                </p>
            </div>

            {/* Full Campus Tour Video */}
            <div className="container" style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 5%' }}>
                <div className="section-chip" style={{ justifyContent: 'center' }}><span className="chip-dot"></span>Virtual Tour</div>
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Experience <span>MIT Indore</span></h2>
                <p className="section-sub" style={{ textAlign: 'center', marginBottom: '3rem', margin: '0 auto 3rem' }}>
                    Take a comprehensive digital walkthrough of our state-of-the-art campus facilities, classrooms, labs, and student hangouts.
                </p>

                <VideoPlayer
                    src="https://www.youtube.com/embed/lyUCDXrMgz0"
                    title="Full Campus Tour (8 Min)"
                    thumbnail={campus5}
                />
            </div>

            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto 4rem', padding: '0 5%' }}>
                <ThumbnailCarousel />
            </div>

            {/* Amenities Grid */}
            <div className="container" style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 5%' }}>
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>World-Class <span>Amenities</span></h2>
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', 
                    gap: '1.5rem',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    {[
                        { title: 'Central Library', desc: '50,000+ books, e-journals, and digital resources.', image: libraryImg, icon: <Book size={32} /> },
                        { title: 'Sports Complex', desc: 'Cricket ground, basketball court, and indoor games.', image: sportsImg, icon: <Trophy size={32} /> },
                        { title: 'Auditorium', desc: 'Air-conditioned auditorium.', image: auditoriumImg, icon: <Mic2 size={32} /> },
                        { title: 'Transport', desc: 'Bus facility covering all major routes in Indore.', image: busImg, icon: <Bus size={32} /> }
                    ].map((item, i) => (
                        <div key={i} style={{ 
                            background: '#fff', 
                            padding: '2rem', 
                            borderRadius: '24px', 
                            boxShadow: '0 4px 20px rgba(0,0,0,0.05)', 
                            textAlign: 'center',
                            border: '1px solid var(--border-light)',
                            overflow: 'hidden'
                        }}>
                            <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '12px', display: 'block' }}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div style={{ display: 'none', color: 'var(--crimson)', height: '180px', alignItems: 'center', justifyContent: 'center' }}>
                                    {item.icon}
                                </div>
                            </div>
                            <h4 style={{ fontSize: '1.2rem', color: 'var(--navy)', marginBottom: '0.5rem' }}>{item.title}</h4>
                            <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CampusLife;