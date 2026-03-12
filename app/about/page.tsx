'use client';

import Navbar from '../components/Navbar';
import AboutHero from '../components/AboutHero';
import StorySection from '../components/StorySection';
import MissionVision from '../components/MissionVision';
import Timeline from '../components/Timeline';
import TechnicalDefinitions from '../components/TechnicalDefinitions';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';

export default function AboutPage() {
    return (
        <main>
            <Navbar />

            <AboutHero />

            <StorySection />

            <MissionVision />

            <TechnicalDefinitions />

            <Timeline />

            <section style={{ background: 'var(--bg-slate)', padding: '100px 0', textAlign: 'center' }}>
                <div style={{ marginBottom: '3rem' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '4px' }}>Global Network</span>
                    <h2 style={{ fontSize: '3rem', marginTop: '1rem', color: 'var(--text-charcoal)' }}>Recognized Excellence</h2>
                    <div className="title-underline" style={{ margin: '1.5rem auto' }} />
                </div>
                <Marquee />
            </section>

            <Footer />
        </main>
    );
}
