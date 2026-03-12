'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        name: 'Suresh Reddy',
        location: 'Telangana',
        text: 'Agriwork hybrid seeds have consistently delivered high yields even in tough seasons.',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    },
    {
        name: 'Meenakshi Patil',
        location: 'Maharashtra',
        text: 'The germination rates are outstanding. Highly recommend their market-specific varieties.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    },
    {
        name: 'Gurmukh Singh',
        location: 'Punjab',
        text: 'Performance in terms of disease resistance and marketability has been truly outstanding.',
        avatar: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
    }
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((index + 1) % testimonials.length);
    const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

    return (
        <section style={{ background: 'var(--bg-white)', padding: '120px 10%' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '4px' }}>Client Stories</span>
                <h2 style={{ fontSize: '3.5rem', marginTop: '1rem', lineHeight: 1.1, color: 'var(--text-charcoal)' }}>Voices of Prosperity</h2>
                <div className="title-underline" style={{ margin: '1.5rem auto' }} />
            </div>

            <div className="testimonial-slider" style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
                <div
                    style={{
                        background: 'var(--bg-sage)',
                        padding: '2.5rem 3.5rem',
                        borderRadius: '24px',
                        textAlign: 'center',
                        position: 'relative',
                        border: '1px solid rgba(27, 77, 46, 0.05)'
                    }}
                >
                    <div style={{ color: 'var(--accent)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', opacity: 0.6 }}>
                        <Quote size={32} />
                    </div>

                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.02 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <p style={{ fontSize: '1.4rem', lineHeight: '1.6', marginBottom: '2.5rem', fontStyle: 'italic', color: 'var(--text-charcoal)', fontWeight: 300 }}>
                                "{testimonials[index].text}"
                            </p>

                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '1rem'
                                }}
                            >
                                <img
                                    src={testimonials[index].avatar}
                                    alt={testimonials[index].name}
                                    style={{ width: '45px', height: '45px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #fff' }}
                                />
                                <div style={{ textAlign: 'left' }}>
                                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0 }}>{testimonials[index].name}</h4>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', letterSpacing: '1px', textTransform: 'uppercase', margin: 0 }}>{testimonials[index].location}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div
                    style={{
                        position: 'absolute',
                        bottom: '-25px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: '1rem',
                        zIndex: 10
                    }}
                >
                    <button
                        onClick={prev}
                        className="slider-nav-btn"
                        style={{
                            width: '40px',
                            height: '40px',
                            background: '#fff',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                            transition: 'all 0.3s ease',
                            border: 'none'
                        }}
                    >
                        <ChevronLeft size={18} color="var(--primary)" />
                    </button>
                    <button
                        onClick={next}
                        className="slider-nav-btn"
                        style={{
                            width: '40px',
                            height: '40px',
                            background: '#fff',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                            transition: 'all 0.3s ease',
                            border: 'none'
                        }}
                    >
                        <ChevronRight size={18} color="var(--primary)" />
                    </button>
                </div>
            </div>

            <style jsx>{`
                .slider-nav-btn:hover {
                    background: var(--primary);
                    transform: scale(1.1) translateY(-2px);
                }
                .slider-nav-btn:hover :global(svg) {
                    color: #fff !important;
                }
            `}</style>
        </section>
    );
}
