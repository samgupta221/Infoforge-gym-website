// Contact.js — Contact & booking section
// Contains a working contact form with validation and success state

import React, { useState } from 'react';
import './Contact.css';

// Form fields configuration
const GOALS = ['Weight Loss', 'Muscle Gain', 'General Fitness', 'Strength', 'Sports Performance', 'Yoga/Wellness'];

// Simple email format validator
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

function Contact() {
  // Form state
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    goal: '',
    plan: '',
    message: '',
  });

  // UI states
  const [errors, setErrors]       = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  // Update a single field
  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    // Clear that field's error as user types
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: null }));
  };

  // Validate all fields before submit
  const validate = () => {
    const e = {};
    if (!form.name.trim())         e.name    = 'Please enter your name';
    if (!form.phone.trim())        e.phone   = 'Please enter your phone number';
    if (!isValidEmail(form.email)) e.email   = 'Please enter a valid email';
    if (!form.goal)                e.goal    = 'Please select your fitness goal';
    return e;
  };

  // Handle form submit — simulates API call with a timeout
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    // Simulate sending (no real backend needed — swap for fetch() to your API)
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section">
        {/* Two-column layout: info + form */}
        <div className="contact-grid">

          {/* ── Left: Info & CTA details ── */}
          <div className="contact-info">
            <span className="section-label">Get Started</span>
            <h2 className="section-title">
              YOUR JOURNEY<br /><em>STARTS HERE</em>
            </h2>
            <p className="contact-info__desc">
              Fill out the form and our team will get back to you within 2 hours with a personalized plan and a free trial session.
            </p>

            {/* Trust badges */}
            <div className="contact-badges">
              {[
                ['✅', 'Free Trial Session'],
                ['✅', 'No commitment required'],
                ['✅', 'Response within 2 hours'],
                ['✅', 'Free fitness assessment'],
              ].map(([icon, text]) => (
                <div key={text} className="contact-badge">
                  <span>{icon}</span><span>{text}</span>
                </div>
              ))}
            </div>

            {/* Contact channels */}
            <div className="contact-channels">
              <a href="tel:+911234567890" className="contact-channel">
                <span className="contact-channel__icon" aria-hidden="true">📞</span>
                <div>
                  <strong>Call Us</strong>
                  <span>+91 12345 67890</span>
                </div>
              </a>
              <a href="https://wa.me/911234567890" className="contact-channel" target="_blank" rel="noreferrer">
                <span className="contact-channel__icon" aria-hidden="true">💬</span>
                <div>
                  <strong>WhatsApp</strong>
                  <span>Chat instantly</span>
                </div>
              </a>
              <a href="mailto:hello@ironforge.gym" className="contact-channel">
                <span className="contact-channel__icon" aria-hidden="true">✉️</span>
                <div>
                  <strong>Email</strong>
                  <span>hello@ironforge.gym</span>
                </div>
              </a>
            </div>

            {/* Address */}
            <div className="contact-address">
              <span aria-hidden="true">📍</span>
              <p>IronForge Gym, Sector 29<br />Gurgaon, Haryana – 122001<br />Open: 5am–11pm daily</p>
            </div>
          </div>

          {/* ── Right: Form or success state ── */}
          <div className="contact-form-wrapper">
            {submitted ? (
              /* Success state */
              <div className="contact-success" role="status" aria-live="polite">
                <div className="contact-success__icon" aria-hidden="true">✅</div>
                <h3>Booking Request Received!</h3>
                <p>
                  Thanks {form.name.split(' ')[0]}! Our team will contact you at <strong>{form.phone}</strong> within 2 hours with your free trial details.
                </p>
                <a href="https://wa.me/911234567890" className="btn-primary" target="_blank" rel="noreferrer">
                  Chat on WhatsApp →
                </a>
              </div>
            ) : (
              /* Contact form */
              <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Booking request form">
                <h3 className="contact-form__title">Book a Free Trial</h3>

                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                    placeholder="Rahul Sharma"
                    value={form.name}
                    onChange={e => handleChange('name', e.target.value)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && <span id="name-error" className="form-error" role="alert">{errors.name}</span>}
                </div>

                {/* Phone + Email row */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone *</label>
                    <input
                      id="phone"
                      type="tel"
                      className={`form-input ${errors.phone ? 'form-input--error' : ''}`}
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={e => handleChange('phone', e.target.value)}
                    />
                    {errors.phone && <span className="form-error" role="alert">{errors.phone}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      id="email"
                      type="email"
                      className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={e => handleChange('email', e.target.value)}
                    />
                    {errors.email && <span className="form-error" role="alert">{errors.email}</span>}
                  </div>
                </div>

                {/* Fitness goal */}
                <div className="form-group">
                  <label className="form-label">Primary Goal *</label>
                  <div className="form-goals" role="group" aria-label="Select your fitness goal">
                    {GOALS.map(goal => (
                      <button
                        key={goal}
                        type="button"
                        className={`form-goal-btn ${form.goal === goal ? 'form-goal-btn--active' : ''}`}
                        onClick={() => handleChange('goal', goal)}
                        aria-pressed={form.goal === goal}
                      >
                        {goal}
                      </button>
                    ))}
                  </div>
                  {errors.goal && <span className="form-error" role="alert">{errors.goal}</span>}
                </div>

                {/* Preferred plan */}
                <div className="form-group">
                  <label htmlFor="plan" className="form-label">Interested Plan</label>
                  <select
                    id="plan"
                    className="form-input form-select"
                    value={form.plan}
                    onChange={e => handleChange('plan', e.target.value)}
                  >
                    <option value="">Select a plan (optional)</option>
                    <option value="starter">Starter — ₹999/month</option>
                    <option value="performance">Performance — ₹1999/month</option>
                    <option value="elite">Elite — ₹3499/month</option>
                    <option value="personal">1-on-1 Personal Training</option>
                  </select>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Any questions? (Optional)</label>
                  <textarea
                    id="message"
                    className="form-input form-textarea"
                    placeholder="Tell us about your current fitness level, any injuries, or questions..."
                    rows={3}
                    value={form.message}
                    onChange={e => handleChange('message', e.target.value)}
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="btn-primary contact-form__submit" disabled={loading}>
                  {loading ? (
                    <>
                      <span className="contact-form__spinner" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>Confirm Free Trial →</>
                  )}
                </button>

                <p className="contact-form__note">
                  🔒 Your information is secure. We never share your data.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
