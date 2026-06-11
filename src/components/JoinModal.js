// JoinModal.js — "Join Now" popup modal
// Triggered by all CTA buttons across the site
// Quick sign-up form with plan selection

import React, { useState, useEffect } from 'react';
import './JoinModal.css';

const PLANS = ['Starter — ₹999/mo', 'Performance — ₹1999/mo', 'Elite — ₹3499/mo', '1-on-1 Personal Training'];

function JoinModal({ onClose }) {
  const [form, setForm]         = useState({ name: '', phone: '', plan: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    // Prevent body scroll when modal open
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1000);
  };

  return (
    /* Backdrop */
    <div
      className="modal-backdrop"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal">
        {/* Close button */}
        <button className="modal__close" onClick={onClose} aria-label="Close modal">✕</button>

        {submitted ? (
          /* Success state */
          <div className="modal__success">
            <div className="modal__success-icon" aria-hidden="true">🎉</div>
            <h2 id="modal-title">Welcome to IronForge!</h2>
            <p>We'll call you at <strong>{form.phone}</strong> within 2 hours to confirm your <strong>free trial session</strong>.</p>
            <button className="btn-primary" onClick={onClose}>Let's Go! →</button>
          </div>
        ) : (
          /* Form */
          <div className="modal__content">
            <div className="modal__header">
              <span className="section-label">Free Trial</span>
              <h2 id="modal-title" className="modal__title">START YOUR<br /><em>JOURNEY</em></h2>
              <p className="modal__subtitle">No credit card required. Just show up.</p>
            </div>

            {/* Benefits */}
            <div className="modal__perks">
              {['Free 1-day trial pass', 'Meet your coach', 'Fitness assessment', 'No commitment'].map(p => (
                <div key={p} className="modal__perk">✅ {p}</div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="modal__form" aria-label="Free trial sign-up">
              <div className="form-group">
                <label htmlFor="modal-name" className="form-label">Your Name *</label>
                <input
                  id="modal-name"
                  type="text"
                  className="form-input"
                  placeholder="Ravi Verma"
                  value={form.name}
                  onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="modal-phone" className="form-label">Phone Number *</label>
                <input
                  id="modal-phone"
                  type="tel"
                  className="form-input"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={e => setForm(prev => ({ ...prev, phone: e.target.value }))}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="modal-plan" className="form-label">Interested In</label>
                <select
                  id="modal-plan"
                  className="form-input form-select"
                  value={form.plan}
                  onChange={e => setForm(prev => ({ ...prev, plan: e.target.value }))}
                >
                  <option value="">Choose a plan (optional)</option>
                  {PLANS.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <button type="submit" className="btn-primary modal__submit" disabled={loading}>
                {loading ? 'Sending...' : 'Claim Free Trial →'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default JoinModal;
