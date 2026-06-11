// Coaches.js — Expert coaches section
// Displays coach cards with avatar gradients, specialties, and certifications

import React from 'react';
import './Coaches.css';

const COACHES = [
  {
    name: 'Rajesh Kumar',
    role: 'Head Strength Coach',
    exp: '12 Years',
    specialties: ['Powerlifting', 'Olympic Lifting', 'Sports Performance'],
    certs: ['CSCS', 'NSCA-CPT'],
    initials: 'RK',
    color: '#e63946',
    clients: 200,
    rating: 4.9,
  },
  {
    name: 'Priya Sharma',
    role: 'HIIT & Cardio Specialist',
    exp: '8 Years',
    specialties: ['HIIT', 'Functional Training', 'Weight Loss'],
    certs: ['ACE-CPT', 'TRX Certified'],
    initials: 'PS',
    color: '#f4a261',
    clients: 320,
    rating: 5.0,
  },
  {
    name: 'Arjun Nair',
    role: 'Combat Sports Coach',
    exp: '10 Years',
    specialties: ['Boxing', 'Kickboxing', 'MMA Conditioning'],
    certs: ['Amateur Boxing Coach', 'NASM-CPT'],
    initials: 'AN',
    color: '#4ecdc4',
    clients: 150,
    rating: 4.8,
  },
  {
    name: 'Meera Joshi',
    role: 'Yoga & Recovery Expert',
    exp: '9 Years',
    specialties: ['Ashtanga Yoga', 'Mobility', 'Injury Prevention'],
    certs: ['RYT-500', 'FMS Level 2'],
    initials: 'MJ',
    color: '#9b59b6',
    clients: 280,
    rating: 5.0,
  },
];

function CoachCard({ coach }) {
  return (
    <article className="coach-card">
      {/* Avatar circle with initials and colored gradient */}
      <div
        className="coach-card__avatar"
        style={{ background: `linear-gradient(135deg, ${coach.color}33, ${coach.color}88)`, border: `2px solid ${coach.color}44` }}
        aria-hidden="true"
      >
        <span style={{ color: coach.color }}>{coach.initials}</span>
      </div>

      {/* Name + role */}
      <h3 className="coach-card__name">{coach.name}</h3>
      <p className="coach-card__role">{coach.role}</p>

      {/* Quick stats row */}
      <div className="coach-card__stats">
        <div className="coach-card__stat">
          <strong>{coach.exp}</strong>
          <span>Experience</span>
        </div>
        <div className="coach-card__stat-sep" />
        <div className="coach-card__stat">
          <strong>{coach.clients}+</strong>
          <span>Clients</span>
        </div>
        <div className="coach-card__stat-sep" />
        <div className="coach-card__stat">
          <strong>{coach.rating}★</strong>
          <span>Rating</span>
        </div>
      </div>

      {/* Specialty tags */}
      <div className="coach-card__specialties">
        {coach.specialties.map(s => (
          <span key={s} className="coach-card__specialty">{s}</span>
        ))}
      </div>

      {/* Certification badges */}
      <div className="coach-card__certs">
        {coach.certs.map(c => (
          <span key={c} className="coach-card__cert" aria-label={`Certified: ${c}`}>
            ✓ {c}
          </span>
        ))}
      </div>

      {/* Book session CTA */}
      <a href="#contact" className="coach-card__book" style={{ borderColor: `${coach.color}44`, color: coach.color }}>
        Book a Session
      </a>
    </article>
  );
}

function Coaches() {
  return (
    <div className="coaches-wrapper section-wrapper" id="coaches">
      <div className="coaches section">
        {/* Header */}
        <div className="coaches-header">
          <span className="section-label">Our Team</span>
          <h2 className="section-title">
            COACHED BY<br /><em>THE BEST</em>
          </h2>
          <p className="section-subtitle">
            Every IronForge coach is nationally certified, passionate, and obsessed with helping you reach your potential.
          </p>
        </div>

        {/* Coaches grid */}
        <div className="coaches-grid" role="list" aria-label="IronForge coaching team">
          {COACHES.map(coach => (
            <CoachCard key={coach.name} coach={coach} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Coaches;
