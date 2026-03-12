'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, ExternalLink } from 'lucide-react';

export default function ContactSection() {
    return (
        <section style={{ padding: '120px 10%', background: 'var(--bg-white)', position: 'relative' }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
                gap: '8rem',
                maxWidth: '1400px',
                margin: '0 auto',
                alignItems: 'start'
            }}>
                {/* Form Side */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    style={{ background: 'var(--bg-sage)', padding: '5rem', borderRadius: '32px', border: '1px solid rgba(27, 77, 46, 0.05)' }}
                >
                    <div style={{ marginBottom: '3rem' }}>
                        <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '4px' }}>Direct Link</span>
                        <h2 style={{ fontSize: '3rem', marginTop: '1rem', color: 'var(--text-charcoal)', fontFamily: 'var(--font-serif)', lineHeight: 1.1 }}>Send us a <br />Message</h2>
                    </div>

                    <form style={{ display: 'grid', gap: '2.5rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div className="input-group">
                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Full Identity</label>
                                <input
                                    type="text"
                                    placeholder="Jane Doe"
                                    style={{ width: '100%', background: '#fff', border: '1px solid rgba(0,0,0,0.05)', padding: '1.25rem 1.5rem', borderRadius: '12px', fontSize: '1rem', outline: 'none', transition: 'all 0.3s ease' }}
                                    className="contact-field"
                                />
                            </div>
                            <div className="input-group">
                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Email Address</label>
                                <input
                                    type="email"
                                    placeholder="jane@company.com"
                                    style={{ width: '100%', background: '#fff', border: '1px solid rgba(0,0,0,0.05)', padding: '1.25rem 1.5rem', borderRadius: '12px', fontSize: '1rem', outline: 'none', transition: 'all 0.3s ease' }}
                                    className="contact-field"
                                />
                            </div>
                        </div>

                        <div className="input-group">
                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Inquiry Segment</label>
                            <select
                                style={{ width: '100%', background: '#fff', border: '1px solid rgba(0,0,0,0.05)', padding: '1.25rem 1.5rem', borderRadius: '12px', fontSize: '1rem', outline: 'none', transition: 'all 0.3s ease', appearance: 'none' }}
                                className="contact-field"
                            >
                                <option>Commercial Seed Inquiry</option>
                                <option>Technical Support</option>
                                <option>Breeding Collaboration</option>
                                <option>General Information</option>
                            </select>
                        </div>

                        <div className="input-group">
                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Detailed Message</label>
                            <textarea
                                rows={5}
                                placeholder="How can we assist your farming journey?"
                                style={{ width: '100%', background: '#fff', border: '1px solid rgba(0,0,0,0.05)', padding: '1.25rem 1.5rem', borderRadius: '12px', fontSize: '1rem', outline: 'none', transition: 'all 0.3s ease', resize: 'none' }}
                                className="contact-field"
                            />
                        </div>

                        <button
                            type="submit"
                            style={{
                                background: 'var(--primary)',
                                color: '#fff',
                                border: 'none',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                fontWeight: 700,
                                fontSize: '1rem',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '1rem',
                                transition: 'all 0.3s ease'
                            }}
                            className="submit-btn"
                        >
                            INITIATE CONTACT <ArrowRight size={20} />
                        </button>
                    </form>
                </motion.div>

                {/* Info Side */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                >
                    <div style={{ marginBottom: '5rem' }}>
                        <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '4px' }}>Headquarters</span>
                        <h2 style={{ fontSize: '3.5rem', marginTop: '1rem', color: 'var(--text-charcoal)', fontFamily: 'var(--font-serif)', lineHeight: 1.1 }}>Reach out to <br />our experts.</h2>
                    </div>

                    <div style={{ display: 'grid', gap: '4rem' }}>
                        <div style={{ display: 'flex', gap: '2rem' }}>
                            <div style={{ width: '70px', height: '70px', background: 'var(--bg-sage)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                                <MapPin size={32} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-charcoal)' }}>Regional Presence</h4>
                                <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', lineHeight: 1.7, opacity: 0.8 }}>
                                    H.No. 4-5-86, Srinivasa Homes Apts, Door No. A-401, 4th Floor, Bandari Layout, Hyderabad – 500325, Telangana
                                </p>
                                <a href="#" style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
                                    View on Maps <ExternalLink size={16} />
                                </a>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '2rem' }}>
                            <div style={{ width: '70px', height: '70px', background: 'var(--bg-sage)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                                <Phone size={32} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-charcoal)' }}>Communication Line</h4>
                                <p style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--primary)' }}>+91 97072 03337</p>
                                <p style={{ fontSize: '1rem', color: 'var(--text-light)', marginTop: '0.5rem', opacity: 0.7 }}>Mon — Fri, 9:00 AM to 6:00 PM IST</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '2rem' }}>
                            <div style={{ width: '70px', height: '70px', background: 'var(--bg-sage)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                                <Mail size={32} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-charcoal)' }}>Digital Desk</h4>
                                <p style={{ fontSize: '1.1rem', color: 'var(--primary)', fontWeight: 600 }}>agriworkinc@gmail.com</p>
                                <p style={{ fontSize: '1rem', color: 'var(--text-light)', marginTop: '0.5rem', opacity: 0.7 }}>General Inquiries & Collaborations</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
                .contact-field:focus {
                    border-color: var(--accent) !important;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.03);
                }
                .submit-btn:hover {
                    background: #0d2a1a !important;
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(27, 77, 46, 0.2);
                }
                .submit-btn:active {
                    transform: scale(0.98);
                }
            `}</style>
        </section>
    );
}
