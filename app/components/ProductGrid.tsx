'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
import { ArrowRight, X, Info, ChevronRight, Filter, Search, CheckCircle2, Star, ShieldCheck, Zap } from 'lucide-react';
import productData from '../data/products.json';

export default function ProductGrid() {
    const [activeTab, setActiveTab] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [visibleCount, setVisibleCount] = useState(16);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const categories = useMemo(() => {
        const cats = new Set(productData.products.map(p => p.category));
        return ["All", ...Array.from(cats).sort()];
    }, []);

    const filteredProducts = useMemo(() => {
        return productData.products.filter(p => {
            const matchesCategory = activeTab === "All" || p.category === activeTab;
            const matchesSearch =
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.category.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeTab, searchQuery]);

    const displayedProducts = filteredProducts.slice(0, visibleCount);

    const SidebarContent = () => (
        <>
            <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                    <div style={{ background: 'var(--primary)', color: '#fff', padding: '0.5rem', borderRadius: '8px' }}>
                        <Filter size={16} />
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Filter Results</h3>
                </div>
                <div style={{ position: 'relative' }}>
                    <Search size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.4 }} />
                    <input
                        type="text"
                        placeholder="Variety or Code..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '0.8rem 1rem 0.8rem 2.8rem',
                            borderRadius: '10px',
                            background: '#f1f5f9',
                            border: '1px solid transparent',
                            fontSize: '0.85rem',
                            outline: 'none',
                            transition: '0.3s',
                            boxSizing: 'border-box'
                        }}
                        className="sidebar-search"
                    />
                </div>
            </div>

            <div style={{ flexGrow: 1 }}>
                <h4 style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--accent)', marginBottom: '1rem' }}>Commercial Range</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {categories.map((cat, i) => (
                        <button
                            key={i}
                            onClick={() => { setActiveTab(cat); setVisibleCount(16); setSidebarOpen(false); }}
                            style={{
                                padding: '0.75rem 1rem',
                                borderRadius: '10px',
                                fontSize: '0.85rem',
                                fontWeight: activeTab === cat ? 700 : 500,
                                background: activeTab === cat ? 'var(--primary)' : 'transparent',
                                color: activeTab === cat ? '#fff' : '#64748b',
                                border: 'none',
                                cursor: 'pointer',
                                textAlign: 'left',
                                transition: '0.2s',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                            className="sidebar-cat-btn"
                        >
                            {cat}
                            {activeTab === cat && <ChevronRight size={14} />}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );

    return (
        <section style={{ minHeight: '100vh', padding: '60px 4%', background: '#f8fafc', position: 'relative' }}>
            <div style={{ maxWidth: '1800px', margin: '0 auto', display: 'flex', gap: '2.5rem', position: 'relative' }}>

                {/* Desktop Sidebar */}
                <aside className="desktop-sidebar hide-scrollbar desktop-sidebar" style={{
                    width: '300px',
                    flexShrink: 0,
                    position: 'sticky',
                    top: '110px',
                    height: 'calc(100vh - 140px)',
                    background: '#fff',
                    borderRadius: '24px',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    overflowY: 'auto',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                    border: '1px solid rgba(0,0,0,0.05)'
                }}>
                    <SidebarContent />
                </aside>

                {/* Mobile Filter Drawer Backdrop */}
                <AnimatePresence>
                    {sidebarOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSidebarOpen(false)}
                            style={{
                                position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
                                zIndex: 900, display: 'none'
                            }}
                            className="mobile-backdrop"
                        />
                    )}
                </AnimatePresence>

                {/* Mobile Filter Drawer */}
                <AnimatePresence>
                    {sidebarOpen && (
                        <motion.aside
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                            style={{
                                position: 'fixed', top: 0, left: 0, bottom: 0,
                                width: '280px', background: '#fff', zIndex: 1000,
                                padding: '2rem', display: 'flex', flexDirection: 'column',
                                overflowY: 'auto', boxShadow: '10px 0 40px rgba(0,0,0,0.15)'
                            }}
                            className="mobile-drawer hide-scrollbar"
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <span style={{ fontWeight: 800, fontSize: '1rem' }}>Filters</span>
                                <button onClick={() => setSidebarOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}>
                                    <X size={20} />
                                </button>
                            </div>
                            <SidebarContent />
                        </motion.aside>
                    )}
                </AnimatePresence>

                {/* Main Content */}
                <div style={{ flexGrow: 1, minWidth: 0 }}>

                    {/* Mobile Filter Button */}
                    <button
                        className="mobile-filter-btn"
                        onClick={() => setSidebarOpen(true)}
                        style={{
                            display: 'none',
                            alignItems: 'center',
                            gap: '0.6rem',
                            padding: '0.75rem 1.5rem',
                            background: 'var(--primary)',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '12px',
                            fontWeight: 700,
                            fontSize: '0.85rem',
                            cursor: 'pointer',
                            marginBottom: '1.5rem'
                        }}
                    >
                        <Filter size={16} /> Filter & Search
                        {activeTab !== 'All' && (
                            <span style={{ background: 'var(--accent)', color: '#000', borderRadius: '20px', padding: '0.1rem 0.6rem', fontSize: '0.75rem', fontWeight: 900 }}>
                                {activeTab}
                            </span>
                        )}
                    </button>

                    {/* Header Row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.85rem)', fontWeight: 900, color: '#1e293b', fontFamily: 'var(--font-serif)', letterSpacing: '-0.5px' }}>
                                {activeTab} <span style={{ color: 'var(--primary)', fontWeight: 500, fontSize: 'clamp(0.85rem, 2vw, 1.1rem)', marginLeft: '10px' }}>({filteredProducts.length} Varietals)</span>
                            </h2>
                        </div>
                        <div className="header-badges" style={{ display: 'flex', gap: '1.5rem', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', flexWrap: 'wrap' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><ShieldCheck size={16} color="var(--primary)" /> HIGH PURITY</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Zap size={16} color="var(--accent)" /> ACCELERATED GROWTH</span>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <motion.div
                        layout
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                            gap: '2rem'
                        }}
                        className="product-grid"
                    >
                        <AnimatePresence mode="popLayout">
                            {displayedProducts.map((p) => (
                                <motion.div
                                    key={p.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    whileHover={{ y: -10 }}
                                    style={{
                                        background: '#fff',
                                        borderRadius: '24px',
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 30px rgba(0,0,0,0.04)',
                                        border: '1px solid rgba(0,0,0,0.05)',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        transition: 'box-shadow 0.3s ease'
                                    }}
                                    className="product-card"
                                    onClick={() => setSelectedProduct(p)}
                                >
                                    <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                                        <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.6s ease' }} className="card-img" />
                                        <div style={{ position: 'absolute', top: '15px', right: '15px', background: 'rgba(255,255,255,0.95)', padding: '0.4rem 0.8rem', borderRadius: '8px', fontSize: '0.65rem', fontWeight: 900, color: 'var(--primary)', backdropFilter: 'blur(5px)' }}>{p.code}</div>
                                        <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', height: '50%', background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }} />
                                    </div>

                                    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                            <span style={{ fontSize: '0.7rem', fontWeight: 900, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>{p.category}</span>
                                            <div style={{ display: 'flex', gap: '2px' }}>
                                                {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="var(--accent)" color="var(--accent)" />)}
                                            </div>
                                        </div>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1e293b', marginBottom: '1.25rem', minHeight: '3rem', lineHeight: 1.25 }}>{p.name}</h3>

                                        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div style={{ padding: '0.6rem 1rem', borderRadius: '10px', background: '#f1f5f9', color: '#475569', fontSize: '0.75rem', fontWeight: 700 }}>EXPLORE SPECS</div>
                                            <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <ArrowRight size={18} />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredProducts.length > visibleCount && (
                        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
                            <button
                                onClick={() => setVisibleCount(prev => prev + 16)}
                                className="bright-load-btn"
                                style={{
                                    padding: '1.2rem 4rem',
                                    borderRadius: '100px',
                                    background: 'var(--primary)',
                                    color: '#fff',
                                    border: 'none',
                                    fontWeight: 900,
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    fontSize: '0.85rem',
                                    cursor: 'pointer',
                                    boxShadow: '0 10px 30px rgba(27, 77, 46, 0.2)'
                                }}
                            >
                                Unlock More Varieties
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <div style={{ position: 'fixed', inset: 0, zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProduct(null)} style={{ position: 'absolute', inset: 0, background: 'rgba(15, 23, 42, 0.95)', backdropFilter: 'blur(15px)' }} />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 150 }}
                            style={{
                                background: '#fff',
                                maxWidth: '1200px',
                                width: '100%',
                                borderRadius: '40px',
                                overflow: 'hidden',
                                position: 'relative',
                                display: 'flex',
                                maxHeight: '90vh',
                                boxShadow: '0 50px 100px rgba(0,0,0,0.8)',
                                zIndex: 2001
                            }}
                            className="modal-inner"
                        >
                            <button onClick={() => setSelectedProduct(null)} style={{ position: 'absolute', top: '20px', right: '20px', width: '45px', height: '45px', borderRadius: '50%', background: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 100, boxShadow: '0 10px 25px rgba(0,0,0,0.2)', color: '#000' }}>
                                <X size={20} />
                            </button>

                            {/* Left Image Panel */}
                            <div className="modal-image-panel" style={{ width: '45%', position: 'relative', flexShrink: 0, background: '#000' }}>
                                <motion.img
                                    initial={{ scale: 1.2 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 1.5 }}
                                    src={selectedProduct.image}
                                    alt={selectedProduct.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(27, 77, 46, 0.6), transparent 70%, rgba(0,0,0,0.3))' }} />
                                <div className="modal-image-text" style={{ position: 'absolute', bottom: '40px', left: '30px', right: '30px', color: '#fff' }}>
                                    <motion.div
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        style={{ background: 'var(--accent)', color: 'var(--primary)', padding: '0.5rem 1.2rem', borderRadius: '12px', display: 'inline-block', fontWeight: 900, fontSize: '0.75rem', marginBottom: '1rem', letterSpacing: '2px' }}
                                    >
                                        SKU: {selectedProduct.code}
                                    </motion.div>
                                    <motion.h2
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        style={{ fontSize: 'clamp(1.8rem, 3vw, 3.5rem)', fontFamily: 'var(--font-serif)', lineHeight: 1.1, marginBottom: '1rem', textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}
                                    >
                                        {selectedProduct.name}
                                    </motion.h2>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                        style={{ width: '80px', height: '5px', background: 'var(--accent)', borderRadius: '3px' }}
                                    />
                                </div>
                            </div>

                            {/* Right Details Panel */}
                            <div style={{ width: '55%', display: 'flex', flexDirection: 'column', background: '#f8fafc' }} className="modal-details-panel">
                                <div style={{ padding: 'clamp(2rem, 5vw, 5rem)', overflowY: 'auto', flexGrow: 1 }} className="modal-scroll-area">
                                    <div style={{ marginBottom: '2rem' }}>
                                        <div style={{ width: '60px', height: '4px', background: 'var(--accent)', borderRadius: '2px' }} />
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
                                        {Object.entries(selectedProduct.details).map(([key, value], idx) => (
                                            <motion.div
                                                key={key}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 + idx * 0.05 }}
                                                style={{
                                                    background: '#fff',
                                                    padding: '1.5rem',
                                                    borderRadius: '20px',
                                                    boxShadow: '0 10px 25px rgba(0,0,0,0.03)',
                                                    border: '1px solid rgba(0,0,0,0.02)',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '0.5rem'
                                                }}
                                            >
                                                <span style={{ textTransform: 'uppercase', fontWeight: 800, fontSize: '0.6rem', color: '#94a3b8', letterSpacing: '1px' }}>{key.replace(/_/g, ' ')}</span>
                                                <span style={{ fontWeight: 900, fontSize: '1rem', color: 'var(--primary)' }}>{value as string}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        style={{ background: 'linear-gradient(135deg, var(--primary), #0a1f13)', padding: '2.5rem', borderRadius: '28px', color: '#fff', boxShadow: '0 20px 40px rgba(27, 77, 46, 0.2)', position: 'relative', overflow: 'hidden' }}
                                    >
                                        <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.1 }}>
                                            <Info size={120} />
                                        </div>
                                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 900, fontSize: '0.9rem', marginBottom: '1.2rem', letterSpacing: '1px' }}>
                                            <Star size={18} fill="var(--accent)" color="var(--accent)" /> FIELD ANALYST REPORT
                                        </h4>
                                        <p style={{ fontSize: '1rem', lineHeight: 1.8, fontWeight: 500, opacity: 0.9 }}>
                                            {selectedProduct.details.remarks || "Performance optimized hybrid variety. Exhibits exceptional vigor in primary growth phases and demonstrates robust immunity to common local pathogens."}
                                        </p>
                                    </motion.div>

                                    <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                        <div style={{ padding: '0.8rem 1.5rem', borderRadius: '12px', background: '#dcfce7', color: '#166534', fontWeight: 800, fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <CheckCircle2 size={15} /> CERTIFIED SEED
                                        </div>
                                        <div style={{ padding: '0.8rem 1.5rem', borderRadius: '12px', background: '#fef9c3', color: '#854d0e', fontWeight: 800, fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <ShieldCheck size={15} /> ISO AUTHENTICATED
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <style jsx>{`
                /* Scrollbar */
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                .modal-scroll-area::-webkit-scrollbar { width: 6px; }
                .modal-scroll-area::-webkit-scrollbar-track { background: #f1f5f9; }
                .modal-scroll-area::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }

                /* Interactions */
                .sidebar-cat-btn:hover { background: #f1f5f9 !important; padding-left: 1.5rem !important; }
                .sidebar-search:focus { background: #fff !important; border-color: var(--primary) !important; box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
                .product-card:hover .card-img { scale: 1.1; }
                .product-card:hover { box-shadow: 0 20px 50px rgba(27, 77, 46, 0.1) !important; }
                .bright-load-btn:hover { background: #0a1f13 !important; transform: translateY(-5px); box-shadow: 0 15px 40px rgba(27, 77, 46, 0.3); }

                /* ── TABLET (≤1024px) ── */
                @media (max-width: 1024px) {
                    .desktop-sidebar { display: none !important; }
                    .mobile-filter-btn { display: flex !important; }
                    .mobile-backdrop { display: block !important; }
                    .product-grid {
                        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)) !important;
                        gap: 1.5rem !important;
                    }
                    .header-badges { display: none !important; }
                }

                /* ── MOBILE (≤640px) ── */
                @media (max-width: 640px) {
                    .product-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 1rem !important;
                    }
                    .product-card { border-radius: 16px !important; }
                    .product-card .card-img-wrap { height: 160px !important; }
                    .bright-load-btn { padding: 1rem 2.5rem !important; font-size: 0.8rem !important; }
                }

                /* ── SMALL MOBILE (≤400px) ── */
                @media (max-width: 400px) {
                    .product-grid {
                        grid-template-columns: 1fr !important;
                    }
                }

                /* ── MODAL RESPONSIVE ── */
                @media (max-width: 768px) {
                    .modal-inner {
                        flex-direction: column !important;
                        border-radius: 24px !important;
                        max-height: 95vh !important;
                    }
                    .modal-image-panel {
                        width: 100% !important;
                        height: 220px !important;
                        flex-shrink: 0 !important;
                    }
                    .modal-details-panel {
                        width: 100% !important;
                    }
                    .modal-image-text {
                        bottom: 16px !important;
                        left: 16px !important;
                        right: 16px !important;
                    }
                }
            `}</style>
        </section>
    );
}