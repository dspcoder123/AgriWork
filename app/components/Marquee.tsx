'use client';

export default function Marquee() {
  const items = [
    "AGRIWORK SEEDS", "JPR SONS COMPANY", "PROGRESSIVE FARMING", "HIGH QUALITY HYBRIDS", "MARKET SPECIFIC VARIETIES", "SPREADING PROSPERITY", "GLOBAL STANDARDS"
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {items.concat(items).map((item, i) => (
          <span key={i} className="marquee-item">{item}</span>
        ))}
      </div>
      <style jsx>{`
        .marquee-container {
          overflow: hidden;
          background: var(--bg-offset);
          padding: 2.5rem 0;
          border-bottom: 2px solid rgba(27, 77, 46, 0.05);
          position: relative;
        }
        .marquee-content {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-item {
          display: inline-block;
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0 4rem;
          color: var(--primary);
          opacity: 0.6;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}
