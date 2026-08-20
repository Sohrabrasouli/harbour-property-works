"use client";
/* eslint-disable @next/next/no-img-element -- path-safe WebP images are shared by Next and the static GitHub Pages build */

import { useEffect, useState } from "react";
import { ArrowRight, Pause, Play } from "@phosphor-icons/react";

const slides = [
  {
    image: "images/hero-painting-concept.webp",
    alt: "Concept view of careful interior painting along decorative moulding",
    label: "Precision painting",
    detail: "Clean lines. Calm rooms.",
  },
  {
    image: "images/repair-concept.webp",
    alt: "Concept view of careful wall preparation and surface repair",
    label: "Surface preparation",
    detail: "Repair before finish.",
  },
  {
    image: "images/refinishing-concept.webp",
    alt: "Concept view of refined interior trim and detailed finish work",
    label: "Detail finishing",
    detail: "The final five percent matters.",
  },
];

export function HeroShowcase() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 5200);
    return () => window.clearInterval(timer);
  }, [playing]);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-gallery" aria-live="off">
        {slides.map((slide, index) => (
          <img
            className={`hero-image ${active === index ? "active" : ""}`}
            src={slide.image}
            alt={active === index ? slide.alt : ""}
            aria-hidden={active !== index}
            key={slide.image}
          />
        ))}
      </div>
      <div className="hero-shade" />

      <div className="hero-content">
        <p className="eyebrow light hero-kicker"><span />Painting-led property care · Toronto & GTA</p>
        <h1 id="hero-title">Care for every surface.<br />Confidence in every room.</h1>
        <p>Painting, repairs and finishing for homes, rentals and small commercial spaces.</p>
        <div className="hero-actions">
          <a className="primary-button" href="#planner">Plan my project<ArrowRight size={18} weight="bold" /></a>
          <a className="ghost-button" href="#services">Explore services</a>
        </div>
      </div>

      <div className="hero-story" aria-label="Featured Harbour services">
        <div className="hero-story-copy" key={active}>
          <span>0{active + 1} / 0{slides.length}</span>
          <strong>{slides[active].label}</strong>
          <small>{slides[active].detail}</small>
        </div>
        <div className="hero-controls">
          <div className="hero-dots">
            {slides.map((slide, index) => (
              <button
                type="button"
                className={active === index ? "active" : ""}
                onClick={() => setActive(index)}
                aria-label={`Show ${slide.label}`}
                aria-pressed={active === index}
                key={slide.label}
              ><span /></button>
            ))}
          </div>
          <button className="hero-play" type="button" onClick={() => setPlaying((value) => !value)} aria-label={playing ? "Pause hero slideshow" : "Play hero slideshow"}>
            {playing ? <Pause size={13} weight="fill" /> : <Play size={13} weight="fill" />}
          </button>
        </div>
      </div>

      <span className="concept-label">Concept imagery · replace with Harbour job-site photography</span>
    </section>
  );
}
