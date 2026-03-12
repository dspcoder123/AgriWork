'use client';

import { motion } from 'framer-motion';

const categories = [
    { name: 'Chilli & Pepper', image: '/pesticide.png' }, // Reusing images with descriptive names is fine
    { name: 'Gourds & Cucumber', image: '/about-story.png' },
    { name: 'Tomato & Okra', image: '/fertilizer.png' },
    { name: 'Melons & Watermelons', image: '/hero2.png' },
];

export default function CategoryTiles() {
    return (
        <section style={{ padding: '100px 10%', background: 'var(--bg-slate)' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Our Major Segments</h2>
                <div className="title-underline" style={{ margin: '1.5rem auto' }} />
                <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.7 }}>
                    Comprehensive information about our market-specific vegetable seed varieties.
                </p>
            </div>

            <div className="category-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                {categories.map((cat, i) => (
                    <motion.div
                        key={i}
                        className="category-tile"
                        whileHover="hover"
                        style={{
                            position: 'relative',
                            height: '400px',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            cursor: 'pointer'
                        }}
                    >
                        <motion.img
                            src={cat.image}
                            variants={{ hover: { scale: 1.1 } }}
                            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                                display: 'flex',
                                alignItems: 'flex-end',
                                padding: '2rem'
                            }}
                        >
                            <h3 style={{ color: '#fff', fontSize: '1.75rem', fontWeight: 'bold' }}>{cat.name}</h3>
                        </div>

                        <motion.div
                            className="hover-overlay"
                            initial={{ opacity: 0 }}
                            variants={{ hover: { opacity: 1 } }}
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'rgba(27, 77, 46, 0.4)',
                                backdropFilter: 'blur(4px)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <button
                                style={{
                                    color: '#fff',
                                    border: '2px solid #fff',
                                    padding: '0.75rem 2rem',
                                    borderRadius: '30px',
                                    fontSize: '0.9rem',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}
                            >
                                View Segments
                            </button>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
