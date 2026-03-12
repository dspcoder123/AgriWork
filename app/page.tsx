'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import WhoWeAre from './components/WhoWeAre';
import ProductShowcase from './components/ProductShowcase';
import Commitment from './components/Commitment';
import CategoryTiles from './components/CategoryTiles';
import ParallaxBanner from './components/ParallaxBanner';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  return (
    <main style={{ position: 'relative' }}>
      <Navbar />

      <Hero />

      <ScrollReveal delay={0.1}>
        <Marquee />
      </ScrollReveal>

      <section id="who-we-are">
        <ScrollReveal direction="up" delay={0.2}>
          <WhoWeAre />
        </ScrollReveal>
      </section>

      <section id="products">
        <ScrollReveal direction="up" delay={0.2}>
          <ProductShowcase />
        </ScrollReveal>
      </section>

      <ScrollReveal direction="up" delay={0.2}>
        <Commitment />
      </ScrollReveal>

      <section id="categories">
        <ScrollReveal direction="up" delay={0.2}>
          <CategoryTiles />
        </ScrollReveal>
      </section>


      <ScrollReveal direction="up" delay={0.2}>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <CTABanner />
      </ScrollReveal>

      <Footer />
    </main>
  );
}
