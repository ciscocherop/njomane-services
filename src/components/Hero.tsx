import { ArrowRight, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

// Each slide: AVIF first, JPG/WebP fallback via <picture>. Same fit/position on every slide so framing stays consistent.
const slides = [
  { avif: '/mechanic1.avif', fallback: '/mechanic1.jpg', type: 'image/jpeg', alt: 'Mechanic checking a trailer wheel in the shop' },
  { avif: '/mechanic2.avif', fallback: '/mechanic2.jpg', type: 'image/jpeg', alt: 'Mechanic inspecting the rear of a semi truck chassis' },
  { avif: '/mechanic3.avif', fallback: '/mechanic3.webp', type: 'image/webp', alt: 'Mechanic working under the open hood of a truck engine' },
];

const DISPLAY_MS = 5000;   // time each image is fully shown
const FADE_MS = 900;       // crossfade duration

const HERO_FADE_MASK: React.CSSProperties = {
  maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
  WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
};

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Advance after fade + display time; re-armed on every change so a dot click restarts the timer.
  useEffect(() => {
    const t = setTimeout(() => setCurrent((c) => (c + 1) % slides.length), DISPLAY_MS + FADE_MS);
    return () => clearTimeout(t);
  }, [current]);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-16 overflow-hidden"
    >
      {/* ── Slideshow — masked at the bottom so it dissolves into the site-wide texture ── */}
      <div className="absolute inset-0" aria-hidden="true" style={HERO_FADE_MASK}>
        {/* All slides stay mounted and stacked; only opacity changes, so crossfades never flash blank */}
        {slides.map((slide, i) => (
          <picture
            key={slide.avif}
            className="absolute inset-0"
            style={{ opacity: i === current ? 1 : 0, transition: `opacity ${FADE_MS}ms ease-in-out`, zIndex: 1 }}
          >
            <source srcSet={slide.avif} type="image/avif" />
            <source srcSet={slide.fallback} type={slide.type} />
            <img
              src={slide.fallback}
              alt={slide.alt}
              className="w-full h-full object-cover object-center"
              style={{ filter: 'brightness(1.1) contrast(1.05)' }}
              loading="eager"
              decoding="async"
              fetchPriority={i === 0 ? 'high' : 'low'}
            />
          </picture>
        ))}

        {/* Hero-only overlay — light at the top so the photo reads clearly, heavier toward the bottom,
            plus a soft patch behind the copy. Legibility comes mainly from that + the text-shadow. */}
        <div className="absolute inset-0" style={{
          background: [
            // soft local scrim behind the left-centred copy only — rest of the photo stays bright
            'radial-gradient(ellipse 55% 50% at 22% 55%, rgba(10,10,10,0.4), transparent 75%)',
            'linear-gradient(180deg, rgba(10,10,10,0.25) 0%, rgba(10,10,10,0.45) 50%, rgba(10,10,10,0.75) 100%)',
          ].join(', '),
          zIndex: 2,
        }} />
      </div>

      {/* ── Content ── */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28" style={{ zIndex: 4 }}>
        <div className="max-w-xl flex flex-col gap-5">

          {/* Status pill */}
          <div className="inline-flex items-center self-start gap-2 bg-white/8 border border-white/15 rounded-full px-3.5 py-1.5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" aria-hidden="true" />
            <span className="text-slate-300 text-xs font-semibold tracking-wide [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]">
              Available Now · Dallas-Fort Worth Metro
            </span>
          </div>

          {/* Label */}
          <span className="self-start text-slate-300 text-xs font-semibold tracking-[0.18em] uppercase [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]">
            Mobile Truck &amp; Trailer Mechanic
          </span>

          {/* Heading — clean, no color splits */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Keeping Your Fleet<br />On The Road.
          </h1>

          {/* Subhead */}
          <p className="text-slate-200 text-base leading-relaxed max-w-md [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]">
            Truck and trailer repair, tire services, diagnostics and on-site road service
            across DFW. We come to you.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            {/* Primary — amber */}
            <a
              href="tel:+18573166799"
              className="flex items-center justify-center gap-2 bg-accent hover:brightness-110 text-slate-950 font-bold px-6 py-3.5 rounded-lg shadow-lg transition-colors duration-200 w-full sm:w-auto"
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
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-500 ${i === current ? 'w-8 bg-white' : 'w-3 bg-white/25 hover:bg-white/45'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

