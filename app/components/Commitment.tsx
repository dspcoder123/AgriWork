'use client';

import { motion } from 'framer-motion';
import { Microscope, ClipboardCheck, ShieldCheck, Beaker, Package, Zap } from 'lucide-react';

const commitments = [
    {
        icon: <ClipboardCheck size={28} />,
        title: "Field Monitoring",
        desc: "Hybrid seeds are produced under the close supervision of experienced experts to ensure genetic purity."
    },
    {
        icon: <Microscope size={28} />,
        title: "Seed Testing Labs",
        desc: "Monitoring seed quality and prevention of quality losses at every stage of the supply chain."
    },
    {
        icon: <Beaker size={28} />,
        title: "Germination Testing",
        desc: "Dedicated tests to meet farmers' expectations in terms of quality, performance, and profitability."
    },
    {
        icon: <ShieldCheck size={28} />,
        title: "Disease Resistance",
        desc: "Rigorous checks to ensure varieties can restrict the growth and development of specific pests."
    },
    {
        icon: <Zap size={28} />,
        title: "Process Control",
        desc: "Unique process control system developed by our QC Department, fine-tuned for best quality."
    },
    {
        icon: <Package size={28} />,
        title: "Packaging Quality",
        desc: "Continuous monitoring of packaging standards to prevent any compromise in seed integrity."
    }
];

export default function Commitment() {
    return (
        <section style={{ padding: '120px 10%', backgroundColor: 'var(--bg-sage)', position: 'relative' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '4px' }}>Standard of Excellence</span>
                <h2 style={{ fontSize: '3rem', marginTop: '1rem', lineHeight: 1.1, color: 'var(--text-charcoal)' }}>Quality Assurance & Performance</h2>
                <div className="title-underline" style={{ margin: '1.5rem auto' }} />
                <p style={{ maxWidth: '700px', margin: '0 auto', opacity: 0.8, fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-light)' }}>
                    Our unique quality control system ensures that our products meet the highest industry standards for success.
                </p>
            </div>

            <div className="commitment-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {commitments.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        whileHover={{
                            y: -12,
                            scale: 1.02,
                            boxShadow: '0 25px 50px rgba(0,0,0,0.06)',
                            background: '#fff',
                            borderColor: 'var(--accent)'
                        }}
                        style={{
                            padding: '2.5rem',
                            background: 'rgba(255,255,255,0.6)',
                            borderRadius: '16px',
                            border: '1px solid rgba(27, 77, 46, 0.08)',
                            textAlign: 'center',
                            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                            backdropFilter: 'blur(10px)'
                        }}
                    >
                        <div style={{
                            color: 'var(--primary)',
                            marginBottom: '1.5rem',
                            background: '#fff',
                            width: '60px',
                            height: '60px',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 1.5rem',
                            boxShadow: '0 8px 16px rgba(0,0,0,0.03)'
                        }}>
                            {item.icon}
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-charcoal)', fontFamily: 'var(--font-serif)' }}>{item.title}</h3>
                        <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: '1.6' }}>{item.desc}</p>
                    </motion.div>
                ))}
            </div>

            <div style={{ marginTop: '5rem', textAlign: 'center', opacity: 0.5, fontSize: '0.85rem', color: 'var(--text-charcoal)' }}>
                <p style={{ letterSpacing: '1px', textTransform: 'uppercase' }}>Expert Team Monitoring 24/7</p>
            </div>
        </section>
    );
}
