import { Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import LogoMark from './LogoMark';

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
  const [activeHref, setActiveHref] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll-spy: the last nav section whose top has passed just below the navbar is current.
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current = navLinks[0].href;
      for (const { href } of navLinks) {
        const el = document.querySelector(href);
        if (el && el.getBoundingClientRect().top <= 120) current = href;
      }
      setActiveHref(atBottom ? navLinks[navLinks.length - 1].href : current);
    };
    onScroll();
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
      className={`fixed top-0 left-0 right-0 z-50 border-b border-line-subtle transition-all duration-300 ${scrolled
          ? 'bg-[rgba(10,10,10,0.85)] backdrop-blur-[8px] shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
          : 'bg-surface-base'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">

          {/* Logo — white text, no yellow */}
          <a href="#home" className="flex items-center gap-2.5 group" aria-label="Njomane Services — home">
            <LogoMark size={34} className="flex-shrink-0 transition-transform duration-500 group-hover:rotate-45" />
            <span className="flex flex-col leading-none">
            <span
              className="text-white font-black text-lg tracking-widest uppercase group-hover:text-zinc-300 transition-colors duration-200"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.12em' }}
            >
              NJOMANE
            </span>
            <span
              className="text-zinc-400 text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Services LLC
            </span>
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map((link) => {
              const isActive = activeHref === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'location' : undefined}
                    className={`relative block px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-white/5 ${isActive ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
                  >
                    {link.label}
                    {/* Active indicator */}
                    <span
                      className={`absolute left-3 right-3 bottom-0.5 h-0.5 rounded-full bg-accent transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA — yellow reserved for this button */}
          <div className="hidden lg:flex items-center gap-5">
            <span className="w-px h-6 bg-white/10" aria-hidden="true" />
            <a
              href="tel:+18573166799"
              className="flex items-center gap-2 bg-accent hover:brightness-110 text-zinc-950 font-black px-5 py-2.5 rounded-md transition-colors duration-200"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.95rem', letterSpacing: '0.05em' }}
            >
              <Phone size={14} aria-hidden="true" />
              +1 (857) 316-6799
            </a>
          </div>

          {/* Mobile: compact call button + hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="tel:+18573166799"
              className="flex items-center gap-1.5 bg-accent text-zinc-950 font-black text-sm px-3 py-2 rounded-md"
              aria-label="Call +1 857-316-6799"
            >
              <Phone size={13} aria-hidden="true" />
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
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
            }`}
          aria-hidden={!menuOpen}
        >
          <ul className="flex flex-col py-2 border-t border-line-subtle" role="list">
            {navLinks.map((link) => {
              const isActive = activeHref === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive ? 'location' : undefined}
                    className={`flex items-center gap-2 px-4 py-3 text-sm hover:bg-white/5 transition-colors duration-200 ${isActive ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
                  >
                    {link.label}
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />}
                  </a>
                </li>
              );
            })}
            <li className="px-4 pt-2 pb-4">
              <a
                href="tel:+18573166799"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-accent hover:brightness-110 text-zinc-950 font-black text-sm px-4 py-3 rounded-md transition-colors duration-200"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                <Phone size={15} aria-hidden="true" />
                +1 (857) 316-6799
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* No hazard stripe — removed */}
    </header>
  );
}

