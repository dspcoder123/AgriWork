'use client';

import Navbar from '../components/Navbar';
import ContactHero from '../components/ContactHero';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Zap } from 'lucide-react';

export default function ContactPage() {
    return (
        <main>
            <Navbar />

            <ContactHero />

            <ContactSection />

            {/* Brand Value Reinforcement */}
            <section style={{ padding: '100px 10%', background: 'var(--bg-slate)' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    maxWidth: '1400px',
                    margin: '0 auto'
                }}>
                    {[
                        { icon: <ShieldCheck size={40} />, title: "Quality Guaranteed", desc: "Every hybrid variety is tested for success in our specialized monitoring fields." },
                        { icon: <Globe size={40} />, title: "Global Network", desc: "Supporting farmers across continents with market-specific genetic solutions." },
                        { icon: <Zap size={40} />, title: "Rapid Response", desc: "Our technical experts are available for field-level guidance and inquiries." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                            style={{ textAlign: 'center' }}
                        >
                            <div style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                                {item.icon}
                            </div>
                            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-charcoal)' }}>{item.title}</h4>
                            <p style={{ color: 'var(--text-light)', opacity: 0.8, lineHeight: 1.6 }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Interactive Location Element */}
            <section style={{
                height: '600px',
                width: '100%',
                background: 'var(--bg-white)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'url("https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=2000")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.1,
                    filter: 'grayscale(100%)'
                }} />

                <div style={{
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center',
                    background: 'rgba(255,255,255,0.8)',
                    padding: '4rem',
                    borderRadius: '24px',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    maxWidth: '600px',
                    boxShadow: '0 40px 80px rgba(0,0,0,0.1)'
                }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '4px' }}>Visit Us</span>
                    <h2 style={{ fontSize: '2.5rem', marginTop: '1rem', color: 'var(--text-charcoal)', fontFamily: 'var(--font-serif)' }}>Global Headquarters</h2>
                    <p style={{ marginTop: '1.5rem', color: 'var(--text-light)', lineHeight: 1.8 }}>
                        Experience our world-class seed processing technology and meet our breeding experts at our main facility in Hyderabad.
                    </p>
                    <button style={{
                        marginTop: '2.5rem',
                        padding: '1.25rem 2.5rem',
                        background: 'var(--primary)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '100px',
                        fontWeight: 700,
                        cursor: 'pointer'
                    }}>
                        GET DIRECTIONS
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
