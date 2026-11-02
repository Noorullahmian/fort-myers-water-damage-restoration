'use client';

const SERVICES = [
  { slug: "water-removal", label: "Emergency Water Removal", href: "https://fortmyerswaterdamagerestoration.us/water-removal/" },
  { slug: "drying", label: "Structural Drying", href: "https://fortmyerswaterdamagerestoration.us/drying/" },
  { slug: "sewage-cleanup", label: "Sewage Backup Cleanup", href: "https://fortmyerswaterdamagerestoration.us/sewage-cleanup/" },
  { slug: "flood-cleanup", label: "Flood & Storm Cleanup", href: "https://fortmyerswaterdamagerestoration.us/flood-cleanup/" },
  { slug: "ac-leak", label: "AC Leak Water Damage", href: "https://fortmyerswaterdamagerestoration.us/ac-leak/" },
  { slug: "ceiling-leak", label: "Ceiling Leak", href: "https://fortmyerswaterdamagerestoration.us/ceiling-leak/" },
  { slug: "burst-pipe", label: "Burst Pipe", href: "https://fortmyerswaterdamagerestoration.us/burst-pipe/" },
  { slug: "slab-leak", label: "Slab Leak", href: "https://fortmyerswaterdamagerestoration.us/slab-leak/" },
  { slug: "water-heater-leak", label: "Water Heater Leak", href: "https://fortmyerswaterdamagerestoration.us/water-heater-leak/" },
  { slug: "condo-leak", label: "Condo Water Damage", href: "https://fortmyerswaterdamagerestoration.us/condo-leak/" },
  { slug: "mobile-home", label: "Mobile Home Water Damage", href: "https://fortmyerswaterdamagerestoration.us/mobile-home/" },
  { slug: "commercial", label: "Commercial Water Damage", href: "https://fortmyerswaterdamagerestoration.us/commercial/" }
];

const AREAS = [
  { slug: "home", label: "Fort Myers", href: "https://fortmyerswaterdamagerestoration.us/" },
  { slug: "cape-coral", label: "Cape Coral", href: "https://fortmyerswaterdamagerestoration.us/cape-coral/" },
  { slug: "lehigh-acres", label: "Lehigh Acres", href: "https://fortmyerswaterdamagerestoration.us/lehigh-acres/" },
  { slug: "north-fort-myers", label: "North Fort Myers", href: "https://fortmyerswaterdamagerestoration.us/north-fort-myers/" },
  { slug: "fort-myers-beach", label: "Fort Myers Beach", href: "https://fortmyerswaterdamagerestoration.us/fort-myers-beach/" },
  { slug: "estero", label: "Estero", href: "https://fortmyerswaterdamagerestoration.us/estero/" },
  { slug: "bonita-springs", label: "Bonita Springs", href: "https://fortmyerswaterdamagerestoration.us/bonita-springs/" },
  { slug: "areas", label: "All Service Areas", href: "https://fortmyerswaterdamagerestoration.us/areas/" }
];

export default function Header({ current }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <div className="utility"><div className="container">{current === 'home' ? (<a href="tel:+12393563708"><span className="util-247">Available 24/7: </span>239-356-3708</a>) : (<a href="tel:+12393563708">Available 24/7: 239-356-3708</a>)}<a href="https://fortmyerswaterdamagerestoration.us/areas/">Service Areas</a><a href="https://fortmyerswaterdamagerestoration.us/contact/">Contact</a></div></div>
      <header className="main-header"><div className="container header-inner">
        <a className="brand" href="https://fortmyerswaterdamagerestoration.us/">Fort Myers Water Damage<span>Restoration, FL</span></a>
        <button className="menu-btn" type="button" aria-label="Open menu" onClick={() => { const nav = document.getElementById('nav'); if (nav) nav.classList.toggle('open'); }}>Menu</button>
        <nav className="main-nav" id="nav">
          <a href="https://fortmyerswaterdamagerestoration.us/" className={current === 'home' ? 'active' : undefined}>Home</a>
          <div className="nav-drop">
            <button className="nav-toggle" type="button" aria-expanded="false" aria-haspopup="true">Services</button>
            <div className="nav-panel">
              {SERVICES.map((item) => (current === item.slug ? (<span className="nav-current" key={item.slug}>{item.label}</span>) : (<a href={item.href} key={item.slug}>{item.label}</a>)))}
            </div>
          </div>
          <a href="https://fortmyerswaterdamagerestoration.us/cost/" className={current === 'cost' ? 'active' : undefined}>Cost</a>
          <div className="nav-drop nav-drop--areas">
            <button className="nav-toggle" type="button" aria-expanded="false" aria-haspopup="true">Areas</button>
            <div className="nav-panel">
              {AREAS.map((item) => (current === item.slug ? (<span className="nav-current" key={item.slug}>{item.label}</span>) : (<a href={item.href} key={item.slug}>{item.label}</a>)))}
            </div>
          </div>
          <a href="https://fortmyerswaterdamagerestoration.us/contact/" className={current === 'contact' ? 'active' : undefined}>Contact</a>
        </nav>
        <div className="header-phone"><small>Available 24/7</small><a href="tel:+12393563708">239-356-3708</a></div>
      </div></header>
    </>
  );
}
