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
                <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src="/logo.png"
                        alt="Agriwork Seeds Logo"
                        className="logo-img"
                        style={{ height: scrolled ? '50px' : '70px', transition: 'all 0.3s ease', objectFit: 'contain' }}
                    />
                </Link>
            </div>

            <div className={clsx('nav-links', mobileMenuOpen && 'active')} style={{ color: scrolled ? 'var(--text-charcoal)' : (mobileMenuOpen ? 'var(--text-charcoal)' : '#fff') }}>
                <Link href="/" className={clsx('nav-link', pathname === '/' && 'active')} onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link href="/products" className={clsx('nav-link', pathname === '/products' && 'active')} onClick={() => setMobileMenuOpen(false)}>Products</Link>
                <Link href="/about" className={clsx('nav-link', pathname === '/about' && 'active')} onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                <Link href="/contact" className={clsx('nav-link', pathname === '/contact' && 'active')} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                <div className="mobile-catalog-wrapper" style={{ display: 'none', marginTop: '2rem' }}>
                    <a
                        href="/agriwork-catalog.pdf"
                        download
                        style={{
                            background: 'var(--accent)',
                            color: 'var(--primary)',
                            padding: '1rem 2rem',
                            borderRadius: '50px',
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            fontSize: '0.9rem'
                        }}
                    >
                        Download Catalog
                    </a>
                </div>
            </div>

            <div className="nav-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: scrolled ? 'var(--primary)' : (mobileMenuOpen ? 'var(--text-charcoal)' : '#fff') }}>
                <a
                    href="/agriwork-catalog.pdf"
                    download
                    className="catalog-btn-desktop"
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

                <button
                    className="menu-btn"
                    style={{ display: 'none', fontSize: '1.25rem', color: 'inherit', zIndex: 2000 }}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            <style jsx>{`
        @media (max-width: 1024px) {
            .navbar {
                padding: 1rem 5%;
            }
            .catalog-btn-desktop {
                display: none !important;
            }
            .mobile-catalog-wrapper {
                display: block !important;
            }
        }
        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            height: 100vh;
            width: 100%;
            background: var(--bg-white);
            flex-direction: column;
            padding: 8rem 2rem;
            transition:  0.4s cubic-bezier(0.16, 1, 0.3, 1);
            color: var(--text-charcoal) !important;
            z-index: 1000;
          }
          .nav-links.active {
            right: 0;
          }
          .menu-btn {
            display: block !important;
          }
          .nav-link {
            font-size: 1.5rem;
            margin-bottom: 2rem;
          }
          .logo-img {
            height: 45px !important;
          }
        }
      `}</style>
        </nav>
    );
}
