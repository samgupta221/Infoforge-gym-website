// Footer.js — Site footer with links, social, and copyright

import React from 'react';
import './Footer.css';

const FOOTER_LINKS = {
  'Programs': ['Powerlifting', 'HIIT Burn', 'Combat Boxing', 'CrossFit WOD', 'Yoga & Mobility', 'Personal Training'],
  'Company':  ['About IronForge', 'Our Coaches', 'Careers', 'Press Kit', 'Contact Us'],
  'Support':  ['FAQ', 'Membership Guide', 'Class Schedule', 'Refund Policy', 'Privacy Policy'],
};

const SOCIALS = [
  { label: 'Instagram', icon: '📸', href: '#' },
  { label: 'YouTube',   icon: '▶️',  href: '#' },
  { label: 'Facebook',  icon: '👥',  href: '#' },
  { label: 'WhatsApp',  icon: '💬',  href: 'https://wa.me/911234567890' },
];

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      {/* Newsletter strip */}
      <div className="footer-newsletter">
        <div className="footer-newsletter__inner">
          <div>
            <h3 className="footer-newsletter__title">GET FIT TIPS IN YOUR INBOX</h3>
            <p className="footer-newsletter__desc">Weekly workout tips, nutrition advice, and member offers.</p>
          </div>
          <div className="footer-newsletter__form">
            <input
              type="email"
              placeholder="your@email.com"
              className="footer-newsletter__input"
              aria-label="Email for newsletter"
            />
            <button className="btn-primary footer-newsletter__btn">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="footer-main">
        {/* Brand column */}
        <div className="footer-brand">
          <div className="footer-brand__logo">
            <span aria-hidden="true">⚡</span>
            <span>IRON<em>FORGE</em></span>
          </div>
          <p className="footer-brand__tagline">
            Where champions are built. A premium gym dedicated to your transformation — body, mind, and performance.
          </p>
          {/* Social icons */}
          <div className="footer-socials" role="list" aria-label="Social media links">
            {SOCIALS.map(s => (
              <a
                key={s.label}
                href={s.href}
                className="footer-social"
                aria-label={s.label}
                role="listitem"
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(FOOTER_LINKS).map(([category, links]) => (
          <div key={category} className="footer-col">
            <h4 className="footer-col__heading">{category}</h4>
            <ul className="footer-col__links" role="list">
              {links.map(link => (
                <li key={link}>
                  <a href="#" className="footer-col__link">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} IronForge Gym, Gurgaon. All rights reserved.</p>
        <p>
          Made with ❤️ for fitness enthusiasts across India
        </p>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/911234567890?text=Hi! I'd like to book a free trial at IronForge Gym."
        className="footer-whatsapp"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        💬 Book via WhatsApp
      </a>
    </footer>
  );
}

export default Footer;
