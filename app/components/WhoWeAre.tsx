'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import ScrollReveal from './ScrollReveal';

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIsInView(true);
        }, { threshold: 0.1 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000;
            const stepTime = 20;
            const totalSteps = duration / stepTime;
            const increment = value / totalSteps;

            const timer = setInterval(() => {
                start += increment;
                if (start >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, stepTime);
            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <span style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'var(--primary)', fontFamily: 'var(--font-serif)' }}>{count}{suffix}</span>
        </div>
    );
};

export default function WhoWeAre() {
    return (
        <section className="section section-offset" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <ScrollReveal direction="right" delay={0.1}>
                <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4rem' }}>
                    <div className="stat-card">
                        <Counter value={25} suffix="+" />
                        <p style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, opacity: 0.6, fontSize: '0.8rem' }}>Years Expertise</p>
                    </div>
                    <div className="stat-card">
                        <Counter value={28} suffix="+" />
                        <p style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, opacity: 0.6, fontSize: '0.8rem' }}>Vegetable Crops</p>
                    </div>
                    <div className="stat-card">
                        <Counter value={2018} suffix="" />
                        <p style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, opacity: 0.6, fontSize: '0.8rem' }}>Established</p>
                    </div>
                    <div className="stat-card">
                        <Counter value={10} suffix="K+" />
                        <p style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, opacity: 0.6, fontSize: '0.8rem' }}>Happy Farmers</p>
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.3}>
                <div className="who-we-are-content">
                    <span style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '3px' }}>Seed Industry Experts</span>
                    <h2 style={{ fontSize: '3rem', margin: '1.5rem 0', lineHeight: '1.2' }}>Providing Varieties for Market Success.</h2>
                    <div className="title-underline" />
                    <p style={{ fontSize: '1.1rem', opacity: 0.8, marginBottom: '2rem', lineHeight: '1.7' }}>
                        Agriwork Incorporate (a JPR Sons Company), established in 2018 by entrepreneurs with over 25 years of experience in the seed industry, is dedicated to achieving a singular goal: to breed, develop and provide varieties that meet farmers’ expectations in quality, performance and profitability.
                    </p>
                    <p style={{ fontSize: '1.1rem', opacity: 0.8, marginBottom: '2.5rem', lineHeight: '1.7' }}>
                        Our aim is to provide excellence at reasonable prices, committed to being “Agriwork” for all our customers globally.
                    </p>
                    <button style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--primary)', borderBottom: '2px solid var(--accent)', paddingBottom: '5px' }}>
                        Explore Our Mission
                    </button>
                </div>
            </ScrollReveal>
        </section>
    );
}
