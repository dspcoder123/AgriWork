'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Send, Loader2 } from 'lucide-react';

export default function ContactSection() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "d5bf9dd0-1f44-499f-80a3-bf419c4a4ff2");
        formData.append("subject", "New Contact Inquiry from Agriworks Portfolio");
        // formData.append("to_email", "dspcoder123@gmail.com");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            if (data.success) {
                setIsSubmitted(true);
            } else {
                setError(data.message || "Failed to send message.");
            }
        } catch (err) {
            setError("Connection error. Please check your internet.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section className="contact-section" style={{ padding: '140px 10%', background: '#fff', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '40%', height: '60%', background: 'rgba(212, 175, 55, 0.03)', borderRadius: '50%', filter: 'blur(100px)', zIndex: 0 }} />

            <div className="contact-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
                gap: '6rem',
                maxWidth: '1600px',
                margin: '0 auto',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1
            }}>
                {/* Form Panel */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="contact-form-panel"
                    style={{
                        background: '#0d2a1a',
                        padding: '5rem',
                        borderRadius: '40px',
                        boxShadow: '0 40px 100px rgba(0,0,0,0.2)',
                        minHeight: '600px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                >
                    <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                            >
                                <div style={{ marginBottom: '3.5rem' }}>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '4px' }}>Get in Touch</span>
                                    <h2 className="contact-form-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#fff', fontFamily: 'var(--font-serif)', marginTop: '0.5rem', fontWeight: 900 }}>Let's Connect</h2>
                                </div>

                                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                                    <div className="input-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <input
                                            required
                                            name="name"
                                            type="text"
                                            placeholder="Full Name"
                                            style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.2rem', borderRadius: '12px', fontSize: '1rem', color: '#fff', outline: 'none', boxSizing: 'border-box' }}
                                            className="agri-input"
                                        />
                                        <input
                                            required
                                            name="email"
                                            type="email"
                                            placeholder="Email Address"
                                            style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.2rem', borderRadius: '12px', fontSize: '1rem', color: '#fff', outline: 'none', boxSizing: 'border-box' }}
                                            className="agri-input"
                                        />
                                    </div>

                                    <input
                                        required
                                        name="phone"
                                        type="tel"
                                        placeholder="Phone Number"
                                        style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.2rem', borderRadius: '12px', fontSize: '1rem', color: '#fff', outline: 'none', boxSizing: 'border-box' }}
                                        className="agri-input"
                                    />

                                    <textarea
                                        required
                                        name="message"
                                        rows={4}
                                        placeholder="Your Message..."
                                        style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.2rem', borderRadius: '12px', fontSize: '1rem', color: '#fff', outline: 'none', resize: 'none', boxSizing: 'border-box' }}
                                        className="agri-input"
                                    />

                                    {error && <div style={{ color: '#ff4d4d', fontSize: '0.9rem', fontWeight: 600 }}>{error}</div>}

                                    <button
                                        disabled={isLoading}
                                        type="submit"
                                        style={{
                                            background: 'var(--accent)',
                                            color: 'var(--primary)',
                                            border: 'none',
                                            padding: '1.2rem',
                                            borderRadius: '12px',
                                            fontWeight: 900,
                                            fontSize: '1rem',
                                            cursor: isLoading ? 'default' : 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '1rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '2px',
                                            opacity: isLoading ? 0.7 : 1
                                        }}
                                        className="agri-btn"
                                    >
                                        {isLoading ? <Loader2 className="spin" size={20} /> : <>Send Message <Send size={18} /></>}
                                    </button>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                style={{ textAlign: 'center' }}
                            >
                                <div style={{ width: '80px', height: '80px', background: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', color: 'var(--primary)' }}>
                                    <CheckCircle2 size={40} />
                                </div>
                                <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '1rem', fontWeight: 900 }}>Message Sent!</h2>
                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.6 }}>We have received your inquiry. <br />An expert will contact you shortly.</p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    style={{ marginTop: '2rem', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '0.8rem 2rem', borderRadius: '100px', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 600 }}
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Info Panel */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="contact-info-panel"
                >
                    <div style={{ marginBottom: '4rem' }}>
                        <span style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '5px' }}>Contact Details</span>
                        <h2 className="contact-info-heading" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', marginTop: '1rem', color: '#1e293b', fontFamily: 'var(--font-serif)', lineHeight: 1.1, fontWeight: 900 }}>
                            Reach Us <br />Directly
                        </h2>
                    </div>

                    <div style={{ display: 'grid', gap: '3rem' }}>
                        {[
                            {
                                icon: <MapPin size={28} />,
                                title: 'Address',
                                content: 'H.No. 4-5-86, Srinivasa Homes Apts, Door No. A-401, 4th Floor, Bandari Layout, Hyderabad – 500325'
                            },
                            {
                                icon: <Phone size={28} />,
                                title: 'Call Us',
                                content: '+91 7702203337',
                                highlight: true
                            },
                            {
                                icon: <Mail size={28} />,
                                title: 'Email Us',
                                content: 'agriworkinc@gmail.com',
                                highlight: true
                            }
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ width: '60px', height: '60px', background: '#f1f5f9', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '0.5rem', color: '#1e293b' }}>{item.title}</h4>
                                    <p style={{ fontSize: item.highlight ? '1.1rem' : '1.05rem', color: item.highlight ? 'var(--primary)' : '#64748b', fontWeight: item.highlight ? 700 : 400, lineHeight: 1.6 }}>
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <style>{`
                .agri-input:focus {
                    background: rgba(255,255,255,0.1) !important;
                    border-color: var(--accent) !important;
                }
                .agri-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 25px rgba(212, 175, 55, 0.4);
                    filter: brightness(1.05);
                }
                .spin { animation: spin 1s linear infinite; }
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

                /* ── TABLET (≤1024px) ── */
                @media (max-width: 1024px) {
                    .contact-section {
                        padding: 100px 6% !important;
                    }
                    .contact-grid {
                        grid-template-columns: 1fr !important;
                        gap: 4rem !important;
                    }
                    .contact-form-panel {
                        padding: 4rem 3.5rem !important;
                        border-radius: 32px !important;
                        min-height: auto !important;
                    }
                    .contact-info-panel {
                        order: -1;
                    }
                }

                /* ── MOBILE (≤768px) ── */
                @media (max-width: 768px) {
                    .contact-section {
                        padding: 70px 5% !important;
                    }
                    .contact-grid {
                        gap: 3rem !important;
                    }
                    .contact-form-panel {
                        padding: 3rem 2rem !important;
                        border-radius: 24px !important;
                    }
                    .contact-info-panel > div:first-child {
                        margin-bottom: 2.5rem !important;
                    }
                    .contact-info-heading br {
                        display: none;
                    }
                    .input-row {
                        grid-template-columns: 1fr !important;
                    }
                }

                /* ── SMALL MOBILE (≤480px) ── */
                @media (max-width: 480px) {
                    .contact-section {
                        padding: 50px 4% !important;
                    }
                    .contact-form-panel {
                        padding: 2.5rem 1.5rem !important;
                        border-radius: 20px !important;
                    }
                    .contact-grid {
                        gap: 2.5rem !important;
                    }
                }
            `}</style>
        </section>
    );
}