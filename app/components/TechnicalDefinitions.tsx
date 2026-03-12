'use client';

import { motion } from 'framer-motion';

const definitions = [
    { term: "Immune", def: "Not subject to attack or infection by a specified pest or pathogen." },
    { term: "Resistance", def: "Ability of a plant variety to restrict the growth and development of a pest or pathogen." },
    { term: "High Resistance (HR)", def: "Plant varieties highly restrict the growth and development of specific pests or pathogens." },
    { term: "Intermediate Resistance (IR)", def: "Plant varieties moderately restrict pests or diseases." },
    { term: "Susceptibility", def: "Inability of a plant variety to restrict growth of pests or pathogens." },
    { term: "Tolerance", def: "Ability of a plant variety to endure abiotic stress." },
];

export default function TechnicalDefinitions() {
    return (
        <section className="td-section" style={{ background: 'var(--bg-slate)', padding: '120px 10%', position: 'relative' }}>
            <div className="td-header" style={{ textAlign: 'center', marginBottom: '6rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '4px' }}>Expert Terminology</span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginTop: '1rem', color: 'var(--text-charcoal)', fontFamily: 'var(--font-serif)' }}>Technical Definitions</h2>
                <div className="title-underline" style={{ margin: '1.5rem auto' }} />
                <p style={{ opacity: 0.7, maxWidth: '600px', margin: '0 auto', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
                    Standardized ISF terminology for seed performance and disease resistance classification.
                </p>
            </div>

            <div className="td-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2.5rem',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                {definitions.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        viewport={{ once: true }}
                        style={{
                            background: '#fff',
                            padding: '3rem 2.5rem',
                            borderRadius: '16px',
                            border: '1px solid rgba(0,0,0,0.04)',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                            transition: 'all 0.3s ease',
                            position: 'relative'
                        }}
                        className="def-card"
                    >
                        <div style={{
                            position: 'absolute',
                            top: '0',
                            left: '2.5rem',
                            width: '40px',
                            height: '4px',
                            background: 'var(--accent)',
                            borderRadius: '0 0 4px 4px'
                        }} />
                        <h4 style={{ color: 'var(--primary)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', marginBottom: '1.25rem', fontWeight: 800, textTransform: 'uppercase' }}>{item.term}</h4>
                        <p style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1rem)', color: 'var(--text-light)', lineHeight: 1.7 }}>{item.def}</p>
                    </motion.div>
                ))}
            </div>

            <style>{`
                .def-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.05) !important;
                    border-color: var(--accent) !important;
                }

                /* ── TABLET (≤1024px) ── */
                @media (max-width: 1024px) {
                    .td-section {
                        padding: 80px 6% !important;
                    }
                    .td-header {
                        margin-bottom: 4rem !important;
                    }
                    .td-grid {
                        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)) !important;
                        gap: 2rem !important;
                    }
                }

                /* ── MOBILE (≤768px) ── */
                @media (max-width: 768px) {
                    .td-section {
                        padding: 60px 5% !important;
                    }
                    .td-header {
                        margin-bottom: 3rem !important;
                    }
                    .td-grid {
                        grid-template-columns: 1fr 1fr !important;
                        gap: 1.5rem !important;
                    }
                    .def-card {
                        padding: 2rem 1.5rem !important;
                        border-radius: 12px !important;
                    }
                }

                /* ── SMALL MOBILE (≤480px) ── */
                @media (max-width: 480px) {
                    .td-section {
                        padding: 50px 4% !important;
                    }
                    .td-grid {
                        grid-template-columns: 1fr !important;
                        gap: 1.25rem !important;
                    }
                    .def-card {
                        padding: 1.75rem 1.25rem !important;
                    }
                }
            `}</style>
        </section>
    );
}