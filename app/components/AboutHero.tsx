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

            {/* Gradient Overlay for Sleek Look */}
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

                <h1 style={{
                    fontSize: 'clamp(3.5rem, 10vw, 6.5rem)',
                    margin: '0 0 1.5rem',
                    fontFamily: 'var(--font-serif)',
                    lineHeight: 1,
                    letterSpacing: '-2px'
                }}>
                    A Legacy of <br />
                    <span style={{ color: 'var(--accent)' }}>Prosperity.</span>
                </h1>

                <p style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    fontSize: '1.25rem',
                    opacity: 0.9,
                    fontWeight: 300,
                    lineHeight: '1.6',
                    color: '#e0e0e0'
                }}>
                    Combining 25 years of deep industry expertise to bridge the gap between <br />
                    advanced plant breeding and farmer success.
                </p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    style={{ marginTop: '4rem' }}
                >
                    <div style={{ width: '1px', height: '100px', background: 'linear-gradient(to bottom, var(--accent), transparent)', margin: '0 auto' }} />
                </motion.div>
            </motion.div>
        </section>
    );
}
