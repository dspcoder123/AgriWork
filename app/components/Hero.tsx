'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    '/hero1.png',
    '/hero2.png',
    '/hero3.png',
    '/hero4.png',
    '/hero5.png'
];

const typewriterText = "Step towards Progressive Farming";

export default function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const typewriterVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.04
            }
        }
    };

    const characterVariants = {
        hidden: { opacity: 0, y: 5 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.1 }
        }
    };

    return (
        <section className="hero-slider" style={{ background: '#000' }}>
            <AnimatePresence initial={false}>
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 0
                    }}
                >
                    <img
                        src={images[index]}
                        alt="Agriwork Seeds"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5) blur(3px)' }}
                    />
                </motion.div>
            </AnimatePresence>

            <div className="hero-overlay" style={{
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 100%)',
                zIndex: 1
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    {/* TAGLINE BADGE — mobile fixed */}
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        {/* Animated Pulse Dot */}
                        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent)', zIndex: 2 }} />
                            <motion.div
                                animate={{ scale: [1, 2.5, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                style={{ position: 'absolute', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent)', zIndex: 1 }}
                            />
                        </div>

                        <motion.div
                            className="hero-badge-text"
                            variants={typewriterVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {typewriterText.split("").map((char, i) => (
                                <motion.span key={i} variants={characterVariants} style={{ display: 'inline-block' }}>
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.h1
                        className="hero-headline"
                        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.1, textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                    >
                        Spreading Prosperity <br />
                        Everywhere.
                    </motion.h1>

                    <motion.p
                        className="hero-subheadline"
                        style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '2rem auto 3rem', opacity: 0.9, textShadow: '0 2px 10px rgba(0,0,0,0.4)', lineHeight: 1.6 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                    >
                        High quality vegetable seeds bred for diverse agroclimatic conditions. Empowering farmers with excellence and innovation since 2018.
                    </motion.p>

                    <motion.div
                        className="cta-group"
                        style={{ justifyContent: 'center' }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2.5, duration: 0.8 }}
                    >
                        <a
                            href="/agriwork-catalog.pdf"
                            download
                            className="btn btn-primary hero-download-btn"
                            style={{ borderRadius: '50px', textDecoration: 'none', display: 'inline-block' }}
                        >
                            Download Catalog
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Slide indicators */}
            <div style={{
                position: 'absolute',
                bottom: '50px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 2,
                display: 'flex',
                gap: '1rem'
            }}>
                {images.map((_, i) => (
                    <div
                        key={i}
                        style={{
                            width: i === index ? '40px' : '10px',
                            height: '4px',
                            background: i === index ? 'var(--accent)' : 'rgba(255,255,255,0.3)',
                            borderRadius: '2px',
                            transition: 'all 0.4s ease'
                        }}
                    />
                ))}
            </div>

            {/* Responsive styles */}
            <style>{`
                .hero-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    padding: 0.7rem 1.8rem;
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(12px);
                    border-radius: 100px;
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    margin-bottom: 2.5rem;
                    box-shadow: 0 8px 32px rgba(0,0,0,0.2);
                    max-width: 90vw;
                    overflow: hidden;
                }
                .hero-badge-text {
                    text-transform: uppercase;
                    letter-spacing: clamp(2px, 0.8vw, 5px);
                    font-size: clamp(0.55rem, 2vw, 1rem);
                    color: var(--accent);
                    font-weight: 700;
                    font-family: var(--font-serif);
                    text-shadow: 0 2px 10px rgba(0,0,0,0.3);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .hero-download-btn {
                    padding: 1.25rem 3rem;
                    font-size: 1rem;
                }
                @media (max-width: 768px) {
                    .hero-badge {
                        padding: 0.6rem 1.2rem;
                        gap: 8px;
                        margin-bottom: 1.8rem;
                    }
                    .hero-download-btn {
                        padding: 0.85rem 1.75rem;
                        font-size: 0.875rem;
                    }
                }
                @media (max-width: 480px) {
                    .hero-badge {
                        padding: 0.5rem 1rem;
                        gap: 6px;
                        margin-bottom: 1.5rem;
                    }
                    .hero-download-btn {
                        padding: 0.75rem 1.4rem;
                        font-size: 0.8rem;
                    }
                }
            `}</style>
        </section>
    );
}