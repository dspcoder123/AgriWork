'use client';

import { motion } from 'framer-motion';

export default function ProductsHeader() {
    return (
        <section
            style={{
                minHeight: '70vh',
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
            {/* Immersive Background */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url("https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=2000")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.35
                }}
            />

            {/* Multi-layered Overlay */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(10, 20, 14, 0.9), transparent 50%, rgba(10, 20, 14, 0.9))',
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
                    padding: '0.4rem 1.2rem',
                    background: 'rgba(212, 175, 55, 0.1)',
                    borderRadius: '100px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    marginBottom: '2rem'
                }}>
                    <span style={{
                        textTransform: 'uppercase',
                        letterSpacing: '3px',
                        fontSize: '0.75rem',
                        color: 'var(--accent)',
                        fontWeight: 700
                    }}>
                        Hybrid Portfolio
                    </span>
                </div>

                <h1 style={{
                    fontSize: 'clamp(3.5rem, 9vw, 6rem)',
                    margin: '0 0 1.5rem',
                    fontFamily: 'var(--font-serif)',
                    lineHeight: 1.1,
                    letterSpacing: '-2px'
                }}>
                    Engineering <br />
                    <span style={{ color: 'var(--accent)' }}>Precision Seeds.</span>
                </h1>

                <p style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    fontSize: '1.25rem',
                    opacity: 0.8,
                    fontWeight: 300,
                    lineHeight: '1.7',
                    color: '#f0f0f0'
                }}>
                    Explore our diverse archive of 90+ hybrid varieties, meticulously <br />
                    developed for high yields and environmental resilience.
                </p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    style={{ marginTop: '4rem' }}
                >
                    <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, var(--accent), transparent)', margin: '0 auto' }} />
                </motion.div>
            </motion.div>
        </section>
    );
}
