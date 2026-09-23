import { Mail, MapPin, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Tires', href: '#tires' },
  { label: 'About', href: '#about' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=10900+C+F+Hawn+Fwy,+Dallas,+TX+75217';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-4">
            <div>
              <p className="text-white font-bold text-lg tracking-wide">NJOMANE</p>
              <p className="text-[#FFD400] text-xs font-semibold tracking-[0.15em] uppercase">
                Services LLC
              </p>
            </div>
            <p className="text-[#A3A3A3] text-sm leading-relaxed">
              Mobile truck and trailer mechanic serving Dallas, TX and surrounding areas.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="text-white font-semibold text-sm mb-4">Navigation</p>
            <ul className="flex flex-col gap-2" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#A3A3A3] hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Services</p>
            <ul className="flex flex-col gap-2" role="list">
              {[
                'Engine Diagnostics',
                'Brake Service',
                'Transmission Service',
                'Tire Change & Repair',
                'Electrical Diagnostics',
                'Roadside Service',
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-[#A3A3A3] hover:text-white text-sm transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Contact</p>
            <ul className="flex flex-col gap-3" role="list">
              <li>
                <a
                  href="tel:8573166799"
                  className="flex items-start gap-2 text-[#A3A3A3] hover:text-white text-sm transition-colors duration-200"
                >
                  <Phone size={14} className="mt-0.5 flex-shrink-0 text-[#FFD400]" aria-hidden="true" />
                  857-316-6799
                </a>
              </li>
              <li>
                <a
                  href="mailto:mmithongo@gmail.com"
                  className="flex items-start gap-2 text-[#A3A3A3] hover:text-white text-sm transition-colors duration-200 break-all"
                >
                  <Mail size={14} className="mt-0.5 flex-shrink-0 text-[#0066FF]" aria-hidden="true" />
                  mmithongo@gmail.com
                </a>
              </li>
              <li>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-[#A3A3A3] hover:text-white text-sm transition-colors duration-200"
                >
                  <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#FFD400]" aria-hidden="true" />
                  <span>10900 C F Hawn Fwy<br />Dallas, TX 75217</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#A3A3A3] text-xs">
            &copy; {year} Njomane Services LLC. All rights reserved.
          </p>
          <p className="text-[#A3A3A3]/40 text-xs">
            Truck &amp; Trailer Mechanic · Dallas, TX
          </p>
        </div>
      </div>
    </footer>
  );
}
