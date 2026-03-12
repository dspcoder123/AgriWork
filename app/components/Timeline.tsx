'use client';

import { motion } from 'framer-motion';

const events = [
    { year: 'Early 90s', title: 'Foundational Expertise', desc: 'Our founders began their journey in the global seed industry, developing deep-rooted field knowledge and breeding expertise.' },
    { year: '2018', title: 'Agriwork Incorporate', desc: 'The brand was officially established to bridge the gap between R&D and progressive farming.' },
    { year: '2020', title: 'Research Milestones', desc: 'Successfully developed a diverse portfolio of market-specific hybrid seeds for varying climates.' },
    { year: '2022', title: 'Advanced Quality Control', desc: 'Implemented state-of-the-art process control systems and high-tech seed processing protocols.' },
    { year: 'Present', title: 'Global Prosperity', desc: 'Operating as a trusted partner to thousands of farmers worldwide, spreading prosperity through pure genetics.' }
];

export default function Timeline() {
    return (
        <section className="tl-section" style={{ background: 'var(--bg-white)', padding: '150px 10%', position: 'relative' }}>
            <div className="tl-header" style={{ textAlign: 'center', marginBottom: '8rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '4px' }}>Our Progress</span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', marginTop: '1rem', color: 'var(--text-charcoal)', fontFamily: 'var(--font-serif)' }}>The Legacy Timeline</h2>
                <div className="title-underline" style={{ margin: '1.5rem auto' }} />
                <p style={{ opacity: 0.7, maxWidth: '600px', margin: '0 auto', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
                    Decades of experience concentrated into a relentless pursuit of agricultural quality.
                </p>
            </div>

            {/* ── DESKTOP TIMELINE (centre line, alternating) ── */}
            <div className="tl-desktop" style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
                {/* Vertical Line */}
                <div style={{
                    position: 'absolute',
                    left: '50%',
                    top: 0,
                    bottom: 0,
                    width: '2px',
                    background: 'linear-gradient(to bottom, transparent, var(--accent) 5%, var(--accent) 95%, transparent)',
                    transform: 'translateX(-50%)',
                    opacity: 0.3
                }} />

                {events.map((event, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true, margin: '-100px' }}
                        style={{
                            display: 'flex',
                            justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start',
                            alignItems: 'center',
                            width: '100%',
                            marginBottom: '6rem',
                            position: 'relative'
                        }}
                    >
                        {/* Node */}
                        <div style={{
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '20px',
                            height: '20px',
                            background: '#fff',
                            border: '4px solid var(--primary)',
                            borderRadius: '50%',
                            zIndex: 10,
                            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
                        }} />

                        {/* Content */}
                        <div style={{
                            width: '45%',
                            textAlign: i % 2 === 0 ? 'right' : 'left',
                            padding: '0 2rem'
                        }}>
                            <span style={{
                                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                                fontWeight: 800,
                                color: 'var(--primary)',
                                fontFamily: 'var(--font-serif)',
                                display: 'block',
                                marginBottom: '0.5rem',
                                opacity: 0.9
                            }}>
                                {event.year}
                            </span>
                            <h4 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-charcoal)' }}>
                                {event.title}
                            </h4>
                            <p style={{ color: 'var(--text-light)', lineHeight: 1.8, fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)', opacity: 0.8 }}>
                                {event.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* ── MOBILE TIMELINE (left line, stacked) ── */}
            <div className="tl-mobile" style={{ display: 'none', maxWidth: '600px', margin: '0 auto', position: 'relative', paddingLeft: '2rem' }}>
                {/* Left vertical line */}
                <div style={{
                    position: 'absolute',
                    left: '8px',
                    top: 0,
                    bottom: 0,
                    width: '2px',
                    background: 'linear-gradient(to bottom, transparent, var(--accent) 5%, var(--accent) 95%, transparent)',
                    opacity: 0.3
                }} />

                {events.map((event, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true, margin: '-60px' }}
                        style={{ position: 'relative', marginBottom: '3rem', paddingLeft: '2rem' }}
                    >
                        {/* Node */}
                        <div style={{
                            position: 'absolute',
                            left: '-1.65rem',
                            top: '0.6rem',
                            width: '16px',
                            height: '16px',
                            background: '#fff',
                            border: '3px solid var(--primary)',
                            borderRadius: '50%',
                            zIndex: 10,
                            boxShadow: '0 0 12px rgba(0,0,0,0.1)'
                        }} />

                        <span style={{
                            fontSize: '1.6rem',
                            fontWeight: 800,
                            color: 'var(--primary)',
                            fontFamily: 'var(--font-serif)',
                            display: 'block',
                            marginBottom: '0.4rem',
                            opacity: 0.9
                        }}>
                            {event.year}
                        </span>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--text-charcoal)' }}>
                            {event.title}
                        </h4>
                        <p style={{ color: 'var(--text-light)', lineHeight: 1.8, fontSize: '0.95rem', opacity: 0.8 }}>
                            {event.desc}
                        </p>
                    </motion.div>
                ))}
            </div>

            <style>{`
                /* ── TABLET (≤1024px) ── */
                @media (max-width: 1024px) {
                    .tl-section {
                        padding: 100px 6% !important;
                    }
                    .tl-header {
                        margin-bottom: 5rem !important;
                    }
                }

                /* ── MOBILE (≤768px) ── */
                @media (max-width: 768px) {
                    .tl-section {
                        padding: 70px 5% !important;
                    }
                    .tl-header {
                        margin-bottom: 3.5rem !important;
                    }
                    .tl-desktop {
                        display: none !important;
                    }
                    .tl-mobile {
                        display: block !important;
                    }
                }

                /* ── SMALL MOBILE (≤480px) ── */
                @media (max-width: 480px) {
                    .tl-section {
                        padding: 50px 4% !important;
                    }
                }
            `}</style>
        </section>
    );
}