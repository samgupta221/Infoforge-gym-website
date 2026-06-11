// Hero.js — Full-viewport hero section
// Uses CSS background gradients to simulate a dramatic gym atmosphere
// No external images needed — achieves depth with layered CSS

import React, { useEffect, useState } from 'react';
import './Hero.css';

function Hero({ onJoinClick }) {
  // Animate headline words appearing one by one on load
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Short delay so it's noticeable after page load
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="hero" aria-label="Hero banner">

      {/* Decorative background layers */}
      <div className="hero__bg">
        <div className="hero__bg-grid" aria-hidden="true" />
        <div className="hero__bg-vignette" aria-hidden="true" />
        {/* Animated red accent orb */}
        <div className="hero__bg-orb" aria-hidden="true" />
      </div>

      {/* Main hero content */}
      <div className={`hero__content ${visible ? 'hero__content--visible' : ''}`}>

        {/* Eyebrow label */}
        <span className="section-label">Est. 2018 · Delhi NCR</span>

        {/* Large display headline — split into words for staggered animation */}
        <h1 className="hero__headline">
          <span className="hero__word hero__word--1">FORGE</span>
          <span className="hero__word hero__word--2">YOUR</span>
          <span className="hero__word hero__word--3"><em>BEST</em></span>
          <span className="hero__word hero__word--4">SELF</span>
        </h1>

        {/* Sub-tagline */}
        <p className="hero__tagline">
          World-class equipment. Expert coaches. Zero excuses.
          <br />
          IronForge is where transformation begins.
        </p>

        {/* CTA buttons */}
        <div className="hero__actions">
          <button className="btn-primary hero__cta-primary" onClick={onJoinClick}>
            Start Free Trial
            <span aria-hidden="true">→</span>
          </button>
          <a href="#programs" className="btn-ghost">
            View Programs
          </a>
        </div>

        {/* Quick trust-building stats row */}
        <div className="hero__badges" role="list" aria-label="Key stats">
          <div className="hero__badge" role="listitem">
            <strong>5000+</strong>
            <span>Active Members</span>
          </div>
          <div className="hero__badge-sep" aria-hidden="true" />
          <div className="hero__badge" role="listitem">
            <strong>20+</strong>
            <span>Expert Coaches</span>
          </div>
          <div className="hero__badge-sep" aria-hidden="true" />
          <div className="hero__badge" role="listitem">
            <strong>4.9★</strong>
            <span>Google Rating</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>

      {/* Marquee ticker at the bottom — like the reference site */}
      <div className="hero__ticker" aria-hidden="true">
        <div className="hero__ticker-track">
          {/* Duplicate items so the scroll loops seamlessly */}
          {[...Array(2)].map((_, i) => (
            <span key={i} className="hero__ticker-items">
              💪 Strength Training &nbsp;✦&nbsp;
              🏃 Cardio &nbsp;✦&nbsp;
              🥊 Boxing &nbsp;✦&nbsp;
              🧘 Yoga &nbsp;✦&nbsp;
              🏋️ Powerlifting &nbsp;✦&nbsp;
              🔥 HIIT &nbsp;✦&nbsp;
              🤸 CrossFit &nbsp;✦&nbsp;
              🎯 Personal Training &nbsp;✦&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
