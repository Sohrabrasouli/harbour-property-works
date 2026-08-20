/* eslint-disable @next/next/no-img-element -- plain images keep the shared GitHub Pages build path-safe */
import { ArrowRight, CheckCircle, HouseLine, MapPin, PaintBrush, PaintRoller, ShieldCheck, Sparkle, Toolbox, Waves } from "@phosphor-icons/react/ssr";
import { ProjectPlanner } from "./project-planner";

const serviceGroups = [
  { icon: PaintRoller, title: "Paint", image: "/images/paint-concept.webp", items: ["Interior & exterior painting", "Walls, ceilings, trim & doors", "Condos, rentals & small commercial"] },
  { icon: Toolbox, title: "Repair", image: "/images/repair-concept.webp", items: ["Drywall & surface repair", "Popcorn ceiling removal", "General property improvements"] },
  { icon: PaintBrush, title: "Refinishing", image: "/images/refinishing-concept.webp", items: ["Cabinets & built-ins", "Wallpaper installation or removal", "Trim & carpentry"] },
  { icon: HouseLine, title: "Exterior", image: "/images/exterior-concept.webp", items: ["Exterior painting", "Deck & fence care", "Doors, siding & detail work"] },
];

const process = [
  { icon: ShieldCheck, title: "Protect", copy: "Floors, furniture and work areas are prepared first." },
  { icon: Toolbox, title: "Repair", copy: "Imperfections are addressed before finish work begins." },
  { icon: Sparkle, title: "Refine", copy: "Surfaces are smoothed and edges are carefully detailed." },
  { icon: CheckCircle, title: "Review", copy: "The finished work is cleaned and reviewed with you." },
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Harbour Property Works home"><Waves size={27} weight="bold" aria-hidden="true" /><span><strong>Harbour</strong><small>Property Works</small></span></a>
        <nav aria-label="Primary navigation"><a href="#services">Services</a><a href="#process">How it works</a><a href="#about">About</a><a href="#areas">Areas</a></nav>
        <a className="header-cta" href="#planner">Plan my project<ArrowRight size={16} weight="bold" /></a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-image" src="images/hero-painting-concept.webp" alt="Concept view of careful interior painting along decorative moulding" />
        <div className="hero-shade" />
        <div className="hero-content"><p className="eyebrow light">Painting-led property care · Toronto & GTA</p><h1 id="hero-title">Care for every surface.<br />Confidence in every room.</h1><p>Painting, repairs and finishing for homes, rentals and small commercial spaces.</p><div className="hero-actions"><a className="primary-button" href="#planner">Plan my project<ArrowRight size={18} weight="bold" /></a><a className="ghost-button" href="#services">Explore services</a></div></div>
        <span className="concept-label">Concept imagery · replace with Harbour job-site photography</span>
      </section>

      <div className="planner-wrap"><ProjectPlanner /></div>

      <section className="section services-section" id="services">
        <div className="center-heading"><p className="eyebrow">What we do</p><h2>Complete care for every space.</h2><p>Start with the surface. Add the related repair and finishing work in one clear scope.</p></div>
        <div className="service-grid">{serviceGroups.map(({ icon: Icon, title, image, items }) => <article className="service-card" key={title}><div className="service-card-heading"><Icon size={28} weight="duotone" /><h3>{title}</h3></div><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul><div className="service-image"><img src={image.replace(/^\//, "")} alt={`Concept visual for Harbour ${title.toLowerCase()} services`} loading="lazy" /><span>Concept imagery</span></div></article>)}</div>
      </section>

      <section className="process-section" id="process">
        <div className="process-heading"><p className="eyebrow">How we work</p><h2>Care in every step.</h2><p>The preparation you may not notice is what makes the finish work.</p></div>
        <div className="process-grid">{process.map(({ icon: Icon, title, copy }, index) => <article key={title}><span className="process-number">0{index + 1}</span><Icon size={31} weight="duotone" /><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="about-section" id="about">
        <div className="about-image"><img src="images/paint-concept.webp" alt="Concept view of a calm painted kitchen interior" loading="lazy" /><span className="concept-label">Concept imagery · replace with Harbour job-site photography</span></div>
        <div className="about-copy"><p className="eyebrow">Owner-led service</p><h2>Personal care.<br />Professional standards.</h2><p>Direct communication, thoughtful preparation and a clear scope from the first assessment to the final walkthrough.</p><div className="about-points"><span><CheckCircle size={19} weight="fill" />One point of contact</span><span><CheckCircle size={19} weight="fill" />Clear written scope</span><span><CheckCircle size={19} weight="fill" />Respect for your space</span></div><a className="text-button" href="#planner">Tell us about your project<ArrowRight size={17} weight="bold" /></a></div>
      </section>

      <section className="area-section" id="areas"><div><p className="eyebrow light">Service area</p><h2>Toronto at the centre.<br />The GTA within reach.</h2></div><div className="area-details"><MapPin size={30} weight="duotone" /><p>Toronto, North York, Etobicoke, Scarborough, Vaughan, Richmond Hill, Markham and Mississauga.</p><small>Location, access and project fit are confirmed during assessment.</small></div></section>

      <section className="final-cta"><div><p className="eyebrow">Let’s plan your project</p><h2>A clearer space starts with a clear brief.</h2></div><div><p>Share the basics and Harbour can confirm the right next step.</p><a className="primary-button" href="#planner">Start my project<ArrowRight size={18} weight="bold" /></a><small>Final scope, availability, timing and pricing are confirmed after assessment.</small></div></section>

      <footer><a className="brand footer-brand" href="#top"><Waves size={27} weight="bold" /><span><strong>Harbour</strong><small>Property Works</small></span></a><p>Painting-led property care for Toronto & the GTA.</p><div><a href="#services">Services</a><a href="#process">Process</a><a href="#planner">Plan a project</a></div><small>© 2026 Harbour Property Works · Website preview</small></footer>
    </main>
  );
}
