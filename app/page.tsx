import { QuoteForm } from "./quote-form";

const featured = ["Interior painting", "Exterior painting", "Drywall & repairs", "Carpentry & finishing"];
const serviceGroups = [
  ["01","Interior painting","A clean, considered refresh for lived-in homes, condos, rental units and workspaces.",["Walls, ceilings, trim & doors","Condominium painting","Move-in & pre-sale painting","Colour and finish guidance"]],
  ["02","Exterior painting","Weather-aware preparation and coatings for the exterior surfaces that shape first impressions.",["Brick painting & staining","Wood, vinyl & aluminum siding","Doors, windows & stucco","Exterior caulking & coatings"]],
  ["03","Cabinets & refinishing","Targeted transformations for high-impact surfaces without replacing what can be renewed.",["Kitchen cabinet spraying","Vanities & built-ins","Staircase painting & staining","Front-door refinishing"]],
  ["04","Walls & ceilings","Repair work that creates a sound, smooth foundation before the final finish goes on.",["Drywall installation & repair","Popcorn ceiling removal","Stucco ceiling repair","Wallpaper installation & removal"]],
  ["05","Carpentry & repairs","Practical finishing and repair support for the details that complete a room or exterior.",["Trim, baseboards & crown moulding","Doors, wainscoting & wood repair","Deck, porch & fence repairs","Soffit, fascia & railings"]],
  ["06","Commercial properties","Flexible painting and finishing for offices, retail spaces, rental turnover and managed properties.",["Interior & exterior painting","Common areas & offices","Turnover preparation","Coordinated repair lists"]],
] as const;
const steps = [
  ["Walkthrough","We look at the space, surfaces, access and the result you want."],
  ["Written scope","You receive a clear breakdown of included work and project assumptions."],
  ["Preparation","Surfaces are repaired and the surrounding property is carefully protected."],
  ["Finish & review","The work is completed, cleaned up and reviewed with you before closeout."],
];
const faqs = [
  ["Do you handle small projects?","Yes. Harbour is designed for focused repairs and finishing work as well as full-room, full-home and commercial projects. Every request is assessed for fit and scheduling."],
  ["Can painting and repair work be combined?","Yes. A walkthrough can cover drywall, trim, caulking, carpentry and coating needs so the work can be scoped as one coordinated project where practical."],
  ["Do you work in condos and commercial spaces?","Yes. The service offering includes homes, condominiums, offices, retail spaces, rental units and managed properties across Toronto and the GTA."],
  ["How does an estimate begin?","Tell us the property type, service, location and desired timing. We will determine whether photos are enough for an initial range or whether an on-site walkthrough is the right next step."],
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Harbour Property Works home"><span className="brand-mark" aria-hidden="true">H</span><span>Harbour <strong>Property Works</strong></span></a>
        <nav aria-label="Primary navigation"><a href="#services">Services</a><a href="#process">Our process</a><a href="#about">Why Harbour</a><a className="nav-cta" href="#quote">Request a quote</a></nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Toronto & the GTA · Residential and commercial</p>
          <h1>Good work makes a property feel cared for.</h1>
          <p className="hero-intro">Painting, repairs and thoughtful finishing—handled with clear communication, careful preparation and respect for your space.</p>
          <div className="hero-actions"><a className="button button-primary" href="#quote">Get a free estimate <span aria-hidden="true">→</span></a><a className="text-link" href="#services">Explore our services <span aria-hidden="true">↓</span></a></div>
        </div>
        <div className="hero-visual" aria-label="An abstract, freshly finished Toronto home"><div className="visual-sky" /><div className="visual-home"><span className="visual-window" /><span className="visual-door" /></div><div className="project-note"><span>From first walkthrough</span><strong>to the final clean-up.</strong></div></div>
      </section>

      <section className="service-ribbon" aria-label="Featured services">{featured.map((service,index)=><div key={service}><span>0{index+1}</span><p>{service}</p></div>)}</section>

      <section className="section services-section" id="services">
        <div className="section-heading"><div><p className="eyebrow">One coordinated property partner</p><h2>More than paint.<br />The work around it, too.</h2></div><p>Harbour brings painting, surface repair and finishing work into one clear scope—so you spend less time coordinating separate contractors.</p></div>
        <div className="services-grid">
          {serviceGroups.map(([number,title,copy,items])=>(
            <article className="service-card" key={title}><div className="service-number">{number}</div><h3>{title}</h3><p>{copy}</p><ul>{items.map(item=><li key={item}>{item}</li>)}</ul><a href="#quote" aria-label={"Request a quote for "+title}>Discuss this work <span aria-hidden="true">→</span></a></article>
          ))}
        </div>
        <p className="scope-note">Service availability depends on property conditions, project size and scheduling. Any work requiring a regulated trade is separately identified during scoping.</p>
      </section>

      <section className="process-section" id="process">
        <div className="process-intro"><p className="eyebrow light">How Harbour works</p><h2>A straightforward path from idea to finished space.</h2><p>No invented promises or confusing packages—just a practical process that keeps the scope, property and next decision visible.</p></div>
        <ol className="process-list">{steps.map(([title,copy],index)=><li key={title}><span>0{index+1}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol>
      </section>

      <section className="section about-section" id="about">
        <div className="about-statement"><p className="eyebrow">The Harbour standard</p><h2>Care is visible in the preparation.</h2></div>
        <div className="about-copy"><p className="lead">A strong finish starts before the first coat. Harbour is being built around disciplined preparation, a clear written scope and respect for the property throughout the job.</p><div className="principles"><article><span>Clear</span><h3>Know what is included</h3><p>Scope, surfaces and assumptions are explained before work begins.</p></article><article><span>Careful</span><h3>Protect the space</h3><p>Preparation and clean working practices are treated as part of the job.</p></article><article><span>Complete</span><h3>Review the finish</h3><p>The project closes with a walkthrough and attention to outstanding details.</p></article></div></div>
      </section>

      <section className="commercial-band"><div><p className="eyebrow light">For property professionals</p><h2>Reliable support for the spaces you manage.</h2></div><div><p>Painting, turnover preparation and coordinated repair lists for landlords, property managers, real estate professionals and local businesses.</p><a className="button button-light" href="#quote">Start a commercial request <span aria-hidden="true">→</span></a></div></section>

      <section className="section area-section">
        <div className="area-map" aria-hidden="true"><span className="area-ring ring-one" /><span className="area-ring ring-two" /><span className="area-pin">H</span><span className="shore-line" /></div>
        <div className="area-copy"><p className="eyebrow">Local service area</p><h2>Toronto at the centre. The GTA within reach.</h2><p>Project requests are welcomed from Toronto and surrounding GTA communities. Location, access and project size are confirmed during the estimate process.</p><ul><li>Toronto</li><li>North York</li><li>Etobicoke</li><li>Scarborough</li><li>Vaughan</li><li>Richmond Hill</li><li>Markham</li><li>Mississauga</li></ul></div>
      </section>

      <section className="section faq-section">
        <div><p className="eyebrow">Common questions</p><h2>Before we begin.</h2></div>
        <div className="faq-list">{faqs.map(([question,answer])=><details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="quote-section" id="quote">
        <div className="quote-intro"><p className="eyebrow light">Request an estimate</p><h2>Tell us what your property needs.</h2><p>Share the basics now. Harbour can then confirm the right next step: photos, a short call or an on-site walkthrough.</p><div className="quote-promise"><span>01</span> Your request stays concise.<br /><span>02</span> No obligation to proceed.<br /><span>03</span> Scope before sales pressure.</div></div>
        <QuoteForm />
      </section>

      <footer>
        <div className="footer-brand"><span className="brand-mark footer-mark" aria-hidden="true">H</span><div><strong>Harbour Property Works</strong><p>Painting · Repairs · Finishing</p></div></div>
        <div><p className="footer-label">Service area</p><p>Toronto & the Greater Toronto Area</p></div>
        <div><p className="footer-label">Explore</p><a href="#services">Services</a><a href="#process">Our process</a><a href="#quote">Request a quote</a></div>
        <div className="footer-bottom"><span>© 2026 Harbour Property Works</span><span>Website preview · Contact channel pending connection</span></div>
      </footer>
    </main>
  );
}
