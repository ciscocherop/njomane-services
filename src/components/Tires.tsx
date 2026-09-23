import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { type Tire, tireTypes, type TireTypeFilter, tires } from '../data/tires';
import TireCard from './TireCard';

const filterLabels: Record<TireTypeFilter, string> = {
  'All': 'All Tires',
  'Steer': 'Steer Tires',
  'Drive': 'Drive Tires',
  'Trailer': 'Trailer Tires',
  'All Position': 'All Position',
};

// Card width + gap used to calculate scroll distance
const CARD_WIDTH = 280; // px — matches min-w below
const CARD_GAP = 20;  // px — gap-5
const SCROLL_STEP = CARD_WIDTH + CARD_GAP;

export default function Tires() {
  const [activeFilter, setActiveFilter] = useState<TireTypeFilter>('All');
  const [selectedTire, setSelectedTire] = useState<Tire | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const trackRef = useRef<HTMLUListElement>(null);

  const filtered = activeFilter === 'All'
    ? tires
    : tires.filter((t) => t.type === activeFilter);

  // Update arrow disabled states
  const syncArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  // Re-run on filter change (scroll resets to 0)
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollLeft = 0;
    syncArrows();
  }, [activeFilter, syncArrows]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', syncArrows, { passive: true });
    return () => el.removeEventListener('scroll', syncArrows);
  }, [syncArrows]);

  const scrollBy = (dir: 'left' | 'right') => {
    trackRef.current?.scrollBy({
      left: dir === 'right' ? SCROLL_STEP * 3 : -SCROLL_STEP * 3,
      behavior: 'smooth',
    });
  };

  const handleAsk = (tire: Tire) => {
    setSelectedTire(tire);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="tires"
      style={{ background: 'linear-gradient(180deg, #0f0f12 0%, #18181b 60%, #0f0f12 100%)' }}
      className="py-10 lg:py-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="mb-6 lg:mb-8">
          <span className="text-[#FFD400] text-xs font-semibold tracking-[0.18em] uppercase">
            Tire Services
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Truck &amp; Trailer Tire Catalog
          </h2>
          <p className="mt-3 text-zinc-300 text-lg max-w-2xl">
            Browse available sizes and brands. Call us to confirm current stock,
            pricing and fitment for your vehicle.
          </p>
          <div className="mt-4 w-12 h-1 bg-[#FFD400] rounded-full" aria-hidden="true" />
        </div>

        {/* ── Photo banner ── */}
        <div className="relative rounded-2xl overflow-hidden mb-6 h-40 lg:h-48">
          <img
            src="/IMG-20260921-WA0021.jpg"
            alt="Goodyear commercial truck tire inventory at Njomane Services"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-zinc-950/55" />
          <div className="absolute inset-0 flex flex-col items-start justify-end p-6 lg:p-8">
            <p className="text-[#FFD400] text-xs font-semibold tracking-[0.18em] uppercase mb-1">
              Available In Stock
            </p>
            <h3 className="text-white font-bold text-xl lg:text-2xl">
              Commercial Truck &amp; Trailer Tires
            </h3>
            <p className="text-zinc-300 text-sm mt-1">
              Multiple brands · Steer · Drive · Trailer · All Position
            </p>
          </div>
        </div>

        {/* ── Filter tabs ── */}
        <div
          className="flex flex-wrap gap-2 mb-5 p-1 bg-zinc-900 border border-zinc-800 rounded-xl w-fit"
          role="group"
          aria-label="Filter tires by type"
        >
          {tireTypes.map((type) => {
            const isActive = activeFilter === type;
            return (
              <button
                key={type}
                type="button"
                onClick={() => setActiveFilter(type)}
                aria-pressed={isActive}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${isActive
                  ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/25'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                  }`}
              >
                {filterLabels[type]}
              </button>
            );
          })}
        </div>

        {/* ── Selected tire notice ── */}
        {selectedTire && (
          <div className="mb-6 flex items-start justify-between gap-4 bg-sky-500/10 border border-sky-500/30 rounded-lg px-4 py-3">
            <p className="text-sm text-white">
              <span className="font-semibold text-sky-400">Tire inquiry added:</span>{' '}
              {selectedTire.brand} {selectedTire.model} — {selectedTire.size} ({selectedTire.type}).
              Fill in the form below or call us directly.
            </p>
            <button
              type="button"
              onClick={() => setSelectedTire(null)}
              className="text-zinc-400 hover:text-white text-lg leading-none flex-shrink-0"
              aria-label="Dismiss"
            >×</button>
          </div>
        )}

        {/* ── Carousel wrapper ── */}
        <div className="relative">

          {/* Scrollable track */}
          <ul
            ref={trackRef}
            className="flex gap-5 overflow-x-auto pb-3 scroll-smooth"
            style={{
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            onScroll={syncArrows}
            role="list"
            aria-label={`${filterLabels[activeFilter]} carousel`}
          >
            {filtered.length > 0 ? filtered.map((tire) => (
              <li
                key={tire.id}
                className="flex-shrink-0 flex"
                style={{ width: `${CARD_WIDTH}px`, scrollSnapAlign: 'start' }}
              >
                <TireCard tire={tire} onAsk={handleAsk} />
              </li>
            )) : (
              <li className="text-zinc-400 py-16 px-4">No tires found for this filter.</li>
            )}
          </ul>

          {/* Right fade */}
          {canScrollRight && (
            <div
              className="absolute right-0 top-0 bottom-3 w-16 pointer-events-none"
              style={{ background: 'linear-gradient(to right, transparent, #0f0f12)' }}
              aria-hidden="true"
            />
          )}
          {/* Left fade */}
          {canScrollLeft && (
            <div
              className="absolute left-0 top-0 bottom-3 w-16 pointer-events-none"
              style={{ background: 'linear-gradient(to left, transparent, #0f0f12)' }}
              aria-hidden="true"
            />
          )}
        </div>

        {/* ── Bottom center: arrows + swipe hint ── */}
        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => scrollBy('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll tires left"
            className={`w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center shadow-lg transition-all duration-200 ${canScrollLeft
              ? 'text-white hover:bg-zinc-700 hover:border-amber-500/50'
              : 'text-zinc-600 cursor-not-allowed opacity-40'
              }`}
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>

          <p className="text-zinc-500 text-xs">
            Swipe or use arrows to browse different tires
          </p>

          <button
            type="button"
            onClick={() => scrollBy('right')}
            disabled={!canScrollRight}
            aria-label="Scroll tires right"
            className={`w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center shadow-lg transition-all duration-200 ${canScrollRight
              ? 'text-white hover:bg-zinc-700 hover:border-amber-500/50'
              : 'text-zinc-600 cursor-not-allowed opacity-40'
              }`}
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
