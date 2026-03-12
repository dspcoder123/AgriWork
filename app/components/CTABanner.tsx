'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTABanner() {
    return (
        <section
            style={{
                backgroundColor: 'var(--bg-sand)',
                padding: '120px 10%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at 50% 150%, var(--accent), transparent 70%)',
                    opacity: 0.1
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                style={{ position: 'relative', zIndex: 1 }}
            >
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.5rem', fontWeight: 700, color: 'var(--text-charcoal)' }}>Ready for Progressive Farming?</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.25rem', opacity: 0.8, color: 'var(--text-light)' }}>
                    Join the Agriwork family and start spreading prosperity through high-quality hybrid seeds.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                    <a
                        href="/agriwork-catalog.pdf"
                        download
                        className="btn btn-primary"
                        style={{ borderRadius: '30px', textDecoration: 'none' }}
                    >
                        Download Catalog
                    </a>
                    <Link
                        href="/contact"
                        className="btn btn-accent"
                        style={{ borderRadius: '30px', color: 'var(--primary)', borderColor: 'var(--primary)', display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
                    >
                        Contact Specialist
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
