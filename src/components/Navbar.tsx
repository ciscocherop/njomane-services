import { Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Tires', href: '#tires' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/96 backdrop-blur-sm shadow-lg shadow-black/60' : 'bg-zinc-950'
        }`}
    >

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#home" className="flex flex-col leading-none group" aria-label="Njomane Services — home">
            <span
              className="text-white font-black text-xl tracking-widest uppercase group-hover:text-[#FFD400] transition-colors duration-200"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.12em' }}
            >
              NJOMANE
            </span>
            <span
              className="text-[#FFD400] text-xs font-bold tracking-[0.22em] uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Services LLC
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 rounded-md hover:bg-white/5 tracking-wide"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs — button only, no number text */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:8573166799"
              className="flex items-center gap-2 bg-[#FFD400] hover:bg-yellow-300 text-zinc-950 font-black px-5 py-2.5 rounded-md transition-colors duration-200 tracking-wide"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1rem', letterSpacing: '0.06em' }}
            >
              <Phone size={15} aria-hidden="true" />
              CALL NOW
            </a>
          </div>

          {/* Mobile: phone number + hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href="tel:8573166799"
              className="flex items-center gap-1.5 bg-[#FFD400] text-zinc-950 font-black text-sm px-3 py-2 rounded-md"
              aria-label="Call 857-316-6799"
            >
              <Phone size={14} aria-hidden="true" />
              <span>Call</span>
            </a>
            <button
              type="button"
              className="p-2 rounded-md text-zinc-400 hover:text-white hover:bg-white/5 transition-colors duration-200"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
            }`}
          aria-hidden={!menuOpen}
        >
          <ul className="flex flex-col py-2 border-t border-zinc-800" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-colors duration-200 tracking-wide"
                >
                  {link.label}
                </a>
              </li>
            ))}
            {/* Mobile menu — full-width call CTA */}
            <li className="px-4 pt-3 pb-4 flex flex-col gap-2">
              <a
                href="tel:8573166799"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#FFD400] hover:bg-yellow-300 text-zinc-950 font-black text-base px-4 py-3.5 rounded-md transition-colors duration-200"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.05em' }}
              >
                <Phone size={16} aria-hidden="true" />
                CALL NOW — 857-316-6799
              </a>
              <p className="text-zinc-500 text-xs text-center">
                Truck &amp; Trailer Mechanic · Dallas-Fort Worth Metro
              </p>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hazard stripe divider */}
      <div className="hazard-stripe" aria-hidden="true" />
    </header>
  );
}
