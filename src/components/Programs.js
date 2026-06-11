// Programs.js — Training programs grid section
// Shows available training programs with icons, descriptions, and level badges

import React, { useState } from 'react';
import './Programs.css';

// All training programs offered at the gym
const PROGRAMS = [
  {
    icon: '🏋️',
    title: 'Powerlifting',
    level: 'Intermediate',
    duration: '60 min',
    sessions: '4x/week',
    desc: 'Build raw strength through squat, bench, and deadlift progressions. Coach-guided periodized programming.',
    tags: ['Strength', 'Muscle'],
    color: 'red',
  },
  {
    icon: '🔥',
    title: 'HIIT Burn',
    level: 'All Levels',
    duration: '45 min',
    sessions: '5x/week',
    desc: 'High-intensity interval training that torches calories and builds cardiovascular endurance fast.',
    tags: ['Fat Loss', 'Cardio'],
    color: 'orange',
    popular: true, // show "Most Popular" badge
  },
  {
    icon: '🥊',
    title: 'Combat Boxing',
    level: 'Beginner',
    duration: '60 min',
    sessions: '3x/week',
    desc: 'Technique-first boxing training. Full body workout that builds agility, coordination, and confidence.',
    tags: ['Combat', 'Cardio'],
    color: 'blue',
  },
  {
    icon: '🤸',
    title: 'CrossFit WOD',
    level: 'Advanced',
    duration: '75 min',
    sessions: '6x/week',
    desc: 'Functional movements at high intensity. Every day is a different workout — never boring, always effective.',
    tags: ['Functional', 'Endurance'],
    color: 'green',
  },
  {
    icon: '🧘',
    title: 'Yoga & Mobility',
    level: 'All Levels',
    duration: '60 min',
    sessions: '7x/week',
    desc: 'Active recovery, flexibility, and mindfulness. Essential complement to any strength training program.',
    tags: ['Recovery', 'Flexibility'],
    color: 'purple',
  },
  {
    icon: '🎯',
    title: '1-on-1 Personal',
    level: 'Custom',
    duration: 'Flexible',
    sessions: 'Your schedule',
    desc: 'Completely personalized program built around your goals, timeline, and current fitness level.',
    tags: ['Custom', 'Nutrition'],
    color: 'gold',
  },
];

// Level badge colors
const LEVEL_COLORS = {
  'All Levels':   'level--green',
  'Beginner':     'level--blue',
  'Intermediate': 'level--orange',
  'Advanced':     'level--red',
  'Custom':       'level--purple',
};

function ProgramCard({ program, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`program-card program-card--${program.color} ${hovered ? 'program-card--hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Popular badge */}
      {program.popular && (
        <div className="program-card__popular">⚡ Most Popular</div>
      )}

      {/* Top row: icon + level */}
      <div className="program-card__top">
        <div className="program-card__icon">{program.icon}</div>
        <span className={`program-card__level ${LEVEL_COLORS[program.level]}`}>
          {program.level}
        </span>
      </div>

      {/* Program name */}
      <h3 className="program-card__title">{program.title}</h3>

      {/* Description */}
      <p className="program-card__desc">{program.desc}</p>

      {/* Meta info (duration + sessions) */}
      <div className="program-card__meta">
        <span>⏱ {program.duration}</span>
        <span>📅 {program.sessions}</span>
      </div>

      {/* Tag pills */}
      <div className="program-card__tags">
        {program.tags.map(tag => (
          <span key={tag} className="program-card__tag">{tag}</span>
        ))}
      </div>

      {/* CTA — appears on hover */}
      <a href="#contact" className="program-card__cta">
        Learn More →
      </a>
    </article>
  );
}

function Programs() {
  return (
    <section className="programs-section" id="programs">
      <div className="section">
        {/* Header */}
        <div className="programs-header">
          <div>
            <span className="section-label">Training Programs</span>
            <h2 className="section-title">
              TRAIN WITH<br /><em>PURPOSE</em>
            </h2>
          </div>
          <p className="section-subtitle">
            Six science-backed programs designed by certified coaches. Whether you're just starting out or competing at the highest level, we have a program built for you.
          </p>
        </div>

        {/* Programs grid */}
        <div className="programs-grid" role="list" aria-label="Training programs">
          {PROGRAMS.map((program, i) => (
            <ProgramCard key={program.title} program={program} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;
