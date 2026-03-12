'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{
            background: '#0a140e',
            color: '#fff',
            paddingTop: '100px',
            position: 'relative',
            overflow: 'hidden',
            fontFamily: 'var(--font-sans)'
        }}>
            {/* Top Accent Line */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                background: 'linear-gradient(90deg, transparent, var(--accent), transparent)'
            }} />

            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '4rem',
                    paddingBottom: '80px'
                }}>

                    {/* Brand Identity Column */}
                    <div style={{ gridColumn: 'span 1.5' }}>
                        <Link href="/">
                            <img
                                src="/logo.png"
                                alt="Agriwork Logo"
                                style={{ height: '100px', marginBottom: '1.5rem', filter: 'brightness(0) invert(1)' }}
                            />
                        </Link>
                        <p style={{
                            color: 'rgba(255,255,255,0.6)',
                            fontSize: '1.05rem',
                            lineHeight: '1.8',
                            maxWidth: '400px',
                            marginBottom: '2rem'
                        }}>
                            A JPR Sons Company. Spreading Prosperity Everywhere. Leading the transition toward progressive farming through world-class hybrid seed technology.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {['facebook', 'instagram', 'linkedin', 'twitter'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    style={{
                                        width: '45px',
                                        height: '45px',
                                        borderRadius: '12px',
                                        background: 'rgba(255,255,255,0.05)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s ease',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}
                                    className="social-pill"
                                >
                                    {social === 'facebook' && <Facebook size={18} />}
                                    {social === 'instagram' && <Instagram size={18} />}
                                    {social === 'linkedin' && <Linkedin size={18} />}
                                    {social === 'twitter' && <Twitter size={18} />}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Explore Column */}
                    <div>
                        <h4 style={{
                            color: '#fff',
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            marginBottom: '2rem',
                            fontWeight: 700
                        }}>
                            Explore
                        </h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {['About Agriwork', 'Hybrid Portfolio', 'Market Segments', 'Contact Specialist'].map((link) => (
                                <li key={link}>
                                    <Link
                                        href={link.includes('Contact') ? '/contact' : link.includes('Portfolio') ? '/products' : link.includes('About') ? '/about' : '/'}
                                        style={{
                                            color: 'rgba(255,255,255,0.5)',
                                            textDecoration: 'none',
                                            fontSize: '1rem',
                                            transition: 'color 0.3s ease',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px'
                                        }}
                                        className="footer-nav-link"
                                    >
                                        <div className="dot" style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent)', opacity: 0 }} />
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Identity Column */}
                    <div>
                        <h4 style={{
                            color: '#fff',
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            marginBottom: '2rem',
                            fontWeight: 700
                        }}>
                            Contact Identity
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <MapPin size={20} color="var(--accent)" style={{ flexShrink: 0 }} />
                                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                    H.No. 4-5-86, Srinivasa Homes Apts,<br /> Door No. A-401, Hyderabad, 500325
                                </span>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <Phone size={20} color="var(--accent)" />
                                <span style={{ color: '#fff', fontWeight: 600 }}>+91 97072 03337</span>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <Mail size={20} color="var(--accent)" />
                                <span style={{ color: 'rgba(255,255,255,0.8)' }}>agriworkinc@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    padding: '40px 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '2rem'
                }}>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>
                        &copy; {currentYear} Agriwork Incorporate. All rights reserved. <span style={{ color: 'rgba(255,255,255,0.2)', marginLeft: '1rem' }}>Step towards Progressive Farming.</span>
                    </p>
                    <div style={{ display: 'flex', gap: '2.5rem' }}>
                        {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item) => (
                            <a key={item} href="#" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.3s ease' }} className="bottom-link">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                bottom: '-20%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80%',
                height: '300px',
                background: 'radial-gradient(ellipse at center, rgba(201, 168, 76, 0.08) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />

            <style jsx>{`
                .social-pill:hover {
                    background: var(--accent) !important;
                    color: #000 !important;
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(201, 168, 76, 0.2);
                }
                .footer-nav-link:hover {
                    color: #fff !important;
                    transform: translateX(10px);
                }
                .footer-nav-link:hover .dot {
                    opacity: 1 !important;
                }
                .bottom-link:hover {
                    color: var(--accent) !important;
                }
            `}</style>
        </footer>
    );
}
