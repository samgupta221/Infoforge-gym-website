// ============================================================
// Navbar.jsx — Sticky navigation with scroll shrink effect
// Includes: Logo, nav links, mobile hamburger menu, CTA button
// ============================================================

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  // Track scroll position to shrink nav on scroll
  const [scrolled, setScrolled] = useState(false);
  // Toggle mobile menu open/close
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Smooth scroll to section
  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About',     id: 'about'     },
    { label: 'Programs',  id: 'programs'  },
    { label: 'Trainers',  id: 'trainers'  },
    { label: 'Pricing',   id: 'pricing'   },
    { label: 'Gallery',   id: 'gallery'   },
    { label: 'Contact',   id: 'contact'   },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled ? 'rgba(10,10,10,0.97)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* ── Logo ── */}
          <button onClick={() => scrollTo('hero')} style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: 0,
          }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '28px',
              letterSpacing: '0.08em',
              color: 'white',
              lineHeight: 1,
            }}>
              IRON<span style={{ color: 'var(--red)' }}>FORGE</span>
            </span>
          </button>

          {/* ── Desktop Nav Links ── */}
          <ul style={{
            display: 'flex',
            gap: '36px',
            listStyle: 'none',
            alignItems: 'center',
          }} className="nav-desktop">
            {navLinks.map(link => (
              <li key={link.id}>
                <button onClick={() => scrollTo(link.id)} style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  padding: '4px 0',
                  position: 'relative',
                  transition: 'color 0.2s',
                  fontFamily: 'var(--font-body)',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'white'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* ── CTA Button (desktop) ── */}
          <button onClick={() => scrollTo('contact')} className="btn-primary" style={{ fontSize: '12px', padding: '12px 28px' }}
          >
            Join Now
          </button>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '8px 10px',
              cursor: 'pointer',
              flexDirection: 'column',
              gap: '5px',
            }}
            className="hamburger"
            aria-label="Toggle menu"
          >
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block',
                width: '22px',
                height: '2px',
                background: 'white',
                transition: 'all 0.3s',
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translate(5px,5px)'
                  : i === 2 ? 'rotate(-45deg) translate(5px,-5px)'
                  : 'scaleX(0)'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

        {/* ── Mobile Dropdown Menu ── */}
        {menuOpen && (
          <div style={{
            background: 'rgba(10,10,10,0.98)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            padding: '20px 24px 28px',
            backdropFilter: 'blur(12px)',
          }}>
            {navLinks.map(link => (
              <button key={link.id} onClick={() => scrollTo(link.id)} style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.8)',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                padding: '14px 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                fontFamily: 'var(--font-body)',
              }}>
                {link.label}
              </button>
            ))}
            <button onClick={() => scrollTo('contact')} className="btn-primary" style={{ marginTop: '20px', width: '100%', justifyContent: 'center' }}>
              Join Now
            </button>
          </div>
        )}
      </nav>

      {/* ── Responsive CSS injected inline ── */}
      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .hamburger { display: flex !important; }
          nav > .container > .btn-primary { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
