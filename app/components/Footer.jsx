'use client';

import { usePathname } from 'next/navigation';

const NO_MAP_PATHS = ['/cape-coral', '/lehigh-acres', '/north-fort-myers', '/fort-myers-beach', '/estero', '/bonita-springs', '/areas'];

export default function Footer({ creditHtml }) {
  const pathname = usePathname();
  const path = (pathname || '').replace(/\/$/, '') || '/';
  const showMap = !NO_MAP_PATHS.includes(path);
  return (
    <footer className="footer"><div className="container footer-grid">
<div><h3>Fort Myers Water Damage</h3><p>Water damage restoration across Lee County, Florida. Answered 24/7.</p><p><a href="tel:+12393563708">239-356-3708</a></p>{showMap ? (<div className="footer-map"><iframe title="Map of Fort Myers, Florida" src="https://www.openstreetmap.org/export/embed.html?bbox=-82.2000%2C26.3000%2C-81.6000%2C26.9000&layer=mapnik&marker=26.6406%2C-81.8723" width="100%" height="170" style={{border: 0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen></iframe></div>) : null}</div>
<div><h3>Get in Touch</h3><ul><li>Fort Myers, FL 33901</li><li><a href="tel:+12393563708">239-356-3708</a></li><li>Available 24/7</li></ul></div>
<div><h3>Explore</h3><ul><li><a href="https://fortmyerswaterdamagerestoration.us/">Home</a></li><li><a href="https://fortmyerswaterdamagerestoration.us/areas/">Service Areas</a></li><li><a href="https://fortmyerswaterdamagerestoration.us/cost/">Cost</a></li><li><a href="https://fortmyerswaterdamagerestoration.us/insurance/">Insurance</a></li><li><a href="https://fortmyerswaterdamagerestoration.us/contact/">Contact</a></li></ul></div>
<div><h3>Services</h3><ul><li><a href="https://fortmyerswaterdamagerestoration.us/water-removal/">Water Removal</a></li><li><a href="https://fortmyerswaterdamagerestoration.us/drying/">Structural Drying</a></li><li><a href="https://fortmyerswaterdamagerestoration.us/sewage-cleanup/">Sewage Cleanup</a></li><li><a href="https://fortmyerswaterdamagerestoration.us/ac-leak/">AC Leak</a></li><li><a href="https://fortmyerswaterdamagerestoration.us/flood-cleanup/">Flood Cleanup</a></li></ul></div>
</div>
<div className="container footer-bottom"><span>Fort Myers Water Damage Restoration, Lee County, FL</span><span><a href="https://fortmyerswaterdamagerestoration.us/privacy-policy/">Privacy Policy</a> &middot; <a href="https://fortmyerswaterdamagerestoration.us/terms/">Terms</a> &middot; <a href="https://fortmyerswaterdamagerestoration.us/disclaimer/">Disclaimer</a></span></div>
{creditHtml ? <p className="photo-credit" dangerouslySetInnerHTML={{ __html: creditHtml }} /> : null}</footer>
  );
}
