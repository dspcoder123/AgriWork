'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { ShoppingCart, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={clsx('navbar', scrolled && 'scrolled')}>
            <div className="logo">
                <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-serif)', color: scrolled ? 'var(--primary)' : '#fff' }}>
                    AGRIWORK SEEDS
                </Link>
            </div>

            <div className={clsx('nav-links', mobileMenuOpen && 'active')} style={{ color: scrolled ? 'var(--text-charcoal)' : '#fff' }}>
                <Link href="/" className={clsx('nav-link', pathname === '/' && 'active')}>Home</Link>
                <Link href="/products" className={clsx('nav-link', pathname === '/products' && 'active')}>Products</Link>
                <Link href="/about" className={clsx('nav-link', pathname === '/about' && 'active')}>About Us</Link>
                <Link href="/contact" className={clsx('nav-link', pathname === '/contact' && 'active')}>Contact</Link>
            </div>

            <div className="nav-actions" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', color: scrolled ? 'var(--primary)' : '#fff' }}>
                <a
                    href="/agriwork-catalog.pdf"
                    download
                    style={{
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        background: 'var(--accent)',
                        color: 'var(--primary)',
                        padding: '0.6rem 1.25rem',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                >
                    Catalog
                </a>
                <button className="cart-btn" style={{ fontSize: '1.25rem' }}>
                    <ShoppingCart size={22} />
                </button>
                <button className="menu-btn" style={{ display: 'none', fontSize: '1.25rem' }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            height: 100vh;
            width: 70%;
            background: var(--bg-white);
            flex-direction: column;
            padding: 5rem 2rem;
            transition: var(--transition-smooth);
            box-shadow: -10px 0 30px rgba(0,0,0,0.1);
            color: var(--text-charcoal) !important;
          }
          .nav-links.active {
            right: 0;
          }
          .menu-btn {
            display: block !important;
          }
        }
      `}</style>
        </nav>
    );
}
