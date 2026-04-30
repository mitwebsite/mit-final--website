import React from 'react';
import { ClipboardEdit, Rocket, ArrowRight, ExternalLink } from 'lucide-react';

const ZOHO_LINK = "https://forms.zohopublic.in/lakshya2025miti1/form/CollegeRegistrationForm/formperma/bW1CsY15bWQWYeLV6_DHEHzn6lVy8u5-7K8zOwu42Es";

const EnquiryForm = ({ variant = 'full' }) => {
    if (variant === 'mini') {
        return (
            <div className="enquiry-mini-action" style={{
                background: 'var(--white)',
                padding: '2.5rem',
                borderRadius: '16px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                border: '1px solid var(--border-light)',
                textAlign: 'center'
            }}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ color: 'var(--navy)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Ready to Join MIT?</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Secure your future with our quick online registration.</p>
                </div>
                
                <a
                    href={ZOHO_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{
                        width: '100%',
                        justifyContent: 'center',
                        background: 'var(--navy)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '1.2rem',
                        fontSize: '1rem',
                        fontWeight: 600,
                        borderRadius: '12px',
                        transition: 'all 0.3s ease'
                    }}
                >
                    <ClipboardEdit size={20} /> Register Online Now
                </a>
                
                <p style={{ marginTop: '1.2rem', fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                    <ExternalLink size={14} /> Opens in official Zoho portal
                </p>
                
                <style>{`
                    .enquiry-mini-action a:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
                        background: #1a2a44 !important;
                    }
                `}</style>
            </div>
        );
    }

    return (
        <div className="enquiry-full-action" style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{
                background: 'var(--white)',
                padding: '2.5rem',
                borderRadius: '20px',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 15px 45px rgba(0,0,0,0.05)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0, right: 0,
                    width: '150px', height: '150px',
                    background: 'radial-gradient(circle, rgba(198,40,40,0.05) 0%, transparent 70%)',
                    zIndex: 0
                }} />

                <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{
                            width: '50px', height: '50px',
                            background: 'rgba(198,40,40,0.1)',
                            borderRadius: '12px',
                            display: 'grid', placeItems: 'center',
                            color: 'var(--crimson)'
                        }}>
                            <Rocket size={24} />
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--navy)', fontSize: '1.4rem', margin: 0 }}>Official Admission Portal</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>Academic Session 2026-27</p>
                        </div>
                    </div>

                    <p style={{ color: '#444', lineHeight: 1.6, marginBottom: '2rem' }}>
                        For a streamlined admission experience, please complete your registration on our official Zoho portal. 
                        Our admissions team will review your application and contact you for the next steps.
                    </p>

                    <a
                        href={ZOHO_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="registration-card-large"
                        style={{
                            background: 'linear-gradient(135deg, var(--navy) 0%, #1a2a44 100%)',
                            padding: '1.5rem 2rem',
                            borderRadius: '16px',
                            color: 'white',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                    >
                        <div>
                            <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8, marginBottom: '0.4rem' }}>Application Form</div>
                            <div style={{ fontSize: '1.3rem', fontWeight: 700 }}>Proceed to Register</div>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.15)', padding: '0.8rem', borderRadius: '50%', display: 'grid', placeItems: 'center' }}>
                            <ArrowRight size={24} />
                        </div>
                    </a>

                    <div style={{
                        marginTop: '2rem',
                        padding: '1.25rem',
                        background: '#f8fafc',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        border: '1px solid #e2e8f0'
                    }}>
                        <div style={{ color: 'var(--crimson)' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
                            </svg>
                        </div>
                        <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0, lineHeight: 1.4 }}>
                            <strong>Note:</strong> This link redirects to our secure external registration system managed by Zoho.
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
                .registration-card-large:hover {
                    transform: translateY(-5px) scale(1.01);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.25);
                }
                
                @media (max-width: 540px) {
                    .enquiry-full-action {
                        gap: 1rem;
                    }
                    .enquiry-full-action > div {
                        padding: 1.5rem !important;
                    }
                    .registration-card-large {
                        padding: 1.25rem !important;
                        flex-direction: column;
                        align-items: flex-start !important;
                        gap: 1rem;
                        text-align: left;
                    }
                    .registration-card-large > div:last-child {
                        align-self: flex-end;
                    }
                    .enquiry-full-action h3 {
                        font-size: 1.2rem !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default EnquiryForm;
