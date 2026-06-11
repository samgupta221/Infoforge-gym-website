// App.js — IronForge Gym Website
// Main entry point that assembles all sections

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Programs from './components/Programs';
import Coaches from './components/Coaches';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';
import './App.css';

function App() {
  // Controls the "Join Now" popup modal
  const [showModal, setShowModal] = useState(false);
  // Tracks if page has been scrolled (for navbar background)
  const [scrolled, setScrolled] = useState(false);

  // Listen for scroll to add background to navbar after scrolling down
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Fixed top navigation */}
      <Navbar scrolled={scrolled} onJoinClick={() => setShowModal(true)} />

      {/* Page sections in order */}
      <Hero onJoinClick={() => setShowModal(true)} />
      <Stats />
      <Programs />
      <Coaches />
      <Pricing onJoinClick={() => setShowModal(true)} />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />

      {/* Join Now modal overlay (shown when user clicks CTA buttons) */}
      {showModal && <JoinModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;
