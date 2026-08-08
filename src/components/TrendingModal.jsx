import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { X, Flame, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

import trendingMahak from '../assets/trending_mahak.jpg';
import trendingAman from '../assets/trending_aman.jpg';
import trendingVishwas from '../assets/trending_vishwas.jpg';

const TRENDING_ITEMS = [
    {
        id: 'vishwas-ambassador',
        tag: 'GOOGLE GEMINI AMBASSADOR 2026',
        title: 'Vishwas Kumbhkar Selected as Google Gemini Ambassador',
        image: trendingVishwas,
        alt: 'Vishwas Kumbhkar Google Gemini Student Ambassador 2026 Poster',
        link: '/campus',
    },
    {
        id: 'mahak-tcs',
        tag: 'TCS PLACEMENT SELECTION',
        title: 'Mahak Sharma Placed in TCS (Tata Consultancy Services)',
        image: trendingMahak,
        alt: 'Mahak Sharma TCS Placement Poster',
        link: '/placements',
    },
    {
        id: 'aman-tcs',
        tag: 'TCS PLACEMENT SELECTION',
        title: 'Aman Rai Placed in TCS (Tata Consultancy Services)',
        image: trendingAman,
        alt: 'Aman Rai TCS Placement Poster',
        link: '/placements',
    }
];

const TrendingModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 400);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    const nextSlide = () => {
        setActiveTab((prev) => (prev + 1) % TRENDING_ITEMS.length);
    };

    const prevSlide = () => {
        setActiveTab((prev) => (prev - 1 + TRENDING_ITEMS.length) % TRENDING_ITEMS.length);
    };

    if (!isOpen) return null;

    const currentItem = TRENDING_ITEMS[activeTab];

    return (
        <div className="trending-modal-overlay" onClick={handleClose}>
            <div 
                className="trending-modal-card image-poster-modal" 
                onClick={(e) => e.stopPropagation()} 
                role="dialog"
                aria-modal="true"
                aria-labelledby="trending-modal-title"
            >
                {/* Floating Top-Right Close Button */}
                <button 
                    className="trending-close-btn poster-close-btn" 
                    onClick={handleClose}
                    aria-label="Close Pop-up"
                >
                    <X size={22} />
                </button>

                {/* Top Banner Header */}
                <div className="poster-modal-header">
                    <div className="trending-pill">
                        <Flame className="trending-flame-icon" size={18} />
                        <span>TRENDING NOW AT MIT INDORE</span>
                    </div>
                </div>

                {/* Image Poster Content Container */}
                <div className="poster-image-wrapper">
                    <img 
                        src={currentItem.image} 
                        alt={currentItem.alt} 
                        className="poster-full-img"
                    />

                    {/* Left/Right Arrow Overlays */}
                    <button className="poster-nav-btn prev-btn" onClick={prevSlide} aria-label="Previous Poster">
                        <ChevronLeft size={24} />
                    </button>
                    <button className="poster-nav-btn next-btn" onClick={nextSlide} aria-label="Next Poster">
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Action & Footer Bar */}
                <div className="poster-modal-footer">
                    <div className="trending-dots">
                        {TRENDING_ITEMS.map((item, idx) => (
                            <button
                                key={item.id}
                                className={`trending-dot ${idx === activeTab ? 'active' : ''}`}
                                onClick={() => setActiveTab(idx)}
                                aria-label={`View trending item ${idx + 1}`}
                            />
                        ))}
                    </div>

                    <div className="poster-footer-actions">
                        <NavLink 
                            to={currentItem.link} 
                            className="trending-primary-btn poster-btn"
                            onClick={handleClose}
                        >
                            View Placements & News <ArrowRight size={16} />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingModal;
