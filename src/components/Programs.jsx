// ============================================================
// Programs.jsx — Fitness programs & classes section
// Features: Filterable program cards with hover expand effect
// ============================================================

import React, { useState } from 'react';

// All program data
const allPrograms = [
  {
    id: 1,
    category: 'Strength',
    icon: '🏋️',
    name: 'Powerlifting Fundamentals',
    desc: 'Master the squat, bench, and deadlift with structured progression and expert form coaching. Ideal for beginners and intermediates.',
    duration: '60 min',
    level: 'All Levels',
    schedule: 'Mon / Wed / Fri',
    color: '#E8232A',
  },
  {
    id: 2,
    category: 'Cardio',
    icon: '🔥',
    name: 'HIIT Burn Circuit',
    desc: 'High-Intensity Interval Training that torches fat and builds endurance. 45 minutes, maximum results. Burn up to 800 calories per session.',
    duration: '45 min',
    level: 'Intermediate',
    schedule: 'Tue / Thu / Sat',
    color: '#FF6B35',
  },
  {
    id: 3,
    category: 'Combat',
    icon: '🥊',
    name: 'Boxing & Kickboxing',
    desc: 'Learn real boxing technique, build explosive power, coordination, and confidence. Sparring sessions available for advanced students.',
    duration: '60 min',
    level: 'All Levels',
    schedule: 'Mon / Wed / Sat',
    color: '#9B59B6',
  },
  {
    id: 4,
    category: 'Wellness',
    icon: '🧘',
    name: 'Yoga & Mobility Flow',
    desc: 'Improve flexibility, reduce injury risk, and build mental clarity. Our certified yoga instructors blend traditional and modern techniques.',
    duration: '75 min',
    level: 'All Levels',
    schedule: 'Tue / Thu / Sun',
    color: '#27AE60',
  },
  {
    id: 5,
    category: 'Cardio',
    icon: '🚴',
    name: 'Spin Cycling',
    desc: 'Indoor cycling classes with music, lighting, and a coach who pushes you past what you thought possible. Great for all fitness levels.',
    duration: '45 min',
    level: 'All Levels',
    schedule: 'Daily 6 AM & 7 PM',
    color: '#2980B9',
  },
  {
    id: 6,
    category: 'Strength',
    icon: '💪',
    name: 'Body Transformation',
    desc: '12-week body recomposition program. Custom nutrition plan, progressive overload training, and weekly check-ins with a dedicated coach.',
    duration: '75 min',
    level: 'Beginner–Intermediate',
    schedule: 'Mon / Tue / Thu / Sat',
    color: '#E8232A',
  },
];

const categories = ['All', 'Strength', 'Cardio', 'Combat', 'Wellness'];

// Single program card
const ProgramCard = ({ program }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ overflow: 'hidden', position: 'relative' }}
    >
      {/* Colored top bar */}
      <div style={{ height: '3px', background: program.color }} />

      <div style={{ padding: '28px' }}>
        {/* Icon + Category badge */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <span style={{ fontSize: '36px', lineHeight: 1 }}>{program.icon}</span>
          <span style={{
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: program.color,
            background: `${program.color}18`,
            border: `1px solid ${program.color}40`,
            padding: '4px 10px',
          }}>
            {program.category}
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '22px',
          letterSpacing: '0.04em',
          color: 'white',
          marginBottom: '10px',
        }}>
          {program.name}
        </h3>

        {/* Description */}
        <p style={{
          fontSize: '13px',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
          marginBottom: '20px',
        }}>
          {program.desc}
        </p>

        {/* Meta row */}
        <div style={{
          display: 'flex',
          gap: '20px',
          paddingTop: '16px',
          borderTop: '1px solid var(--border)',
          flexWrap: 'wrap',
        }}>
          {[
            { icon: '⏱', val: program.duration },
            { icon: '📊', val: program.level },
            { icon: '📅', val: program.schedule },
          ].map(({ icon, val }) => (
            <div key={val} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '12px' }}>{icon}</span>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.05em' }}>{val}</span>
            </div>
          ))}
        </div>

        {/* Hover CTA */}
        <div style={{
          marginTop: '20px',
          overflow: 'hidden',
          maxHeight: hovered ? '60px' : '0',
          transition: 'max-height 0.35s ease',
        }}>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              width: '100%',
              padding: '12px',
              background: program.color,
              border: 'none',
              color: 'white',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
            }}
          >
            Enrol in this class →
          </button>
        </div>
      </div>
    </div>
  );
};

const Programs = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? allPrograms
    : allPrograms.filter(p => p.category === activeCategory);

  return (
    <section id="programs" style={{ padding: 'var(--section-pad)', background: 'var(--dark)' }}>
      <div className="container">

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Programs</div>
          <h2 className="section-title">
            Train With <em>Purpose</em>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From strength and conditioning to mindfulness — we offer programs for every goal, every level, every schedule.
          </p>
        </div>

        {/* ── Category Filter ── */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '48px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '10px 24px',
                background: activeCategory === cat ? 'var(--red)' : 'transparent',
                border: `1px solid ${activeCategory === cat ? 'var(--red)' : 'rgba(255,255,255,0.15)'}`,
                color: activeCategory === cat ? 'white' : 'var(--text-secondary)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                transition: 'all 0.25s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Program Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
        }}>
          {filtered.map(p => <ProgramCard key={p.id} program={p} />)}
        </div>
      </div>
    </section>
  );
};

export default Programs;
