import { Mail, MapPin, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Tires', href: '#tires' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=10900+C+F+Hawn+Fwy,+Dallas,+TX+75217';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-surface-base">
      {/* Fade the section above (photo + overlay) into the footer's base black */}
      <div
        className="absolute left-0 right-0 bottom-full h-16 lg:h-[100px] pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent 0%, var(--bg-base) 100%)' }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-3">
            <div>
              <p className="text-white font-bold text-lg tracking-wide"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.1em' }}>
                NJOMANE
              </p>
              {/* Subdued — not yellow */}
              <p className="text-zinc-500 text-xs font-semibold tracking-[0.15em] uppercase">
                Services LLC
              </p>
            </div>
            <p className="text-copy text-sm leading-relaxed">
              Mobile truck and trailer mechanic serving Dallas, TX and surrounding areas.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="text-white font-semibold text-sm mb-3">Navigation</p>
            <ul className="flex flex-col gap-1" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-zinc-500 hover:text-white text-sm leading-[1.6] transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <p className="text-white font-semibold text-sm mb-3">Services</p>
            <ul className="flex flex-col gap-1" role="list">
              {['Engine Diagnostics', 'Brake Service', 'Transmission Service', 'Tire Change & Repair', 'Electrical Diagnostics', 'Roadside Service'].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-zinc-500 hover:text-white text-sm leading-[1.6] transition-colors duration-200">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm mb-3">Contact</p>
            <ul className="flex flex-col gap-2" role="list">
              <li>
                <a href="tel:+18573166799"
                  className="flex items-start gap-2 text-zinc-500 hover:text-white text-sm leading-[1.6] transition-colors duration-200">
                  <Phone size={13} className="mt-0.5 flex-shrink-0 text-zinc-600" aria-hidden="true" />
                  +1 (857) 316-6799
                </a>
              </li>
              <li>
                <a href="mailto:mmithongo@gmail.com"
                  className="flex items-start gap-2 text-zinc-500 hover:text-white text-sm leading-[1.6] transition-colors duration-200 break-all">
                  <Mail size={13} className="mt-0.5 flex-shrink-0 text-zinc-600" aria-hidden="true" />
                  mmithongo@gmail.com
                </a>
              </li>
              <li>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-2 text-zinc-500 hover:text-white text-sm leading-[1.6] transition-colors duration-200">
                  <MapPin size={13} className="mt-0.5 flex-shrink-0 text-zinc-600" aria-hidden="true" />
                  <span>10900 C F Hawn Fwy<br />Dallas, TX 75217</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-7 pt-5 border-t border-line-subtle flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-600 text-xs">&copy; {year} Njomane Services LLC. All rights reserved.</p>
          <p className="text-zinc-700 text-xs">Truck &amp; Trailer Mechanic · Dallas, TX</p>
        </div>
      </div>
    </footer>
  );
}
