import { ArrowRight, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

const slides = [
  { src: '/IMG-20260921-WA0040.jpg', alt: 'Truck axles being serviced on the shop floor' },
  { src: '/IMG-20260921-WA0028.jpg', alt: 'Commercial truck components ready for service' },
  { src: '/hero_mechanic.jpg', alt: 'Professional mechanic working on a truck engine' },
];

const SLIDE_DURATION = 8000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => { const n = (c + 1) % slides.length; setPrev(c); return n; });
    }, SLIDE_DURATION);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (prev === null) return;
    const t = setTimeout(() => setPrev(null), 2200);
    return () => clearTimeout(t);
  }, [prev]);

  return (
    <section
      id="home"
      /* deep navy-slate — #0f172a */
      className="relative min-h-[92vh] flex items-center pt-16 overflow-hidden"
      style={{ backgroundColor: '#0f172a' }}
    >
      {/* ── Slideshow ── */}
      <div className="absolute inset-0" aria-hidden="true">
        {slides.map((slide, i) => {
          const isActive = i === current;
          const isPrev = i === prev;
          if (!isActive && !isPrev) return null;
          return (
            <div key={slide.src} className="absolute inset-0"
              style={{ zIndex: isActive ? 1 : 0, opacity: isActive ? 1 : 0, transition: 'opacity 2s ease-in-out' }}>
              <img src={slide.src} alt={slide.alt}
                className="w-full h-full object-cover object-center"
                style={{
                  transform: isActive ? 'scale(1.04)' : 'scale(1)',
                  transition: isActive ? `transform ${SLIDE_DURATION + 2000}ms ease-out` : 'transform 2s ease-in-out',
                }}
              />
            </div>
          );
        })}

        {/* Deep gradient — very dark on left, shows image on right */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(105deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.80) 50%, rgba(15,23,42,0.45) 100%)',
          zIndex: 2,
        }} />
        {/* Bottom fade into stats bar */}
        <div className="absolute bottom-0 left-0 right-0 h-56" style={{
          background: 'linear-gradient(to bottom, transparent, #0f172a)',
          zIndex: 3,
        }} />
      </div>

      {/* ── Content ── */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28" style={{ zIndex: 4 }}>
        <div className="max-w-xl flex flex-col gap-5">

          {/* Status pill */}
          <div className="inline-flex items-center self-start gap-2 bg-white/8 border border-white/15 rounded-full px-3.5 py-1.5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" aria-hidden="true" />
            <span className="text-slate-300 text-xs font-semibold tracking-wide">
              Available Now · Dallas-Fort Worth Metro
            </span>
          </div>

          {/* Label */}
          <span className="self-start text-slate-400 text-xs font-semibold tracking-[0.18em] uppercase">
            Mobile Truck &amp; Trailer Mechanic
          </span>

          {/* Heading — clean, no color splits */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Keeping Your Fleet<br />On The Road.
          </h1>

          {/* Subhead */}
          <p className="text-slate-300 text-base leading-relaxed max-w-md">
            Truck and trailer repair, tire services, diagnostics and on-site road service
            across DFW. We come to you.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            {/* Primary — amber */}
            <a
              href="tel:+18573166799"
              className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-6 py-3.5 rounded-lg shadow-lg transition-colors duration-200 w-full sm:w-auto"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1rem', letterSpacing: '0.05em' }}
            >
              <Phone size={16} aria-hidden="true" />
              +1 (857) 316-6799
            </a>
            {/* Secondary — ghost white */}
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3.5 rounded-lg transition-all duration-200 text-sm w-full sm:w-auto"
            >
              Request Service Quote
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-8 left-4 sm:left-6 lg:left-8 flex gap-2" role="tablist" aria-label="Slides">
          {slides.map((_, i) => (
            <button key={i} type="button" role="tab"
              aria-selected={i === current} aria-label={`Slide ${i + 1}`}
              onClick={() => { setPrev(current); setCurrent(i); }}
              className={`h-1 rounded-full transition-all duration-500 ${i === current ? 'w-8 bg-white' : 'w-3 bg-white/25 hover:bg-white/45'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
