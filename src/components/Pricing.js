// Pricing.js — Membership pricing section with toggle (Monthly/Annual)
// Annual toggle shows discounted prices

import React, { useState } from 'react';
import './Pricing.css';

const PLANS = [
  {
    name: 'Starter',
    icon: '🌱',
    monthlyPrice: 999,
    yearlyPrice: 799,   // per month when billed annually
    desc: 'Perfect for beginners building the fitness habit.',
    features: [
      { text: 'Gym access (6am–10pm)', included: true  },
      { text: 'All cardio equipment',   included: true  },
      { text: '1 group class/week',     included: true  },
      { text: 'Locker room access',     included: true  },
      { text: 'Personal trainer',       included: false },
      { text: 'Nutrition consultation', included: false },
      { text: 'Guest passes',          included: false },
    ],
    cta: 'Get Started',
    highlight: false,
    badge: null,
  },
  {
    name: 'Performance',
    icon: '⚡',
    monthlyPrice: 1999,
    yearlyPrice: 1599,
    desc: 'Our most popular plan — everything you need to transform.',
    features: [
      { text: 'Unlimited gym access',        included: true },
      { text: 'All equipment & classes',     included: true },
      { text: 'Unlimited group classes',     included: true },
      { text: '2 PT sessions/month',         included: true },
      { text: 'Nutrition consultation',      included: true },
      { text: '2 guest passes/month',        included: true },
      { text: 'Priority class booking',      included: false },
    ],
    cta: 'Join Performance',
    highlight: true,  // featured card
    badge: 'Most Popular',
  },
  {
    name: 'Elite',
    icon: '👑',
    monthlyPrice: 3499,
    yearlyPrice: 2799,
    desc: 'The full IronForge experience. No limits.',
    features: [
      { text: '24/7 gym access',             included: true },
      { text: 'All equipment & classes',     included: true },
      { text: 'Unlimited group classes',     included: true },
      { text: '8 PT sessions/month',         included: true },
      { text: 'Monthly nutrition plan',      included: true },
      { text: 'Unlimited guest passes',      included: true },
      { text: 'Priority class booking',      included: true },
    ],
    cta: 'Go Elite',
    highlight: false,
    badge: null,
  },
];

function PricingCard({ plan, annual, onJoinClick }) {
  // Calculate displayed price based on billing toggle
  const price = annual ? plan.yearlyPrice : plan.monthlyPrice;
  const saved = plan.monthlyPrice - plan.yearlyPrice;

  return (
    <article className={`pricing-card ${plan.highlight ? 'pricing-card--featured' : ''}`}>
      {/* Popular badge */}
      {plan.badge && (
        <div className="pricing-card__badge">{plan.badge}</div>
      )}

      {/* Plan header */}
      <div className="pricing-card__header">
        <span className="pricing-card__icon" aria-hidden="true">{plan.icon}</span>
        <h3 className="pricing-card__name">{plan.name}</h3>
        <p className="pricing-card__desc">{plan.desc}</p>
      </div>

      {/* Price display */}
      <div className="pricing-card__price">
        <span className="pricing-card__currency">₹</span>
        <span className="pricing-card__amount">{price.toLocaleString()}</span>
        <span className="pricing-card__period">/mo</span>
      </div>

      {/* Annual savings note */}
      {annual && (
        <div className="pricing-card__saving">
          Save ₹{(saved * 12).toLocaleString()}/year
        </div>
      )}

      {/* Feature checklist */}
      <ul className="pricing-card__features" aria-label={`${plan.name} plan features`}>
        {plan.features.map((f, i) => (
          <li key={i} className={`pricing-card__feature ${f.included ? '' : 'pricing-card__feature--off'}`}>
            <span className="pricing-card__check" aria-hidden="true">
              {f.included ? '✓' : '✕'}
            </span>
            {f.text}
          </li>
        ))}
      </ul>

      {/* CTA button */}
      <button
        className={plan.highlight ? 'btn-primary pricing-card__cta' : 'btn-ghost pricing-card__cta'}
        onClick={onJoinClick}
      >
        {plan.cta}
      </button>
    </article>
  );
}

function Pricing({ onJoinClick }) {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="pricing-section" id="pricing">
      <div className="section">
        {/* Header */}
        <div className="pricing-header">
          <span className="section-label">Membership Plans</span>
          <h2 className="section-title">
            PICK YOUR<br /><em>PLAN</em>
          </h2>
          <p className="section-subtitle">
            No hidden fees. Cancel anytime. All plans include access to our world-class facility.
          </p>

          {/* Monthly / Annual toggle */}
          <div className="pricing-toggle" role="group" aria-label="Billing period">
            <button
              className={`pricing-toggle__btn ${!annual ? 'pricing-toggle__btn--active' : ''}`}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`pricing-toggle__btn ${annual ? 'pricing-toggle__btn--active' : ''}`}
              onClick={() => setAnnual(true)}
            >
              Annual
              <span className="pricing-toggle__save">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Plans grid */}
        <div className="pricing-grid" role="list" aria-label="Membership plans">
          {PLANS.map(plan => (
            <PricingCard
              key={plan.name}
              plan={plan}
              annual={annual}
              onJoinClick={onJoinClick}
            />
          ))}
        </div>

        {/* Trust note */}
        <p className="pricing-note">
          🔒 All memberships include free onboarding session · No cancellation fees · Corporate discounts available
        </p>
      </div>
    </section>
  );
}

export default Pricing;
