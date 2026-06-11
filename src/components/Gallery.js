// Gallery.js — Visual gallery section
// Uses CSS gradient blocks to represent gym photos (no external images needed)
// Each block has a label, aspect-ratio styling, and hover overlay

import React, { useState } from 'react';
import './Gallery.css';

// Gallery items — uses CSS gradients as stand-in for real photos
// In production, replace `gradient` with `imageUrl` pointing to real gym photos
const GALLERY_ITEMS = [
  { id: 1, label: 'Strength Floor',     gradient: 'linear-gradient(135deg, #1a0a0a 0%, #3d0f0f 50%, #1a0a0a 100%)', tag: 'Equipment',  size: 'large'  },
  { id: 2, label: 'Boxing Ring',        gradient: 'linear-gradient(135deg, #0a0a1a 0%, #0f0f3d 50%, #0a0a1a 100%)', tag: 'Combat',     size: 'small'  },
  { id: 3, label: 'Cardio Zone',        gradient: 'linear-gradient(135deg, #0a1a0a 0%, #0f3d0f 50%, #0a1a0a 100%)', tag: 'Cardio',     size: 'small'  },
  { id: 4, label: 'Yoga Studio',        gradient: 'linear-gradient(135deg, #1a0a1a 0%, #3d0f3d 50%, #1a0a1a 100%)', tag: 'Wellness',   size: 'medium' },
  { id: 5, label: 'Personal Training',  gradient: 'linear-gradient(135deg, #1a1a0a 0%, #3d3d0f 50%, #1a1a0a 100%)', tag: 'Training',   size: 'medium' },
  { id: 6, label: 'Locker Rooms',       gradient: 'linear-gradient(135deg, #0a1a1a 0%, #0f3d3d 50%, #0a1a1a 100%)', tag: 'Amenities',  size: 'small'  },
];

function GalleryItem({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <figure
      className={`gallery-item gallery-item--${item.size} ${hovered ? 'gallery-item--hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="img"
      aria-label={item.label}
    >
      {/* Background — swap with real <img> in production */}
      <div
        className="gallery-item__bg"
        style={{ background: item.gradient }}
        aria-hidden="true"
      />

      {/* Decorative grid overlay for depth */}
      <div className="gallery-item__grid" aria-hidden="true" />

      {/* Hover overlay with label */}
      <figcaption className={`gallery-item__overlay ${hovered ? 'gallery-item__overlay--show' : ''}`}>
        <span className="gallery-item__tag">{item.tag}</span>
        <strong className="gallery-item__label">{item.label}</strong>
      </figcaption>

      {/* Always-visible subtle tag */}
      {!hovered && (
        <div className="gallery-item__tag-idle" aria-hidden="true">{item.tag}</div>
      )}
    </figure>
  );
}

function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="section">
        <span className="section-label">The Space</span>
        <h2 className="section-title">
          WORLD-CLASS<br /><em>FACILITY</em>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: '48px' }}>
          Over 10,000 sq. ft. of premium training space. Every piece of equipment selected for performance, durability, and results.
        </p>

        {/* Mosaic gallery grid */}
        <div className="gallery-grid" role="list" aria-label="Gym facility gallery">
          {GALLERY_ITEMS.map(item => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </div>

        {/* Amenities strip */}
        <div className="gallery-amenities">
          {[
            ['🏋️', '200+ Equipment pieces'],
            ['🚿', 'Premium locker rooms'],
            ['🧊','Ice bath & recovery'],
            ['🥤', 'Protein bar & café'],
            ['📱', 'App-based booking'],
            ['🅿️', 'Free parking'],
          ].map(([icon, text]) => (
            <div key={text} className="gallery-amenity">
              <span aria-hidden="true">{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
