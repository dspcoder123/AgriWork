'use client';

import { motion } from 'framer-motion';

export default function StorySection() {
    return (
        <section className="story-section" style={{ padding: '120px 10%', background: 'var(--bg-sage)', position: 'relative' }}>
            <div className="story-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '8rem',
                alignItems: 'center',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                {/* Left: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ width: '40px', height: '2px', background: 'var(--accent)' }} />
                        <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '4px' }}>Our DNA</span>
                    </div>

                    <h2 className="story-heading" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', margin: '0 0 2rem', lineHeight: 1.1, color: 'var(--text-charcoal)', fontFamily: 'var(--font-serif)' }}>
                        Expert Driven <br /> Precision Breeding.
                    </h2>

                    <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: 'var(--text-light)', marginBottom: '2rem', lineHeight: '1.8', opacity: 0.9 }}>
                        Agriwork Incorporate was founded by industry pioneers with over 25 years of extensive field experience. We don't just sell seeds; we engineer genetics that flourish across diverse agroclimatic conditions and seasons.
                    </p>

                    <div style={{
                        padding: '2rem',
                        background: 'rgba(212, 175, 55, 0.05)',
                        borderLeft: '4px solid var(--accent)',
                        borderRadius: '0 12px 12px 0',
                        marginBottom: '2rem'
                    }}>
                        <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', fontWeight: 500, color: 'var(--text-charcoal)', lineHeight: '1.6' }}>
                            "Every hybrid seed is produced under the close supervision of master production experts to ensure it exceeds farmers' expectations in quality and profitability."
                        </p>
                    </div>

                    <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: 'var(--text-light)', lineHeight: '1.8', opacity: 0.9 }}>
                        Our expertise ranges from professional breeder seed production to foundation seed management, covering all major crop segments globally.
                    </p>
                </motion.div>

                {/* Right: Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="story-image-wrap"
                    style={{ position: 'relative' }}
                >
                    {/* Decorative Circle */}
                    <div className="story-deco-circle" style={{
                        position: 'absolute',
                        top: '-40px',
                        right: '-40px',
                        width: '200px',
                        height: '200px',
                        border: '1px solid rgba(27, 77, 46, 0.1)',
                        borderRadius: '50%',
                        zIndex: 0
                    }} />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <img
                            src="https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?auto=format&fit=crop&q=80&w=1000"
                            alt="Advanced Breeding"
                            className="story-img"
                            style={{
                                width: '100%',
                                borderRadius: '24px',
                                boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
                                objectFit: 'cover',
                                height: '600px'
                            }}
                        />

                        <div className="story-badge" style={{
                            position: 'absolute',
                            bottom: '30px',
                            right: '-30px',
                            background: 'var(--primary)',
                            color: '#fff',
                            padding: '2.5rem',
                            borderRadius: '16px',
                            zIndex: 2,
                            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                        }}>
                            <h4 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>JPR Sons</h4>
                            <p style={{ opacity: 0.6, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>Heritage of Quality</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <style>{`
                /* ── TABLET (≤1024px) ── */
                @media (max-width: 1024px) {
                    .story-section {
                        padding: 80px 6% !important;
                    }
                    .story-grid {
                        gap: 4rem !important;
                        grid-template-columns: 1fr !important;
                    }
                    .story-img {
                        height: 480px !important;
                    }
                    .story-badge {
                        right: 0 !important;
                        padding: 1.75rem !important;
                    }
                    .story-deco-circle {
                        display: none !important;
                    }
                }

                /* ── MOBILE (≤768px) ── */
                @media (max-width: 768px) {
                    .story-section {
                        padding: 60px 5% !important;
                    }
                    .story-grid {
                        gap: 3rem !important;
                    }
                    .story-img {
                        height: 380px !important;
                        border-radius: 16px !important;
                    }
                    .story-badge {
                        position: relative !important;
                        bottom: auto !important;
                        right: auto !important;
                        margin-top: 1rem !important;
                        border-radius: 12px !important;
                        padding: 1.5rem !important;
                        display: inline-block !important;
                    }
                    .story-heading br {
                        display: none;
                    }
                }

                /* ── SMALL MOBILE (≤480px) ── */
                @media (max-width: 480px) {
                    .story-section {
                        padding: 50px 4% !important;
                    }
                    .story-img {
                        height: 260px !important;
                        border-radius: 12px !important;
                    }
                    .story-badge {
                        width: 100% !important;
                        box-sizing: border-box !important;
                    }
                }
            `}</style>
        </section>
    );
}