import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { type Tire, tireTypes, type TireTypeFilter, tires } from '../data/tires';
import TireCard from './TireCard';

const filterLabels: Record<TireTypeFilter, string> = {
  'All': 'All Tires', 'Steer': 'Steer Tires', 'Drive': 'Drive Tires',
  'Trailer': 'Trailer Tires', 'All Position': 'All Position',
};

const CARD_WIDTH = 280;
const CARD_GAP = 20;
const SCROLL_STEP = CARD_WIDTH + CARD_GAP;

export default function Tires() {
  const [activeFilter, setActiveFilter] = useState<TireTypeFilter>('All');
  const [selectedTire, setSelectedTire] = useState<Tire | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const trackRef = useRef<HTMLUListElement>(null);

  const filtered = activeFilter === 'All' ? tires : tires.filter((t) => t.type === activeFilter);

  const syncArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

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
    <section id="tires" className="bg-surface-section py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-6 lg:mb-8">
          <span className="text-zinc-500 text-xs font-semibold tracking-[0.18em] uppercase">
            Tire Services
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Truck &amp; Trailer Tire Catalog
          </h2>
          <p className="mt-2 text-copy text-sm max-w-2xl">
            Browse available sizes. Call to confirm stock, pricing and fitment.
          </p>
          <div className="mt-3 w-10 h-0.5 bg-zinc-600 rounded-full" aria-hidden="true" />
        </div>

        {/* Banner */}
        <div className="relative rounded-xl overflow-hidden mb-6 h-36 lg:h-44 border border-line-subtle shadow-sm">
          <img
            src="/IMG-20260921-WA0021.jpg"
            alt="Tire inventory at Njomane Services"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
          <div className="absolute inset-0 flex flex-col items-start justify-end p-5 lg:p-6">
            <p className="text-slate-300 text-xs font-semibold tracking-widest uppercase mb-0.5">
              Available In Stock
            </p>
            <h3 className="text-white font-bold text-lg lg:text-xl">
              Commercial Truck &amp; Trailer Tires
            </h3>
          </div>
        </div>

        {/* Filter tabs */}
        <div
          className="flex gap-2 mb-5 p-1 bg-surface-card border border-line-subtle rounded-xl overflow-x-auto"
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
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
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${isActive
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'bg-transparent text-copy hover:bg-surface-card-hover hover:text-white'
                  }`}
              >
                {filterLabels[type]}
              </button>
            );
          })}
        </div>

        {/* Selected tire notice */}
        {selectedTire && (
          <div className="mb-5 flex items-start justify-between gap-4 bg-surface-card border border-line-subtle rounded-lg px-4 py-3">
            <p className="text-sm text-copy">
              <span className="font-semibold text-white">Inquiry:</span>{' '}
              {selectedTire.brand} {selectedTire.size} — scroll to form below.
            </p>
            <button
              type="button"
              onClick={() => setSelectedTire(null)}
              className="text-zinc-500 hover:text-white text-lg leading-none"
              aria-label="Dismiss"
            >×</button>
          </div>
        )}

        {/* Carousel */}
        <div className="relative">
          <ul
            ref={trackRef}
            className="flex gap-5 overflow-x-auto pt-1 -mt-1 pb-3"
            style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={syncArrows}
            role="list"
            aria-label={`${filterLabels[activeFilter]} carousel`}
          >
            {filtered.length > 0 ? filtered.map((tire) => (
              <li
                key={tire.id}
                className="flex-shrink-0 flex"
                style={{ width: 'min(280px, calc(100vw - 48px))', scrollSnapAlign: 'start' }}
              >
                <TireCard tire={tire} onAsk={handleAsk} />
              </li>
            )) : (
              <li className="text-zinc-500 py-16 px-4">No tires found for this filter.</li>
            )}
          </ul>

          {/* Edge fades — match section bg */}
          {canScrollRight && (
            <div
              className="absolute right-0 top-0 bottom-3 w-12 pointer-events-none"
              style={{ background: 'linear-gradient(to right, transparent, var(--bg-section))' }}
              aria-hidden="true"
            />
          )}
          {canScrollLeft && (
            <div
              className="absolute left-0 top-0 bottom-3 w-12 pointer-events-none"
              style={{ background: 'linear-gradient(to left, transparent, var(--bg-section))' }}
              aria-hidden="true"
            />
          )}
        </div>

        {/* Bottom nav */}
        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => scrollBy('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={`w-9 h-9 rounded-full bg-surface-card border border-line-subtle flex items-center justify-center shadow-sm transition-all duration-200 ${canScrollLeft
              ? 'text-copy hover:bg-surface-card-hover hover:text-white'
              : 'text-zinc-600 cursor-not-allowed opacity-50'
              }`}
          >
            <ChevronLeft size={16} aria-hidden="true" />
          </button>

          <p className="text-zinc-500 text-xs">Swipe or use arrows to browse</p>

          <button
            type="button"
            onClick={() => scrollBy('right')}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={`w-9 h-9 rounded-full bg-surface-card border border-line-subtle flex items-center justify-center shadow-sm transition-all duration-200 ${canScrollRight
              ? 'text-copy hover:bg-surface-card-hover hover:text-white'
              : 'text-zinc-600 cursor-not-allowed opacity-50'
              }`}
          >
            <ChevronRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
