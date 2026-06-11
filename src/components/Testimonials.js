// Testimonials.js — Member reviews section
// Auto-advances every 4 seconds, can also be manually controlled

import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    name: 'Vikram Malhotra',
    location: 'Delhi',
    type: 'Weight Loss',
    result: '-18kg in 4 months',
    stars: 5,
    initials: 'VM',
    color: '#e63946',
    text: "I joined IronForge as a complete beginner and lost 18kg in four months. Rajesh's programming was exactly what I needed — challenging but achievable. The coaches genuinely care about your progress.",
  },
  {
    name: 'Ananya Singh',
    location: 'Gurgaon',
    type: 'Strength Gain',
    result: 'Deadlift: 40→100kg',
    stars: 5,
    initials: 'AS',
    color: '#f4a261',
    text: "Six months ago I couldn't deadlift 40kg. Today I'm pulling 100kg. The programming at IronForge is science-backed and the coaches push you beyond what you think is possible. Best gym in NCR.",
  },
  {
    name: 'Rohit Kapoor',
    location: 'Noida',
    type: 'Muscle Building',
    result: '+9kg lean muscle',
    stars: 5,
    initials: 'RK',
    color: '#4ecdc4',
    text: "The equipment is world-class and always available. The community here is motivating without being intimidating. Gained 9kg of lean muscle in 6 months following their hypertrophy program.",
  },
  {
    name: 'Deepa Menon',
    location: 'Faridabad',
    type: 'Overall Fitness',
    result: '2x energy levels',
    stars: 5,
    initials: 'DM',
    color: '#9b59b6',
    text: "The yoga and HIIT combo sessions with Priya and Meera have completely changed my energy levels. I sleep better, feel stronger, and my stress is way down. Worth every rupee.",
  },
  {
    name: 'Siddharth Rao',
    location: 'Delhi',
    type: 'Boxing',
    result: 'State-level amateur',
    stars: 5,
    initials: 'SR',
    color: '#51cf66',
    text: "Arjun's boxing program took me from zero to competing at the state amateur level in 10 months. His technical knowledge is unmatched and the sessions are incredibly well-structured.",
  },
];

function Stars({ count }) {
  return (
    <div className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} aria-hidden="true">★</span>
      ))}
    </div>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setActive(prev => (prev + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const t = TESTIMONIALS[active];

  return (
    <div className="testimonials-wrapper section-wrapper" id="testimonials">
      <div className="testimonials section">
        {/* Header */}
        <span className="section-label">Member Stories</span>
        <h2 className="section-title">
          REAL PEOPLE.<br /><em>REAL RESULTS.</em>
        </h2>

        {/* Main testimonial display */}
        <div className="testimonials__showcase" key={active}>
          {/* Quote */}
          <div className="testimonials__quote">
            <Stars count={t.stars} />
            <blockquote className="testimonials__text">
              "{t.text}"
            </blockquote>

            {/* Author */}
            <div className="testimonials__author">
              <div
                className="testimonials__avatar"
                style={{ background: `${t.color}22`, border: `2px solid ${t.color}44`, color: t.color }}
                aria-hidden="true"
              >
                {t.initials}
              </div>
              <div>
                <strong className="testimonials__name">{t.name}</strong>
                <span className="testimonials__location">{t.location} · {t.type}</span>
              </div>
              {/* Result badge */}
              <div className="testimonials__result" style={{ background: `${t.color}15`, color: t.color, border: `1px solid ${t.color}33` }}>
                {t.result}
              </div>
            </div>
          </div>
        </div>

        {/* Dot navigation */}
        <div className="testimonials__dots" role="tablist" aria-label="Testimonial navigation">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`testimonials__dot ${i === active ? 'testimonials__dot--active' : ''}`}
              onClick={() => setActive(i)}
              role="tab"
              aria-selected={i === active}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Preview thumbnails row */}
        <div className="testimonials__previews" role="list" aria-label="Other testimonials">
          {TESTIMONIALS.map((item, i) => (
            <button
              key={i}
              className={`testimonials__preview ${i === active ? 'testimonials__preview--active' : ''}`}
              onClick={() => setActive(i)}
              style={{ borderColor: i === active ? item.color : 'transparent' }}
              role="listitem"
              aria-label={`${item.name}'s testimonial`}
            >
              <div
                className="testimonials__preview-avatar"
                style={{ background: `${item.color}22`, color: item.color }}
                aria-hidden="true"
              >
                {item.initials}
              </div>
              <div className="testimonials__preview-info">
                <strong>{item.name}</strong>
                <span>{item.result}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
