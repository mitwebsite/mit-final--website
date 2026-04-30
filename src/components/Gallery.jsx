import { useRef, useEffect, useState, useCallback } from 'react';
import { X, ZoomIn, Maximize2 } from 'lucide-react';
import campus1 from '../assets/campus1.webp';
import campus2 from '../assets/campus2.webp';
import campus3 from '../assets/campus3.webp';
import campus4 from '../assets/campus4.webp';
import campus5 from '../assets/campus5.webp';

const tiles = [
    { src: campus1, label: '', cls: 'g-tile-1' },
    { src: campus2, label: '', cls: 'g-tile-2' },
    { src: campus3, label: '', cls: 'g-tile-3' },
    { src: campus4, label: '', cls: 'g-tile-4' },
    { src: campus5, label: '', cls: 'g-tile-5' },
];

const Gallery = () => {
    const ref = useRef(null);
    const [vis, setVis] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setVis(true); obs.disconnect(); }
        }, { threshold: 0.1 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    const closeLightbox = useCallback(() => {
        setSelectedImg(null);
    }, []);

    // Handle ESC key to close
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeLightbox();
        };
        if (selectedImg) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden'; // Prevent scroll
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [selectedImg, closeLightbox]);

    return (
        <section className="section section-alt pb-4" id="gallery" ref={ref}>
            <div className={`gallery-top anim-fade ${vis ? 'visible' : ''}`}>
                <div className="section-chip">
                    <span className="chip-dot" />Campus Life
                </div>
                <h2 className="section-title">Our <span>Beautiful Campus</span></h2>
                <p className="section-sub" style={{ margin: '0.7rem auto 0', textAlign: 'center' }}>
                    Sprawling green lawns, modern architecture, and a vibrant community —
                    experience MIT Indore like never before.
                </p>
            </div>

            <div
                className={`gallery-bento anim-scale ${vis ? 'visible' : ''}`}
                style={{ transitionDelay: '150ms', marginTop: '3.5rem' }}
            >
                {tiles.map((t, i) => (
                    <div 
                        key={i} 
                        className={`g-tile ${t.cls}`}
                        onClick={() => setSelectedImg(t)}
                    >
                        <img src={t.src} alt={t.label} />
                        <div className="g-overlay">
                            <div className="g-content" style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <div className="g-zoom-icon">
                                    <Maximize2 size={22} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Lightbox Modal ── */}
            {selectedImg && (
                <div 
                    className="lightbox-overlay"
                    onClick={closeLightbox}
                >
                    <div className="lightbox-close">
                        <X size={32} />
                    </div>
                    
                    <div 
                        className="lightbox-container"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img 
                            src={selectedImg.src} 
                            alt={selectedImg.label} 
                            className="lightbox-img"
                        />
                        <div className="lightbox-caption">
                            {selectedImg.label}
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                .gallery-bento {
                    transition: all 0.5s var(--ease);
                }

                .g-tile {
                    cursor: pointer;
                    position: relative;
                }

                .g-content {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                }

                .g-zoom-icon {
                    width: 36px;
                    height: 36px;
                    background: rgba(255,255,255,0.2);
                    backdrop-filter: blur(4px);
                    border-radius: 50%;
                    display: grid;
                    place-items: center;
                    color: white;
                    opacity: 0;
                    transform: scale(0.8);
                    transition: all 0.3s var(--ease);
                }

                .g-tile:hover .g-zoom-icon {
                    opacity: 1;
                    transform: scale(1);
                }

                /* ── Lightbox Styles ── */
                .lightbox-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(10, 15, 30, 0.92);
                    backdrop-filter: blur(12px);
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                    cursor: zoom-out;
                    animation: fadeIn 0.4s var(--ease) both;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                .lightbox-close {
                    position: absolute;
                    top: 2rem;
                    right: 2rem;
                    color: white;
                    opacity: 0.6;
                    cursor: pointer;
                    transition: all 0.3s;
                    z-index: 10000;
                }

                .lightbox-close:hover {
                    opacity: 1;
                    transform: rotate(90deg);
                }

                .lightbox-container {
                    position: relative;
                    max-width: 90%;
                    max-height: 85vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1.5rem;
                    cursor: default;
                    animation: zoomIn 0.5s var(--spring) both;
                }

                @keyframes zoomIn {
                    from { transform: scale(0.9) translateY(20px); opacity: 0; }
                    to { transform: scale(1) translateY(0); opacity: 1; }
                }

                .lightbox-img {
                    max-width: 100%;
                    max-height: 85vh;
                    border-radius: 12px;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.5);
                    object-fit: contain;
                }

                .lightbox-caption {
                    color: white;
                    font-size: 1.25rem;
                    font-weight: 600;
                    font-family: var(--font-serif);
                    letter-spacing: 0.02em;
                    background: rgba(255,255,255,0.1);
                    padding: 0.5rem 1.5rem;
                    border-radius: var(--radius-pill);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(255,255,255,0.1);
                }

                @media (max-width: 768px) {
                    .lightbox-overlay { padding: 1rem; }
                    .lightbox-close { top: 1rem; right: 1rem; }
                    .lightbox-caption { font-size: 1rem; }
                }
            `}</style>
        </section>
    );
};

export default Gallery;
