import React from 'react';
import { Shield, AlertTriangle, Scale, Users } from 'lucide-react';
import campus1 from '../assets/campus1.webp';
import committeeImg from '../assets/anti-ragging-committee.jpg';

const AntiRagging = () => {
    return (
        <div className="page-wrapper" style={{ paddingTop: '80px' }}>
            {/* Hero Header */}
            <div style={{
                position: 'relative',
                background: 'var(--navy)',
                color: '#fff',
                padding: 'clamp(4rem, 10vw, 8rem) 5%',
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
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
                    <h1 className="section-title section-title-white" style={{ marginBottom: '1rem', fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}>Anti <span>Ragging</span></h1>
                    <p className="section-sub section-sub-white" style={{ margin: '0 auto', opacity: 0.9 }}>
                        Ragging is a criminal offence. Malwa Institute of Technology ensures a congenial and welcoming environment for all students.
                    </p>
                </div>
            </div>

            <section className="section" style={{ background: '#f8fafc', padding: 'clamp(3rem, 8vw, 6rem) 0' }}>
                <div className="container">
                    
                    <div className="card" style={{ padding: 'clamp(1.5rem, 5vw, 3rem)', marginBottom: '2.5rem', borderLeft: '4px solid var(--crimson)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                            <Shield size={32} color="var(--crimson)" style={{ flexShrink: 0 }} />
                            <h2 style={{ color: 'var(--navy)', margin: 0, fontSize: 'clamp(1.3rem, 4vw, 2rem)', fontWeight: 700, lineHeight: 1.2 }}>Prevention and Prohibition of Ragging</h2>
                        </div>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)' }}>
                            Ragging is totally prohibited in the campus of Malwa Institute of Technology, Indore. Anyone found guilty of ragging and / or abetting ragging whether actively or passively, or being a part of conspiracy to promote ragging, is liable to be punished in accordance with UGC Regulations 2009 as well as under the provisions of any penal law for the time being in force.
                        </p>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginTop: '1.5rem', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)' }}>
                            In view of the directions of the Hon'ble Supreme Court to prohibit, prevent and eliminate the scourge of ragging... in all higher education institutions in the country, and thereby, to provide for the healthy development, physically and psychologically, of all students, the All India Council for Technical Education (AICTE) and University Grants Commission (UGC) bring forth appropriate Regulations.
                        </p>
                    </div>

                    <div style={{ 
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', 
                        gap: '2.5rem',
                        alignItems: 'stretch'
                    }}>
                        
                        {/* What is Ragging */}
                        <div className="card" style={{ padding: 'clamp(1.5rem, 5vw, 3rem)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(234,179,8,0.1)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                                    <AlertTriangle size={24} color="#eab308" />
                                </div>
                                <h3 style={{ color: 'var(--navy)', margin: 0, fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', fontWeight: 700 }}>What is Ragging?</h3>
                            </div>
                            <ul style={{ color: 'var(--text-muted)', lineHeight: '1.7', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1.2rem', listStyleType: 'disc', fontSize: 'clamp(0.88rem, 2vw, 1rem)' }}>
                                <li>Any conduct by any student whether by words spoken or written or by act which has the effect of teasing, treating or handling with rudeness a fresher or any other student.</li>
                                <li>Indulging in rowdy or indiscipline activities by any student which causes or is likely to cause annoyance, hardship, physical or psychological harm.</li>
                                <li>Asking any student to do any act which he/she will not in the ordinary course do and which has the effect of causing or generating a sense of shame.</li>
                                <li>Any act by senior student that prevents, disrupts or disturbs the regular academic activity of any other student or a fresher.</li>
                                <li>Exploiting the service of a fresher or any other student for completing the academic tasks assigned to an individual or a group of students.</li>
                                <li>Any act of financial extortion or forceful expenditure burden put on a fresher or any other student by students.</li>
                                <li>Any act of physical abuse including all variants of it: sexual abuse, homosexual assaults, stripping, forcing obscene and lewd acts/ gestures, causing bodily harm.</li>
                            </ul>
                        </div>

                        {/* Punishments */}
                        <div className="card" style={{ padding: 'clamp(1.5rem, 5vw, 3rem)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(198,40,40,0.1)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                                    <Scale size={24} color="var(--crimson)" />
                                </div>
                                <h3 style={{ color: 'var(--navy)', margin: 0, fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', fontWeight: 700 }}>Punishments</h3>
                            </div>
                            <ul style={{ color: 'var(--text-muted)', lineHeight: '1.7', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1.1rem', listStyleType: 'disc', fontSize: 'clamp(0.88rem, 2vw, 1rem)' }}>
                                <li>Suspension from attending classes and academic privileges.</li>
                                <li>Withholding/withdrawing scholarship/fellowship and other benefits.</li>
                                <li>Debarring from appearing in any test/examination or other evaluation process. Withholding results.</li>
                                <li>Debarring from representing the University/Institution in any regional, national or international meet, tournament, youth festival etc.</li>
                                <li>Suspension/Expulsion from the hostel.</li>
                                <li>Cancellation of admission.</li>
                                <li>Rustication from the Institution for period ranging from one to four semesters.</li>
                                <li>Expulsion from the University/Institution and consequent debarring from admission to any other institution for a specified period.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* Committee Section */}
            <section className="section" style={{ padding: 'clamp(4rem, 10vw, 8rem) 0' }}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div className="section-chip" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
                        <span className="chip-dot"></span>Official Committee
                    </div>
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>Anti-Ragging <span>Committee Members</span></h2>
                    
                    <div className="card" style={{ padding: 'clamp(1.5rem, 5vw, 3rem)', background: 'var(--navy)', color: 'white', position: 'relative', overflow: 'hidden', marginBottom: '3rem' }}>
                        <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }} />
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', position: 'relative' }}>
                            <Users size={24} color="#fff" />
                            <h3 style={{ color: 'white', margin: 0, fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: 600 }}>Committee Role & Responsibility</h3>
                        </div>
                        <p style={{ lineHeight: '1.7', opacity: 0.9, fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', margin: 0, position: 'relative' }}>
                            Malwa Institute of Technology ensures that a congenial and welcoming environment is given to the freshers. The Anti-Ragging Committee is constituted to prevent any such activities. Students are required to report to the following committee members immediately in case of any related issues.
                        </p>
                    </div>

                    <div className="card" style={{ padding: 'clamp(0.5rem, 2vw, 1rem)', overflow: 'hidden' }}>
                        <img 
                            src={committeeImg} 
                            alt="Anti-Ragging Committee" 
                            style={{ 
                                width: '100%', 
                                height: 'auto', 
                                borderRadius: '8px', 
                                display: 'block',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                            }} 
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AntiRagging;
