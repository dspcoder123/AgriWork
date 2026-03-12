'use client';

import { motion } from 'framer-motion';

export default function ContactHero() {
    return (
        <section
            style={{
                minHeight: '80vh',
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
            {/* Dynamic Background with Multi-layers */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url("https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=2000")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.4
                }}
            />

            {/* Vibrant Colorful Overlay */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at center, rgba(27, 77, 46, 0.4), #0a140e 70%)',
                    zIndex: 1
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: 'relative', zIndex: 2, padding: '0 5%' }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{
                        display: 'inline-block',
                        padding: '0.6rem 2rem',
                        background: 'linear-gradient(90deg, var(--accent), #f3c623)',
                        borderRadius: '100px',
                        marginBottom: '2.5rem',
                        boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)'
                    }}>
                    <span style={{
                        textTransform: 'uppercase',
                        letterSpacing: '5px',
                        fontSize: '0.9rem',
                        color: 'var(--primary)',
                        fontWeight: 900
                    }}>
                        Global Solutions
                    </span>
                </motion.div>

                <h1 style={{
                    fontSize: 'clamp(4rem, 12vw, 8rem)',
                    margin: '0 0 2rem',
                    fontFamily: 'var(--font-serif)',
                    lineHeight: 1,
                    letterSpacing: '-3px',
                    fontWeight: 900
                }}>
                    Let’s Grow <br />
                    <span style={{
                        background: 'linear-gradient(to right, #fff, var(--accent))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-block'
                    }}>Together.</span>
                </h1>

                <p style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    fontSize: '1.4rem',
                    opacity: 0.9,
                    fontWeight: 400,
                    lineHeight: '1.4',
                    color: '#f0f0f0',
                    letterSpacing: '-0.5px'
                }}>
                    Connect with our world-class team of agricultural experts <br />
                    for precision hybrids and field-level technical guidance.
                </p>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 1.5, ease: "circOut" }}
                    style={{
                        height: '4px',
                        width: '120px',
                        background: 'var(--accent)',
                        margin: '4rem auto 0',
                        borderRadius: '2px'
                    }}
                />
            </motion.div>
        </section>
    );
}
