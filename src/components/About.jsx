// ============================================================
// About.jsx — About / Our Story section
// Features: Two-column layout, feature pillars, brand story
// ============================================================

import React from 'react';

// Feature pillar item
const Pillar = ({ icon, title, text }) => (
  <div style={{
    display: 'flex',
    gap: '18px',
    padding: '24px',
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    transition: 'border-color 0.3s',
  }}
  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-red)'}
  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
  >
    {/* Icon box */}
    <div style={{
      width: '44px',
      height: '44px',
      background: 'var(--red-glow)',
      border: '1px solid var(--border-red)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '20px',
      flexShrink: 0,
    }}>
      {icon}
    </div>
    <div>
      <div style={{ fontSize: '14px', fontWeight: 700, color: 'white', marginBottom: '6px' }}>{title}</div>
      <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{text}</div>
    </div>
  </div>
);

const About = () => {
  const pillars = [
    { icon: '🏗️', title: 'World-Class Facility',     text: '25,000 sq ft of premium equipment, dedicated zones, and modern infrastructure.' },
    { icon: '🧠', title: 'Science-Based Training',    text: 'Every program is designed with exercise science — not guesswork or trends.' },
    { icon: '🤝', title: 'Community Driven',           text: 'From day one you join a brotherhood and sisterhood of people who push each other higher.' },
    { icon: '📈', title: 'Measurable Progress',        text: 'Monthly assessments, body scans, and performance tracking keep you accountable.' },
  ];

  return (
    <section id="about" style={{ padding: 'var(--section-pad)', background: 'var(--black)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '80px',
          alignItems: 'center',
        }}>

          {/* ── Left Column: Text ── */}
          <div>
            <div className="section-eyebrow">Our Story</div>
            <h2 className="section-title">
              Built for<br /><em>Champions.</em><br />Open to All.
            </h2>
            <div className="red-line" />
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
              IronForge was founded in 2018 with one belief: every person who steps inside deserves access 
              to professional-grade training, real coaching, and a space that demands their best.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '36px' }}>
              We've trained thousands of members — from absolute beginners to competitive athletes and 
              national-level bodybuilders. Our approach is simple: serious infrastructure, serious coaching, 
              and a culture where mediocrity has no address.
            </p>

            {/* Quick Facts */}
            <div style={{ display: 'flex', gap: '40px', borderTop: '1px solid var(--border)', paddingTop: '32px' }}>
              {[
                { num: '5,000+', label: 'Members' },
                { num: '18',     label: 'Certified Trainers' },
                { num: '4.9★',   label: 'Google Rating' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '32px', color: 'var(--red)', lineHeight: 1 }}>{num}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column: Pillars Grid ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {pillars.map(p => <Pillar key={p.title} {...p} />)}

            {/* Big CTA card at bottom spanning full width */}
            <div style={{
              gridColumn: '1 / -1',
              padding: '28px',
              background: 'var(--red)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
            }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', letterSpacing: '0.05em', color: 'white' }}>
                  READY TO TRANSFORM?
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', marginTop: '4px' }}>
                  First 7 days completely free. No credit card needed.
                </div>
              </div>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  background: 'white',
                  color: 'var(--red)',
                  padding: '12px 28px',
                  border: 'none',
                  fontWeight: 800,
                  fontSize: '12px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                Claim Free Trial →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
