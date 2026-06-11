// Stats.js — Animated number counter section
// Numbers count up when the section scrolls into view using IntersectionObserver

import React, { useEffect, useRef, useState } from 'react';
import './Stats.css';

// Data for each stat metric
const STATS = [
  { value: 5000, suffix: '+', label: 'Active Members',   desc: 'and growing every week'    },
  { value: 20,   suffix: '+', label: 'Expert Coaches',   desc: 'certified & experienced'   },
  { value: 50,   suffix: '+', label: 'Weekly Classes',   desc: 'across all fitness levels'  },
  { value: 98,   suffix: '%', label: 'Success Rate',     desc: 'members hit their goals'    },
];

// Custom hook — animates a number from 0 to `target` over `duration` ms
function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out curve: fast start, slow finish
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

// Individual stat card with its own counter
function StatCard({ value, suffix, label, desc, animate }) {
  const count = useCountUp(value, 1800, animate);

  return (
    <div className="stat-card">
      {/* Animated number */}
      <div className="stat-card__number">
        {count.toLocaleString()}<span className="stat-card__suffix">{suffix}</span>
      </div>
      <div className="stat-card__label">{label}</div>
      <div className="stat-card__desc">{desc}</div>
    </div>
  );
}

function Stats() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  // Trigger count-up animation when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimate(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats-wrapper section-wrapper">
      <div className="stats section" ref={ref}>
        <div className="stats__grid" role="list" aria-label="IronForge statistics">
          {STATS.map((stat, i) => (
            <StatCard key={i} {...stat} animate={animate} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stats;
