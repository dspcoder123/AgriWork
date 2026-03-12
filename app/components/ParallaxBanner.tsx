'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxBanner() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
        <section
            ref={ref}
            className="parallax-section"
            style={{
                height: '600px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                textAlign: 'center',
                padding: '0 10%'
            }}
        >
            <motion.img
                src="/hero2.png"
                style={{
                    position: 'absolute',
                    top: '-20%',
                    left: 0,
                    width: '100%',
                    height: '140%',
                    objectFit: 'cover',
                    y,
                    zIndex: -1
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.5)',
                    zIndex: -1
                }}
            />

            <div className="parallax-content" style={{ zIndex: 1, maxWidth: '900px' }}>
                <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '2.5rem', lineHeight: '1.2' }}>
                    “Spreading Prosperity Everywhere.”
                </h2>
                <div className="title-underline" style={{ backgroundColor: 'var(--accent)', margin: '0 auto', width: '120px', height: '4px' }} />
                <p style={{ marginTop: '2rem', fontSize: '1.2rem', fontWeight: 300, opacity: 0.9 }}>
                    Agriwork Incorporate — Step towards Progressive Farming
                </p>
            </div>
        </section>
    );
}
