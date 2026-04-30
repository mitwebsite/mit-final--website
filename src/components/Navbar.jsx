import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import { departmentsData } from '../data/departmentsData';
import { GraduationCap, Users, BookOpen, ChevronDown } from 'lucide-react';

const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Academics', href: '/academics' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Placements', href: '/placements' },
    { label: 'Campus Life', href: '/campus' },
    { label: 'Contact', href: '/contact' }
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null); // 'departments' or 'portal'
    const [isDeptMobileOpen, setIsDeptMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('mobile-nav-open');
        } else {
            document.body.style.overflow = 'unset';
            document.body.classList.remove('mobile-nav-open');
        }
    }, [mobileOpen]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('.nav-dropdown')) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const toggleDropdown = (e, name) => {
        e.preventDefault();
        e.stopPropagation();
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    return (
        <>
            <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
                {/* Logo */}
                <NavLink to="/" className="nav-logo" onClick={() => setMobileOpen(false)}>
                    <img
                        src={logoImg}
                        alt="MIT Indore Logo"
                        style={{ height: '44px', width: 'auto' }}
                    />
                </NavLink>

                {/* Desktop links */}
                <div className="nav-links">
                    {links.map((l, index) => (
                        <div key={l.label} style={{ display: 'contents' }}>
                            <NavLink
                                to={l.href}
                                className={({ isActive }) => isActive ? "active-link" : ""}
                                onClick={() => {
                                    setActiveDropdown(null);
                                    setMobileOpen(false);
                                }}
                            >
                                {l.label}
                            </NavLink>

                             {/* Insert Departments Dropdown between Academics (index 2) and Admissions (index 3) */}
                             {index === 2 && (
                                 <div className={`nav-dropdown ${activeDropdown === 'departments' ? 'active' : ''}`} style={{ position: 'relative', marginLeft: '0.5rem' }}>
                                     <button 
                                        className="nav-drop-btn" 
                                        onClick={(e) => toggleDropdown(e, 'departments')}
                                    >
                                         Departments
                                     </button>
                                     <div className="nav-drop-content dept-drop" style={{ 
                                         opacity: activeDropdown === 'departments' ? 1 : undefined, 
                                         visibility: activeDropdown === 'departments' ? 'visible' : undefined, 
                                         transform: activeDropdown === 'departments' ? 'translateX(-50%) translateY(0)' : undefined,
                                         width: '320px'
                                     }}>
                                        <div className="dept-list-simple">
                                            {Object.values(departmentsData).map((dept) => (
                                                <NavLink 
                                                    key={dept.id} 
                                                    to={`/department/${dept.id}`}
                                                    className="dept-item-simple"
                                                    onClick={() => setActiveDropdown(null)}
                                                >
                                                    <div className="dept-icon-mini">
                                                        {dept.icon}
                                                    </div>
                                                    <span className="dept-name-simple">{dept.title}</span>
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}


                    {/* Portal Dropdown */}
                    <div className={`nav-dropdown ${activeDropdown === 'portal' ? 'active' : ''}`} style={{ position: 'relative', marginLeft: '0.5rem' }}>
                        <button 
                            className="nav-drop-btn" 
                            onClick={(e) => toggleDropdown(e, 'portal')}
                        >
                            Portal
                        </button>
                        <div className="nav-drop-content" style={{ 
                            opacity: activeDropdown === 'portal' ? 1 : undefined, 
                            visibility: activeDropdown === 'portal' ? 'visible' : undefined, 
                            transform: activeDropdown === 'portal' ? 'translateY(0)' : undefined 
                        }}>
                            <a 
                                href="http://mit.thecollegeerp.com/academic/stlogin.php" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                onClick={() => setActiveDropdown(null)}
                            >
                                <span className="portal-icon-box"><GraduationCap size={18} color="var(--navy)" /></span> Student ERP
                            </a>
                            <a 
                                href="http://mit.thecollegeerp.com/academic/facultylogin.php" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                onClick={() => setActiveDropdown(null)}
                            >
                                <span className="portal-icon-box"><Users size={18} color="var(--navy)" /></span> Faculty ERP
                            </a>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="nav-cta">
                    <a 
                        href="https://forms.zohopublic.in/lakshya2025miti1/form/CollegeRegistrationForm/formperma/bW1CsY15bWQWYeLV6_DHEHzn6lVy8u5-7K8zOwu42Es" 
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Apply Now
                    </a>

                    {/* Hamburger */}
                    <div
                        className={`hamburger ${mobileOpen ? 'open' : ''}`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
                <div className="mobile-links">
                    {links.map((l, index) => (
                        <div key={l.label} style={{ display: 'contents' }}>
                            <NavLink
                                to={l.href}
                                onClick={() => setMobileOpen(false)}
                                className={({ isActive }) => isActive ? "active-link" : ""}
                            >
                                {l.label}
                            </NavLink>

                            {index === 2 && (
                                <div className="mobile-accordion">
                                    <button 
                                        className="mobile-accordion-btn"
                                        onClick={() => setIsDeptMobileOpen(!isDeptMobileOpen)}
                                    >
                                        <span>Departments</span>
                                        <ChevronDown size={18} style={{ transform: isDeptMobileOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s', opacity: 0.5 }} />
                                    </button>
                                    <div className={`mobile-accordion-content ${isDeptMobileOpen ? 'open' : ''}`}>
                                        {Object.values(departmentsData).map((dept) => (
                                            <NavLink 
                                                key={dept.id} 
                                                to={`/department/${dept.id}`}
                                                onClick={() => {
                                                    setMobileOpen(false);
                                                    setIsDeptMobileOpen(false);
                                                }}
                                                className="mobile-dept-link-simple"
                                            >
                                                {dept.title}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Portal Links */}
                <div className="mobile-section">
                    <p className="mobile-section-label">Portals</p>
                    <a href="http://mit.thecollegeerp.com/academic/stlogin.php" target="_blank" rel="noopener noreferrer"
                        className="mobile-portal-link">
                        <span className="mobile-icon-box" style={{ background: 'rgba(10,20,40,0.05)' }}><GraduationCap size={18} color="var(--navy)" /></span>
                        Student ERP
                    </a>
                    <a href="http://mit.thecollegeerp.com/academic/facultylogin.php" target="_blank" rel="noopener noreferrer"
                        className="mobile-portal-link">
                        <span className="mobile-icon-box" style={{ background: 'rgba(10,20,40,0.05)' }}><Users size={18} color="var(--navy)" /></span>
                        Faculty ERP
                    </a>
                </div>

                <div style={{ padding: '0 1rem' }}>
                    <a 
                        href="https://forms.zohopublic.in/lakshya2025miti1/form/CollegeRegistrationForm/formperma/bW1CsY15bWQWYeLV6_DHEHzn6lVy8u5-7K8zOwu42Es" 
                        className="btn btn-primary" 
                        onClick={() => setMobileOpen(false)}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Apply Now
                    </a>
                </div>
            </div>

            <style>{`
                .active-link { color: var(--navy) !important; font-weight: 700 !important; }
                .active-link::after { transform: scaleX(1) !important; }
                .mobile-nav .active-link { color: var(--crimson) !important; font-weight: 700; background: transparent; }
                
                /* Dropdown Styles */
                .nav-dropdown:hover .nav-drop-content {
                    opacity: 1;
                    transform: translateY(0);
                    visibility: visible;
                }
                .nav-drop-content {
                    position: absolute;
                    top: 100%;
                    right: 0;
                    background: #fff;
                    min-width: 200px;
                    border-radius: 12px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
                    padding: 0.5rem;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(10px);
                    transition: all 0.2s ease;
                    border: 1px solid rgba(0,0,0,0.05);
                }
                .nav-drop-content.dept-drop {
                    min-width: 320px;
                    left: 50%;
                    transform: translateX(-50%) translateY(10px);
                    padding: 0.75rem;
                }
                .nav-dropdown:hover .dept-drop {
                    transform: translateX(-50%) translateY(0);
                }
                .dept-list-simple {
                    display: flex;
                    flex-direction: column;
                    gap: 0.2rem;
                }
                .dept-item-simple {
                    display: flex !important;
                    align-items: center;
                    gap: 0.8rem;
                    padding: 0.6rem 0.85rem !important;
                    border-radius: 8px;
                    transition: all 0.2s ease;
                    text-decoration: none;
                }
                .dept-item-simple:hover {
                    background: rgba(198,40,40,0.05) !important;
                }
                .dept-icon-mini {
                    width: 28px;
                    height: 28px;
                    display: grid;
                    place-items: center;
                    background: #fff;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                    border-radius: 6px;
                    color: var(--crimson);
                    flex-shrink: 0;
                }
                .dept-icon-mini svg {
                    width: 14px;
                    height: 14px;
                }
                .dept-name-simple {
                    font-size: 0.88rem;
                    font-weight: 500;
                    color: var(--navy);
                }

                /* Mobile Accordion Clean-up (No Hoch Poch) */
                .mobile-accordion {
                    border: none;
                }
                .mobile-accordion-btn {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0.85rem 1rem;
                    background: transparent;
                    border: none;
                    color: var(--text-muted);
                    font-size: 1rem;
                    font-weight: 500;
                    cursor: pointer;
                    font-family: inherit;
                    border-radius: var(--radius-sm);
                    transition: all 0.3s ease;
                }
                .mobile-accordion-btn:hover {
                    background: rgba(0,0,0,0.04);
                    color: var(--navy);
                }
                .mobile-accordion-content {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease-out;
                    background: transparent; /* Remove background tint */
                    display: flex;
                    flex-direction: column;
                }
                .mobile-accordion-content.open {
                    max-height: 1000px;
                }
                .mobile-dept-link-simple {
                    padding: 0.7rem 2.5rem; /* Tighter padding */
                    font-size: 0.95rem;
                    color: var(--text-muted);
                    text-decoration: none;
                    transition: color 0.2s;
                    border: none !important;
                }
                .mobile-dept-link-simple:active {
                    color: var(--crimson);
                    background: rgba(0,0,0,0.02);
                }

                .portal-icon-box {
                    background: rgba(0,0,0,0.03); 
                    width: 32px; height: 32px; 
                    border-radius: 8px; 
                    display: grid; 
                    place-items: center;
                }
                .mobile-section { 
                    padding: 0.5rem 1rem 0; /* Reduced top padding */
                    border-top: none; /* Removed border for seamless look */
                }
                .mobile-section-label { 
                    font-size: 0.72rem; 
                    text-transform: uppercase; 
                    color: var(--crimson); /* Brand color for visibility */
                    margin: 1.5rem 0 0.75rem; 
                    font-weight: 700; 
                    letter-spacing: 2px; 
                    opacity: 0.8;
                }
                .mobile-portal-link {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    color: var(--navy);
                    text-decoration: none;
                    padding: 0.75rem 0; /* Consistent padding */
                    font-weight: 500;
                    font-size: 1.05rem;
                }
                .mobile-icon-box {
                    width: 32px;
                    height: 32px;
                    border-radius: 8px;
                    display: grid;
                    place-items: center;
                    flex-shrink: 0;
                }
            `}</style>
        </>
    );
};

export default Navbar;
