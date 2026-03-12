'use client';

import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

export default function MissionVision() {
    return (
        <section style={{ padding: '150px 10%', background: 'var(--bg-sand)', position: 'relative' }}>
            <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '4px' }}>Our Direction</span>
                <h2 style={{ fontSize: '3.5rem', marginTop: '1rem', color: 'var(--text-charcoal)', fontFamily: 'var(--font-serif)' }}>Mission & Vision</h2>
                <div className="title-underline" style={{ margin: '1.5rem auto' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', maxWidth: '1400px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    style={{
                        background: '#fff',
                        padding: '5rem 4rem',
                        borderRadius: '24px',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.04)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        border: '1px solid rgba(0,0,0,0.03)',
                        transition: 'all 0.4s ease'
                    }}
                >
                    <div style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        background: 'var(--bg-sage)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--primary)',
                        marginBottom: '3rem'
                    }}>
                        <Target size={45} strokeWidth={1.5} />
                    </div>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--primary)' }}>Our Aim</h3>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', lineHeight: 1.8, opacity: 0.8 }}>
                        To empower every farmer with globally-recognized hybrid seeds at reasonable prices, fulfilling our commitment to excellence and food security.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    style={{
                        background: 'var(--primary)',
                        padding: '5rem 4rem',
                        borderRadius: '24px',
                        boxShadow: '0 30px 60px rgba(27, 77, 46, 0.15)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        color: '#fff',
                        transition: 'all 0.4s ease'
                    }}
                >
                    <div style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent)',
                        marginBottom: '3rem',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <Eye size={45} strokeWidth={1.5} />
                    </div>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', color: '#fff' }}>Our Vision</h3>
                    <p style={{ fontSize: '1.15rem', opacity: 0.9, lineHeight: 1.8 }}>
                        “Spreading Prosperity Everywhere.” <br />
                        We strive to lead the seed industry by developing innovations that define quality, performance, and ultimate farmer profitability.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
