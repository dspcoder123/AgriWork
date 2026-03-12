'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const products = [
    { id: 1, name: "AGRIWORK CHILLI", category: "Vegetables", image: "/pesticide.png" },
    { id: 2, name: "HYBRID WATERMELON", category: "Melons", image: "/hero2.png" },
    { id: 3, name: "PREMIUM TOMATO", category: "Vegetables", image: "/fertilizer.png" },
    { id: 4, name: "SWEET CORN PRO", category: "Cereals", image: "/hero1.png" },
    { id: 5, name: "SELECT OKRA", category: "Vegetables", image: "/micronutrients.png" },
    { id: 6, name: "HYBRID CUCUMBER", category: "Vegetables", image: "/about-story.png" },
];

export default function ProductShowcase() {
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (containerRef.current) {
            const { scrollLeft } = containerRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - 250 : scrollLeft + 250;
            containerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    // Auto-scroll logic
    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            if (containerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    containerRef.current.scrollTo({ left: scrollLeft + 250, behavior: 'smooth' });
                }
            }
        }, 4000);

        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <section style={{ padding: '100px 0', paddingRight: 0, position: 'relative', overflow: 'hidden', backgroundColor: 'var(--bg-white)' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem', padding: '0 10%' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '3px' }}>Market Specific</span>
                <h2 style={{ fontSize: '3rem', marginTop: '1rem', lineHeight: 1.1 }}>Top Ranking Varieties</h2>
                <div className="title-underline" style={{ margin: '1.5rem auto' }} />
                <p style={{ opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
                    Varieties developed for maximum profitability and performance across different agroclimatic conditions.
                </p>
            </div>

            {/* BOUNDED BOX CONTAINER */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', overflow: 'hidden', padding: '0 2rem' }}>
                <div
                    ref={containerRef}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                        display: 'flex',
                        gap: '1.5rem',
                        overflowX: 'auto',
                        padding: '1rem 0 2rem',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                    className="product-scroll"
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                minWidth: '220px',
                                height: '320px',
                                flexShrink: 0,
                                position: 'relative',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.05)'
                            }}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                padding: '1.25rem',
                                color: '#fff'
                            }}>
                                <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent)', fontWeight: 700, marginBottom: '0.2rem' }}>
                                    {product.category}
                                </span>
                                <h3 style={{ fontSize: '1.1rem', margin: 0, fontFamily: 'var(--font-serif)', lineHeight: 1.3 }}>
                                    {product.name}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CENTERED BUTTONS */}
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '3rem' }}>
                <button
                    onClick={() => scroll('left')}
                    style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        border: '1px solid rgba(0,0,0,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        background: '#fff'
                    }}
                    className="slider-nav-btn"
                >
                    <ChevronLeft size={18} />
                </button>
                <button
                    onClick={() => scroll('right')}
                    style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        background: 'var(--primary)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                    }}
                    className="slider-nav-btn active"
                >
                    <ChevronRight size={18} />
                </button>
            </div>

            <style jsx>{`
                .product-scroll::-webkit-scrollbar {
                    display: none;
                }
                .slider-nav-btn:hover {
                    transform: scale(1.1);
                    background: var(--primary);
                    color: #fff;
                }
                .slider-nav-btn.active:hover {
                    background: var(--accent);
                    color: var(--primary);
                }
            `}</style>
        </section>
    );
}
