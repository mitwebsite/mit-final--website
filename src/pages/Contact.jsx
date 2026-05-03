import MapEmbed from '../components/MapEmbed';
import EnquiryForm from '../components/EnquiryForm';
import SEO from '../components/SEO';
import { MapPin, Phone, Mail, Clock, Printer, Smartphone, PhoneCall } from 'lucide-react';

const Contact = () => {
    return (
        <div className="page-wrapper" style={{ paddingTop: '100px', paddingBottom: '4rem' }}>
            <SEO 
                title="Contact Us"
                description="Have questions? Get in touch with MIT Indore for admissions, academic queries, or general information. Visit our campus or contact us online."
                keywords="Contact MIT Indore, Admissions Helpline, College Address Indore, MIT Email, Contact Engineering College"
            />
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div className="section-chip"><span className="chip-dot"></span>Get in Touch</div>
                    <h1 className="section-title" style={{ marginBottom: '1rem' }}>Contact <span>MIT Indore</span></h1>
                    <p className="section-sub" style={{ margin: '0 auto' }}>
                        We'd love to hear from you. Visit our campus, call us, or register online through our official portal.
                    </p>
                </div>

                {/* Info & Map Grid */}
                <div className="contact-grid" style={{ gap: '3rem', marginBottom: '5rem' }}>

                    {/* Left: Contact Info */}
                    <div>
                        <div className="info-card">
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '1.5rem' }}>Contact Details</h3>

                            <div className="contact-item">
                                <div className="c-icon"><MapPin size={20} /></div>
                                <div>
                                    <h5>Campus Address</h5>
                                    <p>Malwa Institute of Technology<br />Indore-Dewas Bypass Road, Gram Nipaniya, Indore (M.P.) - 452016</p>
                                </div>
                            </div>

                             <div className="contact-item">
                                 <div className="c-icon"><Phone size={20} /></div>
                                 <div>
                                     <h5>Phone Numbers</h5>
                                     <p>+91 95227 22722<br />+91 81090 10965</p>
                                 </div>
                             </div>

                             <div className="contact-item">
                                 <div className="c-icon"><PhoneCall size={20} /></div>
                                 <div>
                                     <h5>Telephone</h5>
                                     <p>0731-2810001-8</p>
                                 </div>
                             </div>

                             <div className="contact-item">
                                 <div className="c-icon"><Printer size={20} /></div>
                                 <div>
                                     <h5>Fax Number</h5>
                                     <p>0731-2810005</p>
                                 </div>
                             </div>

                            <div className="contact-item">
                                <div className="c-icon"><Mail size={20} /></div>
                                <div>
                                    <h5>Email Address</h5>
                                    <p>admission@mitindore.co.in<br />info@mitindore.co.in</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="c-icon"><Clock size={20} /></div>
                                <div>
                                    <h5>Working Hours</h5>
                                    <p>Mon - Sat: 9:00 AM - 5:00 PM<br />Sun: Closed</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right: Map */}
                    <div style={{ minHeight: '450px' }}>
                        <MapEmbed />
                    </div>
                </div>

                {/* Full Enquiry Form */}
                <div className="portal-container" style={{ background: '#f8fafc', borderRadius: '24px' }}>
                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>Official <span>Admission Portal</span></h2>
                        <EnquiryForm variant="full" />
                    </div>
                </div>

            </div>

            <style>{`
        .info-card {
          background: #fff;
          padding: 2.5rem;
          border-radius: 16px;
          border: 1px solid var(--border-light);
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
        }
        .contact-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .contact-item:last-child { margin-bottom: 0; }
        .c-icon {
          width: 44px; height: 44px;
          background: rgba(198,40,40,0.1);
          color: var(--crimson);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          flex-shrink: 0;
        }
        .contact-item h5 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 0.3rem;
        }
        .contact-item p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.5;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
        }
        @media (max-width: 900px) {
          .info-card { padding: 1.5rem; }
          .contact-grid { grid-template-columns: 1fr; }
        }
        .portal-container { padding: 4rem 5%; }
        @media (max-width: 540px) {
          .portal-container { padding: 2rem 1.25rem; border-radius: 16px !important; }
        }
      `}</style>
        </div>
    );
};

export default Contact;
