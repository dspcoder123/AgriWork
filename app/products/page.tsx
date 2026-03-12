'use client';

import Navbar from '../components/Navbar';
import ProductsHeader from '../components/ProductsHeader';
import ProductGrid from '../components/ProductGrid';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';

export default function ProductsPage() {
    return (
        <main>
            <Navbar />

            <ProductsHeader />

            <ProductGrid />

            {/* Diversity Brand Statement */}
            <section style={{ padding: '100px 10%', background: 'var(--bg-slate)', textAlign: 'center' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '4px' }}>Extensive Portfolio</span>
                    <h2 style={{ fontSize: '3rem', marginTop: '1rem', color: 'var(--text-charcoal)', fontFamily: 'var(--font-serif)' }}>More than 90+ Hybrid Varieties</h2>
                    <div className="title-underline" style={{ margin: '1.5rem auto' }} />
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '3rem' }}>
                        Our complete archive covers everything from root vegetables to high-brix melons. If you don't see a specific variety in our digital preview, please download our complete commercial archive or contact our specialists.
                    </p>
                    <a
                        href="/agriwork-catalog.pdf"
                        download
                        className="btn btn-primary"
                        style={{ padding: '1.25rem 3rem', borderRadius: '100px', textDecoration: 'none', display: 'inline-block' }}
                    >
                        Download Full Catalog
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
