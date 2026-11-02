import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: "Page Not Found | Fort Myers Water Damage Restoration",
  description: "The page you are looking for does not exist or has moved.",
  other: { robots: "noindex, follow" },
  icons: {
    icon: [{ url: "assets/favicon-48.png", type: "image/png", sizes: "48x48" }],
    apple: [{ url: "assets/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "assets/favicon.ico" }],
  },
  openGraph: {
    type: "website",
    title: "Page Not Found | Fort Myers Water Damage Restoration",
    description: "The page you are looking for does not exist or has moved.",
    url: "https://fortmyerswaterdamagerestoration.us/404.html",
  },
  twitter: {
    card: "summary",
    title: "Page Not Found | Fort Myers Water Damage Restoration",
    description: "The page you are looking for does not exist or has moved.",
  },
};

export const viewport = { width: 'device-width', initialScale: 1, themeColor: "#0B5E8C" };

export default function Page() {
  return (
    <>
      <Header current={null} />

<main id="main">
<section className="page-banner"><div className="container banner-inner">
<h1>Page Not Found</h1>
<nav className="breadcrumb" aria-label="Breadcrumb"><a href="https://fortmyerswaterdamagerestoration.us/">Home</a> &raquo; Page Not Found</nav>
</div></section>
<section className="section"><div className="container">
<p>Sorry, the page you are looking for does not exist or has moved.</p>
<p><a className="btn btn-call" href="tel:+12393563708">Call 239-356-3708</a> <span>answered 24/7</span></p>
<p><a href="https://fortmyerswaterdamagerestoration.us/">Go to the homepage</a> &middot; <a href="https://fortmyerswaterdamagerestoration.us/">Browse our services</a></p>
</div></section>
</main>

      <Footer creditHtml={null} />
      <a className="call-bar" href="tel:+12393563708">Call 239-356-3708</a>
      <style dangerouslySetInnerHTML={{ __html: "\n.page-banner{background:#15181d;color:#fff;padding:56px 0}\n.banner-inner{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;flex-wrap:wrap}\n.page-banner h1{color:#fff;font-size:44px;line-height:1.15;margin:0;font-weight:800;letter-spacing:-.02em}\n.breadcrumb{color:#d6d9de;font-weight:700;white-space:normal;line-height:1.5}\n.breadcrumb a{color:#1b9bd7;text-decoration:none}\n@media (max-width:620px){.page-banner{padding:40px 0}.page-banner h1{font-size:36px;line-height:1.18}.table-wrap table{font-size:15px}.table-wrap th,.table-wrap td{padding:10px 8px}}\n@media (max-width:380px){.page-banner h1{font-size:32px}.table-wrap table{font-size:14px}.table-wrap th,.table-wrap td{padding:8px 6px}}\n\n/* Inner-page header dropdowns (page-scoped; mirrors homepage pattern). */\n.nav-drop{position:relative}\n.nav-toggle{background:none;border:0;padding:0;font:inherit;font-size:16px;font-weight:700;color:#15181d;cursor:pointer;display:inline-flex;align-items:center;gap:6px;min-height:44px}\n.nav-toggle:hover{color:#c8102e}\n.nav-toggle::after{content:\"\";border:5px solid transparent;border-top:6px solid currentColor;margin-top:3px;flex-shrink:0}\n.nav-panel{display:none}\n.nav-panel a{display:block;color:#15181d;text-decoration:none;font-weight:700;font-size:16px;padding:11px 14px;border-radius:8px;white-space:nowrap}\n.nav-panel a:hover{background:#f5f6f8;color:#c8102e}\n.nav-panel .nav-current{display:block;padding:11px 14px;font-weight:800;color:#c8102e;border-radius:8px;white-space:nowrap}\n@media (min-width:1021px){\n.nav-drop{padding:14px 0}\n.nav-panel{position:absolute;top:100%;left:0;min-width:264px;background:#fff;border-radius:12px;box-shadow:0 12px 30px rgba(0,0,0,.14);padding:10px;z-index:60;flex-direction:column}\n.nav-drop--areas .nav-panel{left:auto;right:0}\n.nav-drop:hover .nav-panel,.nav-drop:focus-within .nav-panel,.nav-drop.open .nav-panel{display:flex}\n.main-nav a,.nav-toggle{white-space:nowrap}\n}\n@media (max-width:1020px){\n.nav-drop{width:100%}\n.nav-toggle{width:100%;justify-content:space-between}\n.nav-drop.open .nav-panel{display:flex;position:static;box-shadow:none;padding:4px 0 4px 16px;flex-direction:column}\n.nav-panel a{white-space:normal;padding:10px 14px}\n.main-nav.open>a{padding:9px 0;line-height:27.2px}\n.nav-panel .nav-current{white-space:normal}\n}\n/* Inner-page blue table colouring (page-scoped; mirrors homepage tables). */\ntable th{background:#0b5e8c;color:#fff}\ntable td{border-top:1px solid #d8e2ec}\ntable tr:nth-child(even) td{background:#eef5fa}\n.skip-link{position:absolute;left:-9999px;top:0;z-index:9999;background:#0B5E8C;color:#fff;padding:12px 18px;font-weight:700;text-decoration:none}.skip-link:focus{left:12px;top:12px}\n\n/* pretty-wrap 2026-11-02: orphan control on headings */\nh1,h2,h3{text-wrap:pretty}\n\n/* NAV-SERVICES-SCROLLER 2026-11-02: Services dropdown scrolls instead of running long */\n.nav-drop:not(.nav-drop--areas) .nav-panel{max-height:340px;overflow-y:auto;overscroll-behavior:contain}\n" }} />
      <script dangerouslySetInnerHTML={{ __html: "\n(function(){var toggles=document.querySelectorAll('.nav-toggle');if(!toggles.length)return;function closeAll(except){document.querySelectorAll('.nav-drop.open').forEach(function(d){if(d!==except){d.classList.remove('open');var b=d.querySelector('.nav-toggle');if(b)b.setAttribute('aria-expanded','false');}});}toggles.forEach(function(btn){btn.addEventListener('click',function(){var drop=btn.closest('.nav-drop');var isOpen=drop.classList.contains('open');closeAll(drop);if(!isOpen){drop.classList.add('open');btn.setAttribute('aria-expanded','true');}else{drop.classList.remove('open');btn.setAttribute('aria-expanded','false');}});});document.addEventListener('click',function(ev){if(!ev.target.closest('.nav-drop'))closeAll(null);});document.addEventListener('keydown',function(ev){if(ev.key==='Escape')closeAll(null);});var menuBtn=document.querySelector('.menu-btn');var nav=document.getElementById('nav');if(menuBtn&&nav){menuBtn.addEventListener('click',function(){if(!nav.classList.contains('open'))closeAll(null);});}})();\n" }} />

    </>
  );
}
