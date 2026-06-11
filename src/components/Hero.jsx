// ============================================================
// Hero.jsx — Full-screen hero section
// Features: Background grid, animated headline, stats, CTAs,
//           scrolling marquee ticker at bottom
// ============================================================

import React, { useEffect, useState } from 'react';

// ── Animated counter hook ──
const useCounter = (target, duration = 1800) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
};

// ── Single stat card ──
const StatCard = ({ value, suffix, label }) => {
  const count = useCounter(value);
  return (
    <div style={{
      textAlign: 'center',
      padding: '24px 32px',
      borderLeft: '1px solid rgba(255,255,255,0.08)',
    }}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(36px, 5vw, 56px)',
        color: 'white',
        lineHeight: 1,
      }}>
        {count}{suffix}
      </div>
      <div style={{
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginTop: '6px',
      }}>
        {label}
      </div>
    </div>
  );
};

const Hero = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  // Ticker items
  const tickers = ['💪 Elite Training', '🏋️ 50+ Equipment', '🔥 Fat Burn Programs', '🧘 Yoga & Wellness', '⚡ HIIT Classes', '🏃 Cardio Zone', '🥊 Boxing Studio', '🎯 Personal Coaching'];

  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

      {/* ── Background: Grid + Gradient ── */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          linear-gradient(180deg, rgba(10,10,10,0) 40%, rgba(10,10,10,1) 100%),
          linear-gradient(135deg, rgba(232,35,42,0.06) 0%, transparent 50%),
          var(--black)
        `,
      }} />
      {/* Grid lines */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />
      {/* Red corner accent */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '40vw', height: '40vw',
        background: 'radial-gradient(circle, rgba(232,35,42,0.12) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* ── Main Content ── */}
      <div className="container" style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '140px',
        paddingBottom: '60px',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Eyebrow */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '10px',
          marginBottom: '28px', animation: 'fadeUp 0.7s ease forwards',
        }}>
          <span style={{
            background: 'var(--red)',
            color: 'white',
            fontSize: '10px',
            fontWeight: 800,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            padding: '6px 14px',
          }}>
            Est. 2018
          </span>
          <span style={{ color: 'var(--text-muted)', fontSize: '12px', letterSpacing: '0.1em' }}>
            New Delhi's #1 Elite Gym
          </span>
        </div>

        {/* ── Big Headline ── */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(64px, 11vw, 130px)',
          lineHeight: 0.92,
          letterSpacing: '0.02em',
          marginBottom: '32px',
          animation: 'fadeUp 0.8s 0.1s ease both',
        }}>
          FORGE<br />
          YOUR <span style={{
            color: 'var(--red)',
            WebkitTextStroke: '0px',
          }}>LEGEND</span>
        </h1>

        {/* Subheadline */}
        <p style={{
          fontSize: 'clamp(15px, 2vw, 18px)',
          color: 'var(--text-secondary)',
          maxWidth: '520px',
          lineHeight: 1.7,
          marginBottom: '44px',
          animation: 'fadeUp 0.8s 0.2s ease both',
        }}>
          World-class equipment, expert coaches, and a community that pushes you beyond limits. 
          Your transformation starts the moment you walk through our doors.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex', gap: '16px', flexWrap: 'wrap',
          animation: 'fadeUp 0.8s 0.3s ease both',
        }}>
          <button onClick={() => scrollTo('contact')} className="btn-primary">
            Start Free Trial →
          </button>
          <button onClick={() => scrollTo('programs')} className="btn-outline">
            View Programs
          </button>
        </div>

        {/* ── Stats Row ── */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          marginTop: '64px',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          animation: 'fadeUp 0.8s 0.4s ease both',
        }}>
          <StatCard value={5000} suffix="+" label="Active Members" />
          <StatCard value={18}   suffix=""  label="Expert Trainers" />
          <StatCard value={50}   suffix="+" label="Weekly Classes" />
          <StatCard value={7}    suffix=""  label="Years of Excellence" />
        </div>
      </div>

      {/* ── Scrolling Ticker ── */}
      <div style={{
        position: 'relative', zIndex: 1,
        background: 'var(--red)',
        overflow: 'hidden',
        padding: '14px 0',
      }}>
        <div style={{
          display: 'flex',
          width: 'max-content',
          animation: 'slideLeft 25s linear infinite',
          gap: '48px',
        }}>
          {[...tickers, ...tickers].map((t, i) => (
            <span key={i} style={{
              whiteSpace: 'nowrap',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'white',
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute',
        bottom: '80px',
        right: '32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        zIndex: 2,
      }}>
        <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase', writingMode: 'vertical-rl' }}>
          Scroll
        </span>
        <div style={{
          width: '1px',
          height: '48px',
          background: 'linear-gradient(to bottom, var(--red), transparent)',
          animation: 'pulse 1.5s ease infinite',
        }} />
      </div>
    </section>
  );
};

export default Hero;
