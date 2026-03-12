'use client';

import { motion } from 'framer-motion';

export default function AboutHero() {
    return (
        <section
            style={{
                minHeight: '85vh',
                paddingTop: '100px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                textAlign: 'center',
                background: '#0a140e',
                overflow: 'hidden'
            }}
        >
            {/* Background Image with Overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url("https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=2000")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.4
                }}
            />

            {/* Gradient Overlay */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(10, 20, 14, 0.8), transparent 50%, rgba(10, 20, 14, 0.8))',
                    zIndex: 1
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="about-hero-content"
                style={{ position: 'relative', zIndex: 2, padding: '0 10%' }}
            >
                <div style={{
                    display: 'inline-block',
                    padding: '0.5rem 1.5rem',
                    background: 'rgba(212, 175, 55, 0.1)',
                    borderRadius: '100px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    marginBottom: '2rem',
                }}>
                    <span style={{
                        textTransform: 'uppercase',
                        letterSpacing: '3px',
                        fontSize: '0.8rem',
                        color: 'var(--accent)',
                        fontWeight: 700,
                    }}>
                        Established 2018
                    </span>
                </div>

                <h1
                    className="about-hero-heading"
                    style={{
                        fontSize: 'clamp(2.5rem, 8vw, 6.5rem)',
                        margin: '0 0 1.5rem',
                        fontFamily: 'var(--font-serif)',
                        lineHeight: 1,
                        letterSpacing: '-2px'
                    }}
                >
                    A Legacy of <br />
                    <span style={{ color: 'var(--accent)' }}>Prosperity.</span>
                </h1>

                <p
                    className="about-hero-para"
                    style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                        opacity: 0.9,
                        fontWeight: 300,
                        lineHeight: '1.6',
                        color: '#e0e0e0'
                    }}
                >
                    Combining 25 years of deep industry expertise to bridge the gap between
                    advanced plant breeding and farmer success.
                </p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="about-hero-line"
                    style={{ marginTop: '4rem' }}
                >
                    <div style={{
                        width: '1px',
                        height: '100px',
                        background: 'linear-gradient(to bottom, var(--accent), transparent)',
                        margin: '0 auto'
                    }} />
                </motion.div>
            </motion.div>

            <style>{`
                /* ── TABLET (≤1024px) ── */
                @media (max-width: 1024px) {
                    .about-hero-content {
                        padding: 0 6% !important;
                    }
                    .about-hero-heading {
                        letter-spacing: -1px !important;
                    }
                }

                /* ── MOBILE (≤768px) ── */
                @media (max-width: 768px) {
                    .about-hero-content {
                        padding: 0 5% !important;
                    }
                    .about-hero-heading {
                        letter-spacing: -0.5px !important;
                        margin-bottom: 1.2rem !important;
                    }
                    .about-hero-para {
                        font-size: 1rem !important;
                    }
                    .about-hero-line {
                        margin-top: 2.5rem !important;
                    }
                    .about-hero-line > div {
                        height: 70px !important;
                    }
                }

                /* ── SMALL MOBILE (≤480px) ── */
                @media (max-width: 480px) {
                    .about-hero-content {
                        padding: 0 4% !important;
                    }
                    .about-hero-heading br {
                        display: none;
                    }
                    .about-hero-para br {
                        display: none;
                    }
                    .about-hero-line {
                        margin-top: 2rem !important;
                    }
                    .about-hero-line > div {
                        height: 50px !important;
                    }
                }
            `}</style>
        </section>
    );
}