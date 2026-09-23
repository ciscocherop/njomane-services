import { ArrowRight, Phone, Shield, Star, Truck } from 'lucide-react';
import { useEffect, useState } from 'react';

const slides = [
  {
    src: '/IMG-20260921-WA0040.jpg',
    alt: 'Truck axles being serviced on the shop floor at Njomane Services',
  },
  {
    src: '/IMG-20260921-WA0028.jpg',
    alt: 'Commercial truck components and suspension parts ready for service',
  },
  {
    src: '/hero_mechanic.jpg',
    alt: 'Professional mechanic working on a commercial truck engine at Njomane Services',
  },
];

const SLIDE_DURATION = 8000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => {
        const next = (c + 1) % slides.length;
        setPrev(c);
        return next;
      });
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (prev === null) return;
    const t = setTimeout(() => setPrev(null), 2200);
    return () => clearTimeout(t);
  }, [prev]);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-zinc-950 flex items-center pt-[86px] overflow-hidden"
    >
      {/* ── Slideshow ── */}
      <div className="absolute inset-0" aria-hidden="true">
        {slides.map((slide, i) => {
          const isActive = i === current;
          const isPrev = i === prev;
          if (!isActive && !isPrev) return null;
          return (
            <div
              key={slide.src}
              className="absolute inset-0"
              style={{
                zIndex: isActive ? 1 : 0,
                opacity: isActive ? 1 : 0,
                transition: 'opacity 2s ease-in-out',
              }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover object-center"
                style={{
                  transform: isActive ? 'scale(1.04)' : 'scale(1)',
                  transition: isActive
                    ? `transform ${SLIDE_DURATION + 2000}ms ease-out`
                    : 'transform 2s ease-in-out',
                }}
              />
            </div>
          );
        })}

        {/* Overlay — stronger on left where text sits */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(9,9,11,0.88) 0%, rgba(9,9,11,0.65) 55%, rgba(9,9,11,0.38) 100%)',
            zIndex: 2,
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{ background: 'linear-gradient(to bottom, transparent, #09090b)', zIndex: 3 }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32" style={{ zIndex: 4 }}>
        <div className="max-w-2xl flex flex-col gap-5">

          {/* ── Status pill — "technicians available" ── */}
          <div className="inline-flex items-center self-start gap-2 bg-zinc-900/90 border border-zinc-700 rounded-full px-3.5 py-1.5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" aria-hidden="true" />
            <span className="text-zinc-200 text-xs font-semibold tracking-wide">
              Technicians Available · Serving Dallas-Fort Worth Metro
            </span>
          </div>

          {/* ── Service category label ── */}
          <div className="inline-flex items-center self-start gap-2">
            <span className="bg-[#FFD400]/12 border border-[#FFD400]/30 text-[#FFD400] text-xs font-semibold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full">
              Mobile Truck &amp; Trailer Mechanic
            </span>
          </div>

          {/* ── Main heading ── */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Keeping Your Fleet{' '}
            <span className="text-[#FFD400]">On The Road.</span>
          </h1>

          {/* ── Tagline ── */}
          <p className="text-[#FFD400]/80 text-sm font-semibold tracking-[0.2em] uppercase">
            — Fast · Reliable · Professional —
          </p>

          {/* ── Supporting copy ── */}
          <p className="text-zinc-300 text-lg leading-relaxed">
            Professional truck and trailer repair, tire services, diagnostics
            and on-site road service in Dallas, TX. We come to you.
          </p>

          {/* ── CTA group ── */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="tel:8573166799"
              className="self-start flex items-center gap-3 bg-[#FFD400] hover:bg-yellow-300 text-zinc-950 font-black px-5 py-3.5 rounded-md transition-colors duration-200 group w-full sm:w-auto justify-center sm:justify-start"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.1rem', letterSpacing: '0.05em' }}
            >
              <Phone size={20} className="flex-shrink-0 group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
              <span className="flex flex-col leading-tight">
                <span className="text-xs font-bold tracking-widest uppercase opacity-75 hidden sm:block">Call For Emergency Dispatch</span>
                <span className="text-xl">857-316-6799</span>
              </span>
            </a>

            {/* ── Secondary CTA ── */}
            <a
              href="#contact"
              className="self-start flex items-center justify-center gap-2 border border-zinc-600 hover:border-zinc-400 text-white hover:bg-white/6 font-semibold px-5 py-3.5 rounded-md transition-all duration-200 text-base w-full sm:w-auto"
            >
              Request Fleet Service Quote
              <ArrowRight size={17} aria-hidden="true" />
            </a>

          </div>

          {/* ── Trust strip ── */}
          <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-zinc-800">
            <div className="flex items-center gap-2">
              <Truck size={15} className="text-[#FFD400]" aria-hidden="true" />
              <span className="text-zinc-300 text-xs font-medium">All Makes &amp; Models</span>
            </div>
            <div className="w-px h-4 bg-zinc-700" aria-hidden="true" />
            <div className="flex items-center gap-2">
              <Shield size={15} className="text-[#FFD400]" aria-hidden="true" />
              <span className="text-zinc-300 text-xs font-medium">On-Site &amp; Road Service</span>
            </div>
            <div className="w-px h-4 bg-zinc-700" aria-hidden="true" />
            <div className="flex items-center gap-2">
              <Star size={15} className="text-[#FFD400]" aria-hidden="true" />
              <span className="text-zinc-300 text-xs font-medium">Trusted by DFW Fleet Operators</span>
            </div>
          </div>
        </div>

        {/* ── Slide indicators ── */}
        <div
          className="absolute bottom-10 left-4 sm:left-6 lg:left-8 flex gap-2"
          role="tablist"
          aria-label="Hero image slides"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Slide ${i + 1}`}
              onClick={() => { setPrev(current); setCurrent(i); }}
              className={`h-1 rounded-full transition-all duration-500 ${i === current ? 'w-8 bg-[#FFD400]' : 'w-3 bg-white/25 hover:bg-white/45'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
