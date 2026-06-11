// Navbar.js — Fixed top navigation bar
// Transparent when at top, gains dark background on scroll
// Includes mobile hamburger menu

import React, { useState } from 'react';
import './Navbar.css';

// Navigation links that map to section IDs on the page
const NAV_LINKS = [
  { label: 'Programs', href: '#programs' },
  { label: 'Coaches',  href: '#coaches'  },
  { label: 'Pricing',  href: '#pricing'  },
  { label: 'Gallery',  href: '#gallery'  },
  { label: 'Contact',  href: '#contact'  },
];

function Navbar({ scrolled, onJoinClick }) {
  // Controls mobile menu open/close
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      {/* ── Brand logo ── */}
      <a href="#hero" className="navbar__logo" onClick={handleNavClick}>
        <span className="navbar__logo-icon">⚡</span>
        <span className="navbar__logo-text">
          IRON<em>FORGE</em>
        </span>
      </a>

      {/* ── Desktop nav links ── */}
      <ul className="navbar__links" role="list">
        {NAV_LINKS.map(link => (
          <li key={link.label}>
            <a href={link.href} className="navbar__link">{link.label}</a>
          </li>
        ))}
      </ul>

      {/* ── Desktop CTA button ── */}
      <button className="btn-primary navbar__cta" onClick={onJoinClick}>
        Join Now
      </button>

      {/* ── Mobile hamburger toggle ── */}
      <button
        className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
        onClick={() => setMobileOpen(prev => !prev)}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileOpen}
      >
        <span /><span /><span />
      </button>

      {/* ── Mobile dropdown menu ── */}
      {mobileOpen && (
        <div className="navbar__mobile" role="dialog" aria-label="Mobile menu">
          <ul role="list">
            {NAV_LINKS.map(link => (
              <li key={link.label}>
                <a href={link.href} className="navbar__mobile-link" onClick={handleNavClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button className="btn-primary" onClick={() => { onJoinClick(); handleNavClick(); }}>
            Join Now
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
