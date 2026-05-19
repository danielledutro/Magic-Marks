import { Mail, MapPin, Phone, ShieldCheck, Sparkles, Building2, CheckCircle2 } from 'lucide-react';

const LOGO = '/logo.png';

const stockImages = {
  hero: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
  office: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
  carpet: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=900&q=80',
  windows: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
  supplies: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=900&q=80',
};

const services = [
  'General Office Cleaning',
  'Deep Cleaning',
  'Carpet Cleaning',
  'Floor Scrubbing',
  'Window Washing',
  'Routine Janitorial Services',
];

const coreFour = [
  {
    number: '1',
    title: 'Hospital-Grade Disinfectants',
    text: 'EPA-registered, hospital-grade disinfectants for a safer, healthier environment.',
  },
  {
    number: '2',
    title: 'Color-Coded Microfiber Cloths',
    text: 'Color-coded microfiber cloths help reduce cross-contamination between cleaning areas.',
  },
  {
    number: '3',
    title: 'No-Dip Flat Mop',
    text: 'A cleaner floor process that avoids repeatedly dipping into dirty mop water.',
  },
  {
    number: '4',
    title: 'HEPA Backpack Vacuum',
    text: 'HEPA backpack vacuuming supports detailed dust removal and improved appearance.',
  },
];

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="nav-wrap">
          <a href="#home" className="brand-link" aria-label="Magic Marks Cleaning Service home">
            <img src={LOGO} alt="Magic Marks Cleaning Service logo" className="nav-logo" />
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#process">Core 4 Process</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="tel:6143971228" className="nav-call">
            Call Now
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="content-grid hero-grid">
            <div className="hero-copy">
              <div className="logo-card">
                <img src={LOGO} alt="Magic Marks Cleaning Service logo" />
              </div>

              <p className="eyebrow">Commercial Cleaning • Galloway, Ohio</p>

              <h1>We Just Do It Better</h1>

              <p className="hero-text">
                Professional office and commercial cleaning from Rich & Veronica Marks.
                Independently owned, bonded & insured, and Spanish-speaking service available.
              </p>

              <div className="button-row">
                <a href="tel:6143971228" className="primary-button">
                  <Phone size={18} /> Call Rich
                </a>
                <a href="mailto:rvmagicmarks@hotmail.com" className="secondary-button">
                  <Mail size={18} /> Request a Quote
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-label="Professional office cleaning image">
              <img src={stockImages.hero} alt="Professional cleaner wiping a table in an office" />
              <div className="hero-badge">
                <ShieldCheck size={22} />
                <span>Bonded & Insured</span>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section soft-section">
          <div className="content-grid two-column">
            <div>
              <p className="eyebrow green">Services</p>
              <h2>Cleaning services for offices and commercial spaces</h2>
              <p className="section-lead">
                Reliable cleaning support for offices, professional buildings, and commercial spaces throughout the Galloway and Columbus-area community.
              </p>

              <div className="service-grid">
                {services.map((service) => (
                  <div className="service-card" key={service}>
                    <div className="accent-line" />
                    <h3>{service}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="image-stack">
              <img src={stockImages.office} alt="Clean modern office space" className="feature-image large" />
              <div className="small-image-row">
                <img src={stockImages.carpet} alt="Clean commercial seating and flooring" />
                <img src={stockImages.windows} alt="Clean bright office interior" />
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="section white-section">
          <div className="section-heading centered">
            <p className="eyebrow green">The Core 4</p>
            <h2>A cleaner process, not just a cleaner space</h2>
          </div>

          <div className="content-grid process-grid">
            {coreFour.map((item) => (
              <div className="process-card" key={item.number}>
                <div className="process-number">{item.number}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section blue-section">
          <div className="content-grid two-column about-grid">
            <div>
              <p className="eyebrow lime">Locally Owned</p>
              <h2>Rich & Veronica Marks</h2>
              <p className="section-lead light">
                Magic Marks Cleaning Service is an independently owned franchise serving Galloway, Ohio and surrounding Columbus-area businesses.
              </p>

              <div className="pill-row">
                <span><ShieldCheck size={18} /> Bonded & Insured</span>
                <span><Building2 size={18} /> Commercial Cleaning</span>
                <span><Sparkles size={18} /> Hablamos español</span>
              </div>
            </div>

            <div className="about-card">
              <img src={stockImages.supplies} alt="Cleaning supplies and disinfectant bottles" />
              <div className="about-card-copy">
                <h3>Professional presentation. Consistent results.</h3>
                <p>
                  A dependable cleaning partner for routine service, detailed cleaning, floor care, and healthier work environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-wrap">
            <img src={LOGO} alt="Magic Marks Cleaning Service logo" className="contact-logo" />
            <p className="eyebrow white">Get in Touch</p>
            <h2>Ready for a cleaner workspace?</h2>
            <p>Call, email, or request a quote from Magic Marks Cleaning Service.</p>

            <div className="contact-grid">
              <a href="tel:6143971228" className="contact-card">
                <Phone size={20} />
                <span>Rich</span>
                <strong>614-397-1228</strong>
              </a>
              <a href="tel:6145826022" className="contact-card">
                <Phone size={20} />
                <span>Veronica</span>
                <strong>614-582-6022</strong>
              </a>
              <a href="mailto:rvmagicmarks@hotmail.com" className="contact-card">
                <Mail size={20} />
                <span>Email</span>
                <strong>rvmagicmarks@hotmail.com</strong>
              </a>
            </div>

            <div className="location-line">
              <MapPin size={20} /> Galloway, Ohio • Hablamos español
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="content-grid footer-grid">
          <div>
            <img src={LOGO} alt="Magic Marks Cleaning Service logo" className="footer-logo" />
            <p>Magic Marks Cleaning Service</p>
          </div>
          <div className="footer-list">
            <span><CheckCircle2 size={16} /> Independently Owned Franchise</span>
            <span><CheckCircle2 size={16} /> Bonded & Insured</span>
            <span><CheckCircle2 size={16} /> Galloway, Ohio</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
